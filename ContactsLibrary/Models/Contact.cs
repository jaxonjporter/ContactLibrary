using System;

namespace ContactsLibrary.Models
{
    public class Contact
    {
        public int ID { get; set; }

        public string Name { get; set; }

        public string Group { get; set; }

        public string Birthdate { get; set; }

        public bool Favorite { get; set; }

        public DateTime CreatedAt { get; set; }

        public DateTime? UpdatedAt { get; set; }
    }
}
