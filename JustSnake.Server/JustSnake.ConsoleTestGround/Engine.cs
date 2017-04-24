using JustSnake.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace JustSnake.ConsoleTestGround
{
    public class Engine
    {
        public void Start()
        {
            var db = new JustSnakeData();
            Console.WriteLine(db.Users.All().ToList().Count);
        }
    }
}
