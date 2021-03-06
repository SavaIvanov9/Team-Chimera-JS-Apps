﻿namespace JustSnake.Data.Abstraction
{
    using JustSnake.Data.Repositories;

    public interface IJustSnakeData
    {
        UserRepository Users { get; }

        HighScoreRepository HighScores { get; }

        MapRepository Maps { get; }

        CookieRepository Cookies { get; }

        void SaveChanges();
    }
}