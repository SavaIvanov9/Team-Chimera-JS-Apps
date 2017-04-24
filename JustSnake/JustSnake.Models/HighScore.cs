namespace JustSnake.Models
{
    using System;
    using System.ComponentModel.DataAnnotations;

    public class HighScore
    {
        private DateTime createdOn;
        private bool isDeleted;

        public HighScore()
        {
            this.createdOn = DateTime.Now;
            this.isDeleted = false;
        }

        [Key]
        public long Id { get; set; }

        [Required]
        public long Value { get; set; }

        [Required]
        public Map Map { get; set; }

        [Required]
        public DateTime CreatedOn { get; set; }

        [Required]
        public bool IsDeleted { get; set; }
    }
}
