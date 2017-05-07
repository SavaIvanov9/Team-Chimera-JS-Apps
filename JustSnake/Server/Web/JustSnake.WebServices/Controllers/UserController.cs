using JustSnake.Data.Abstraction;
using JustSnake.Encryptor;
using JustSnake.Models;
using JustSnake.Services.Controllers.Abstraction;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Linq;
using System.Text.RegularExpressions;

namespace JustSnake.Services.Controllers
{
    [EnableCors("MyPolicy")]
    [Route("api/[controller]")]
    public class UserController : BaseController
    {
        public UserController(IJustSnakeData data, IEncryptor encryptor) : base(data, encryptor)
        {
        }

        [EnableCors("MyPolicy")]
        [HttpGet("GetAllUsers")]
        public IActionResult GetAllUsers()
        {
            var data = this.Data.Users
                .All()
                .Where(x => x.IsDeleted == false)
                .AsEnumerable();

            return this.Ok(data);
        }

        [EnableCors("MyPolicy")]
        [HttpGet("ValidateUser")]
        public IActionResult ValidateUser(string userName, string password)
        {
            var user = this.Data.Users
                .All()
                .Where(x => x.IsDeleted == false &&
                            x.Name == userName &&
                            x.Password == password)
                .FirstOrDefault();

            if (user == null)
            {
                return this.BadRequest("Incorrect username or password");
            }

            var content = this.CreateCookie(user.Name, user.Password, user.Id);

            this.Data.Cookies.Add(new Cookie
            {
                Content = content,
            });

            this.Data.SaveChanges();
            //if (!this.Data.SaveChanges())
            //{
            //    return this.Badrequest("Could not save cookie");
            //}

            return this.Ok(content);
        }

        [EnableCors("MyPolicy")]
        [HttpGet("CreateUser")]
        public IActionResult CreateUser(string name, string password)
        {
            var duplicateUser = Data.Users
                .All()
                .FirstOrDefault(x => x.Name == name);

            if (duplicateUser != null)
            {
                return this.BadRequest("Username already exists!");
            }

            if (password.Length < 5)
            {
                return this.BadRequest("Password must be atleast 5 symbols");
            }

            var user = new User
            {
                Name = name,
                Password = password,
                CreatedOn = DateTime.Now,
                IsDeleted = false
            };

            Data.Users.Add(user);
            Data.SaveChanges();

            var userId = Data.Users
                .All()
                .FirstOrDefault(x => x.Name == name && x.Password == password).Id;

            var content = this.CreateCookie(user.Name, user.Password, user.Id);

            this.Data.Cookies.Add(new Cookie
            {
                Content = content,
            });

            this.Data.SaveChanges();

            return this.Ok(content);
        }

        [EnableCors("MyPolicy")]
        [HttpGet("SaveScore")]
        public IActionResult SaveScore(long value/*, string cookie*/)
        {
            //cookie = cookie.Trim();

            //cookie = cookie.Replace(" ", "");

            var cookie = Request.Headers.FirstOrDefault(x => x.Key == "Authorization").Value;

            if (!this.ValidateCookie(cookie))
            {
                return this.BadRequest("Invalid cookie!");
            }

            if (!this.ExtendCookie(cookie))
            {
                return this.BadRequest("Could not extend cookie!");
            }

            var decryptedCookie = this.DecryptString(cookie);
            int index = decryptedCookie.LastIndexOf('-');

            long userId = long.Parse(decryptedCookie.Substring(index + 1));

            var user = Data.Users
                .All()
                .FirstOrDefault(x => x.Id == userId && x.IsDeleted == false);

            if (user == null)
            {
                return this.BadRequest("Unknown user");
            }

            user.HighScores.Add(
                new HighScore
                {
                    Value = value,
                    CreatedOn = DateTime.Now,
                    IsDeleted = false
                });

            Data.SaveChanges();

            return this.Ok();
        }
    }
}
