using System.ComponentModel.DataAnnotations;

namespace ReadersRendezvous.Models
{
    public class Book
    {
        public int Id { get; set; }
        public string ImageUrl { get; set; }
        public int AgeRangeId { get; set; }
        public int GenreId { get; set; }
        public string Title { get; set; }
        public int CoverTypeId { get; set; }
        public int Quantity { get; set; } = 1;
        public string Author { get; set; }
        public string Publisher { get; set; }
        public string Language { get; set; } = "English";
        public string Description { get; set; }
        public string ISBN13 { get; set; }
        public AgeRange AgeRange { get; set; }
        public Genre Genre { get; set; }
        //public CoverType CoverType {get; set;}
    }


    public class AddBook
    {
        [Key]
        public int Id { get; set; }
        public string ImageUrl { get; set; }
        public int AgeRangeId { get; set; }
        public int GenreId { get; set; }
        public string Title { get; set; }
        public int CoverTypeId { get; set; }
        public int Quantity { get; set; } = 1;
        public string Author { get; set; }
        public string Publisher { get; set; }
        public string Language { get; set; } = "English";
        public string Description { get; set; }
        public string ISBN13 { get; set; }

    }

    public class BookInfo
    {
        public int Id { get; set; }
        public string ImageUrl { get; set; }
        public string Title { get; set; }
        public int Quantity { get; set; } = 1;
        public string Author { get; set; }
        public string Publisher { get; set; }
        public string Language { get; set; } = "English";
        public string Description { get; set; }
        public string ISBN13 { get; set; }
        public AgeRange AgeRange { get; set; }
        public Genre Genre { get; set; }
        public CoverType CoverType { get; set; }

    }

    public class BookFa
    {
        public int Id { get; set; }
        public string ImageUrl { get; set; }
        public string Title { get; set; }
    }
}

