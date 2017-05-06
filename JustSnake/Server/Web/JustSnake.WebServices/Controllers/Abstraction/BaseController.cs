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

        protected bool ValidateCookie(string value)
        {
            var cookie = Data.Cookies
                .All()
                .FirstOrDefault(x => x.Content == value && x.ExpirationDate > DateTime.Now);

            if(cookie == null)
            {
                return false;
            }

            return true;
        }
    }
}