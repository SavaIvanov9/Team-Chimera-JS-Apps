using JustSnake.Data.Abstraction;
using JustSnake.Services.Controllers.Abstraction;
using Microsoft.AspNetCore.Mvc;
using System.Linq;

namespace JustSnake.Services.Controllers
{
    [Route("api/[controller]")]
    public class MapController : BaseController
    {
        public MapController(IJustSnakeData data) : base(data)
        {
        }

        [HttpGet("GetAllMaps")]
        public IActionResult GetAllMaps()
        {
            var data = this.Data.Maps
                .All()
                .Where(x => x.IsDeleted == false)
                .AsEnumerable();

            return this.Ok(data);
        }
    }
}
