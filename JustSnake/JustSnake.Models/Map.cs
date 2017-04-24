namespace JustSnake.Models
{
    using System;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.IO;

    public class Map
    {
        private DateTime createdOn;
        private bool isDeleted;
        
        public Map()
        {
            this.createdOn = DateTime.Now;
            this.isDeleted = false;
        }

        [Key]
        public long Id { get; set; }

        [Required]
        [MaxLength(50)]
        [Index(IsUnique = true)]
        public string Name { get; set; }

        [Required]
        public byte[] Content { get; set; }

        [Required]
        [MaxLength(50)]
        public string Description { get; set; }

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
    }
}
