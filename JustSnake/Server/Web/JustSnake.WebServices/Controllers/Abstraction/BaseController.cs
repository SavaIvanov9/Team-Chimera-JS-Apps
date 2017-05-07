namespace JustSnake.Services.Controllers.Abstraction
{
    using JustSnake.Data.Abstraction;
    using JustSnake.Encryptor;
    using Microsoft.AspNetCore.Mvc;
    using System;
    using System.Linq;

    public class BaseController : Controller
    {
        private string key;
        private IEncryptor encryptor;

        protected BaseController(IJustSnakeData data, IEncryptor encryptor)
        {
            this.Data = data;
            this.encryptor = encryptor;
            this.key = "JS Sucks";
        }

        protected IJustSnakeData Data { get; }

        protected string EncryptString(string value)
        {
            return encryptor.Encrypt(value, key);
        }

        protected string DecryptString(string value)
        {
            return encryptor.Decrypt(value, key);
        }

        protected string CreateCookie(string name, string password, long id)
        {
            return this.EncryptString($"{name}-{password}-{id}");
        }

        protected bool ValidateCookie(string value)
        {
            var cookie = Data.Cookies
                .All()
                .FirstOrDefault(x => x.Content == value && x.ExpirationDate > DateTime.Now);

            if (cookie == null)
            {
                return false;
            }

            return true;
        }

        protected bool ExtendCookie(string value)
        {
            var result = false;

            try
            {
                var cookie = Data.Cookies
                    .All()
                    .Where(x => x.Content == value)
                    .FirstOrDefault();

                if (cookie == null)
                {
                    throw new Exception();
                }

                if (cookie.ExpirationDate < DateTime.Now.Add(new TimeSpan(1, 0, 15, 0)))
                {
                    var date = cookie.ExpirationDate;
                    cookie.ExpirationDate = date.Add(new TimeSpan(1, 0, 0, 0));
                    Data.Cookies.Update(cookie);
                    Data.SaveChanges();
                }

                result = true;
            }
            catch (Exception ex)
            {
                result = false;
            }

            return result;
        }
    }
}