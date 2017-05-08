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
    [EnableCors("MyPolicy")]
    [Route("api/[controller]")]
    public class HighScoreController : BaseController
    {
        public HighScoreController(IJustSnakeData data, IEncryptor encryptor) : base(data, encryptor)
        {
        }

        [HttpGet("GetAllHighScores")]
        public IActionResult GetAllHighScores()
        {
            var data = this.Data.HighScores
                .All()
                .Where(x => x.IsDeleted == false)
                .AsEnumerable();

            return this.Ok(data);
        }


        [EnableCors("MyPolicy")]
        [HttpGet("GetUserHighScores")]
        public IActionResult GetUserHighScores()
        {
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

            var user = this.Data.Users
                .All()
                .Where(x => x.IsDeleted == false &&
                            x.Id == userId)
                .FirstOrDefault();

            if (user == null)
            {
                return this.BadRequest("No such user");
            }

            var scores = this.Data.HighScores
                .All()
                .Where(x => x.IsDeleted == false &&
                            x.UserId == userId)
                .ToList();

            return this.Ok(scores);
        }

        [EnableCors("MyPolicy")]
        [HttpGet("SaveScore")]
        public IActionResult SaveScore(long value)
        {
            var cookie = Request.Headers.FirstOrDefault(x => x.Key == "Authorization").Value;

            //if (!this.ValidateCookie(cookie))
            //{
            //    return this.BadRequest("Invalid cookie!");
            //}

            //if (!this.ExtendCookie(cookie))
            //{
            //    return this.BadRequest("Could not extend cookie!");
            //}

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

            this.Data.Users.Update(user);
            Data.SaveChanges();

            return this.Ok();
        }
    }
}
