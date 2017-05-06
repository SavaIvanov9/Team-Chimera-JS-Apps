using JustSnake.Data.Abstraction;
using JustSnake.Encryptor;
using JustSnake.Models;
using JustSnake.Services.Controllers.Abstraction;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Linq;

namespace JustSnake.Services.Controllers
{
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

            var cookie = $"{user.Name}-{user.Password}-{user.Id}";
            var content = this.EncryptString(cookie);

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
        [HttpGet("SaveScore")]
        public IActionResult SaveScore(long value, string cookie)
        {
            var result = this.ValidateCookie(cookie);

            if (!result)
            {
                return this.BadRequest("Invalid cookie!");
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
