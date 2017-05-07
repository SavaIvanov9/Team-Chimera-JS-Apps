namespace JustSnake.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;

    public class User
    {
        private DateTime createdOn;
        private bool isDeleted;
        private ICollection<HighScore> highScores;
        private ICollection<Cookie> cookies;

        public User()
        {
            this.createdOn = DateTime.Now;
            this.isDeleted = false;
            this.highScores = new HashSet<HighScore>();
            this.cookies = new HashSet<Cookie>();
        }

        [Key]
        public long Id { get; set; }

        [Required]
        [MaxLength(50)]
        [Index(IsUnique = true)]
        public string Name { get; set; }

        [Required]
        //[MinLength(5)]
        public string Password { get; set; }

        [Required]
        public DateTime CreatedOn
        {
            get
            {
                return this.createdOn;
            }
            set
            {
                this.createdOn = value;
            }
        }

        public DateTime? ModifiedOn { get; set; }

        [Required]
        public bool IsDeleted
        {
            get
            {
                return this.isDeleted;
            }
            set
            {
                this.isDeleted = value;
            }
        }

        public ICollection<HighScore> HighScores
        {
            get
            {
                return this.highScores;
            }
            set
            {
                this.highScores = value;
            }
        }

        public ICollection<Cookie> Cookies
        {
            get
            {
                return this.cookies;
            }
            set
            {
                this.cookies = value;
            }
        }
    }
}
