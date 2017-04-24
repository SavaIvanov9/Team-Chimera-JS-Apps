namespace JustSnake.Services.StartupConfigs
{
    using JustSnake.Data;
    using JustSnake.Data.Migrations;
    using System.Data.Entity;

    public class DatabaseConfig
    {
        public static void Initizlize()
        {
            Database.SetInitializer(new MigrateDatabaseToLatestVersion<JustSnakeDbContext, Configuration>());
            //Database.SetInitializer(new DropCreateDatabaseAlways<PornBoxDbContext>());
        }
    }
}
