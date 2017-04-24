namespace JustSnake.Data.Repositories
{
    using JustSnake.Data.Abstraction;
    using JustSnake.Data.Repositories.Abstraction;
    using JustSnake.Models;

    public class HighScoreRepository : GenericRepository<HighScore>, IRepository<HighScore>
    {
        public HighScoreRepository(IJustSnakeDbContext context)
            : base(context)
        {
        }
    }
}