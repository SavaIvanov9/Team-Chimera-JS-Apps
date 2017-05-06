using JustSnake.Data.Abstraction;
using JustSnake.Services.Controllers.Abstraction;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using System.Linq;

namespace JustSnake.Services.Controllers
{
    [Route("api/[controller]")]
    public class UserController : BaseController
    {
        public UserController(IJustSnakeData data) : base(data)
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

            if(user == null)
            {
                return this.BadRequest("Incorrect username or password");
            }

            var cookie = $"{user.Name}-{user.Password}";

            return this.Ok(cookie);
        }
    }
}
