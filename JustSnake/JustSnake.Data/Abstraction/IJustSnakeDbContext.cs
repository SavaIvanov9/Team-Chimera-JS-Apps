namespace JustSnake.Data.Abstraction
{
    using JustSnake.Models;
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Infrastructure;

    public interface IJustSnakeDbContext : IDisposable
    {
        IDbSet<User> Users { get; set; }
        IDbSet<HighScore> HighScores { get; set; }
        IDbSet<Map> Maps { get; set; }

        int SaveChanges();

        IDbSet<T> Set<T>() where T : class;

        DbEntityEntry<T> Entry<T>(T entity) where T : class;
    }
}
