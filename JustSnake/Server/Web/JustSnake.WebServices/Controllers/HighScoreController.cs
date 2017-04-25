using JustSnake.Data.Abstraction;
using JustSnake.Services.Controllers.Abstraction;
using Microsoft.AspNetCore.Mvc;
using System.Linq;

namespace JustSnake.Services.Controllers
{
    [Route("api/[controller]")]
    public class HighScoreController : BaseController
    {
        public HighScoreController(IJustSnakeData data) : base(data)
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
    }
}
