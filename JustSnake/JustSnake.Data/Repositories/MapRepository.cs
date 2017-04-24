namespace JustSnake.Data.Repositories
{
    using JustSnake.Data.Abstraction;
    using JustSnake.Data.Repositories.Abstraction;
    using JustSnake.Models;

    public class MapRepository : GenericRepository<Map>, IRepository<Map>
    {
        public MapRepository(IJustSnakeDbContext context)
            : base(context)
        {
        }
    }
}