using JustSnake.Data.Abstraction;
using JustSnake.Encryptor;
using JustSnake.Services.Controllers.Abstraction;
using Microsoft.AspNetCore.Mvc;
using System.Linq;

namespace JustSnake.Services.Controllers
{
    [Route("api/[controller]")]
    public class MapController : BaseController
    {
        public MapController(IJustSnakeData data, IEncryptor encryptor) : base(data, encryptor)
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
