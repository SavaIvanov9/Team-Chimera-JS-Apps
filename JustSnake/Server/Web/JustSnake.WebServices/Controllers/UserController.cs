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
    }
}
