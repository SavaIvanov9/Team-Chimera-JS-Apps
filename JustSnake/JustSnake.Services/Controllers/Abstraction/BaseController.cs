namespace JustSnake.Services.Controllers.Abstraction
{
    using JustSnake.Data.Abstraction;
    using Microsoft.AspNetCore.Mvc;

    public class BaseController : Controller
    {
        protected BaseController(IJustSnakeData data)
        {
            this.Data = data;
        }

        protected IJustSnakeData Data { get; set; }
    }
}