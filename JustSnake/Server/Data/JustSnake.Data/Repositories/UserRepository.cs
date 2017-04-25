namespace JustSnake.Data.Repositories
{
    using JustSnake.Data.Abstraction;
    using JustSnake.Data.Repositories.Abstraction;
    using JustSnake.Models;

    public class UserRepository : GenericRepository<User>, IRepository<User>
    {
        public UserRepository(IJustSnakeDbContext context)
            : base(context)
        {
        }
    }
}