namespace JustSnake.Data
{
    using JustSnake.Data.Abstraction;
    using JustSnake.Data.Repositories;
    using JustSnake.Data.Repositories.Abstraction;
    using JustSnake.Models;
    using System;
    using System.Collections.Generic;

    public class JustSnakeData : IJustSnakeData
    {
        private readonly IJustSnakeDbContext context;
        private readonly IDictionary<Type, object> repositories;

        public JustSnakeData()
            : this(new JustSnakeDbContext())
        {
        }

        public JustSnakeData(IJustSnakeDbContext context)
        {
            this.context = context;
            this.repositories = new Dictionary<Type, object>();
        }

        public UserRepository Users => (UserRepository)this.GetRepository<User>();

        public HighScoreRepository HighScores => (HighScoreRepository)this.GetRepository<HighScore>();

        public MapRepository Maps => (MapRepository)this.GetRepository<Map>();

        public void SaveChanges()
        {
            this.context.SaveChanges();
        }

        private IRepository<T> GetRepository<T>() where T : class
        {
            var repositoryType = typeof(T);

            if (!this.repositories.ContainsKey(repositoryType))
            {
                var type = typeof(GenericRepository<T>);

                this.SetType(repositoryType, ref type);

                this.repositories.Add(repositoryType, Activator.CreateInstance(type, this.context));
            }

            return (IRepository<T>)this.repositories[repositoryType];
        }

        private void SetType(Type repositoryType, ref Type type)
        {
            if (repositoryType.IsAssignableFrom(typeof(User)))
                type = typeof(UserRepository);
            else if (repositoryType.IsAssignableFrom(typeof(HighScore)))
                type = typeof(HighScoreRepository);
            else if (repositoryType.IsAssignableFrom(typeof(Map)))
                type = typeof(MapRepository);
        }
    }
}