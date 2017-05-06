namespace JustSnake.Models
{
    using System;
    using System.ComponentModel.DataAnnotations;

    public class Cookie
    {
        private DateTime expirationDate;

        public Cookie()
        {
            this.expirationDate = DateTime.Now.Add(new TimeSpan(1, 0, 0, 0));
        }

        [Required]
        public string Content { get; set; }

        [Required]
        public DateTime ExpirationDate {
            get
            {
                return this.expirationDate;
            }

            private set
            {
                this.expirationDate = value;
            }
        }
    }
}
