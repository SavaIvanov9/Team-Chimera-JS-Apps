namespace JustSnake.Data.Repositories
{
    using JustSnake.Data.Abstraction;
    using JustSnake.Data.Repositories.Abstraction;
    using JustSnake.Models;

    public class CookieRepository : GenericRepository<Cookie>, IRepository<Cookie>
    {
        public CookieRepository(IJustSnakeDbContext context)
            : base(context)
        {
        }
    }
}
