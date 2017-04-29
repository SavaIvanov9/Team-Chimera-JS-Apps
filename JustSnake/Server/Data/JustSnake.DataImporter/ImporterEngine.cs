namespace JustSnake.DataImporter
{
    using JustSnake.Data;
    using JustSnake.Models;
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Text;

    public class ImporterEngine
    {
        public void Start()
        {
            Import();

            DisplayDbStatus();
        }

        public void Import()
        {
            AddUsers();

            AddMaps();

            AddHighscores();
        }

        private void AddUsers()
        {
            var db = new JustSnakeData();

            var users = db.Users.All().ToList();
            //Console.WriteLine(users.Count);

            var user = new User
            {
                Name = "TestUser1",
                HighScores = new List<HighScore>
                {
                }
            };

            db.Users.Add(user);

            db.SaveChanges();
        }

        private void AddMaps()
        {
            var db = new JustSnakeData();

            var map = new Map
            {
                Name = "Test Map 1",
                Description = "test description",
                Content = Encoding.ASCII.GetBytes("---")
            };

            db.Maps.Add(map);

            db.SaveChanges();
        }

        private void AddHighscores()
        {
            var db = new JustSnakeData();

            var highscoreMap = db.Maps.All().FirstOrDefault();

            var highscoreUser = db.Users.All().FirstOrDefault();

            var highscore = new HighScore()
            {
                Value = 100,
                //Map = highscoreMap,
                User = highscoreUser
            };

            highscoreUser.HighScores.Add(highscore);

            //db.HighScores.Add(highscore);

            db.Users.Update(highscoreUser);

            db.SaveChanges();
        }

        private void DisplayDbStatus()
        {
            var db = new JustSnakeData();

            var status = new StringBuilder();
            status.AppendLine($"Users: {db.Users.All().Count().ToString()} {db.Users.All().FirstOrDefault().HighScores.Count()}");
            status.AppendLine($"Maps: {db.Users.All().Count().ToString()}");
            status.AppendLine($"Highscores: {db.Users.All().Count().ToString()}");

            Console.WriteLine(status);
        }
    }
}
