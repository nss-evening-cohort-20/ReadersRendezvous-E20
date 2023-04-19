using ReadersRendezvous.Models;

namespace ReadersRendezvous.Models
{
    public class Books
    {
        public int Id { get; set; }
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
}

