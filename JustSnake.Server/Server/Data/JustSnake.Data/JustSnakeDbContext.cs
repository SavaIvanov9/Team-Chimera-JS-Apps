namespace JustSnake.Data
{
    using JustSnake.Data.Abstraction;
    using JustSnake.Data.Migrations;
    using JustSnake.Models;
    using System.Data.Entity;

    public class JustSnakeDbContext : DbContext, IJustSnakeDbContext
    {
        public JustSnakeDbContext() : base("JustSnake")
        {
            Database.SetInitializer(
                new MigrateDatabaseToLatestVersion<JustSnakeDbContext, Configuration>());
        }

        public virtual IDbSet<User> Users { get; set; }

        public virtual IDbSet<HighScore> HighScores { get; set; }

        public virtual IDbSet<Map> Maps { get; set; }

        public new IDbSet<T> Set<T>() where T : class
        {
            return base.Set<T>();
        }
    }
}
