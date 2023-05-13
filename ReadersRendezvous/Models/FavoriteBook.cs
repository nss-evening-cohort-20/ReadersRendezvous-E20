namespace ReadersRendezvous.Models
{
    public class FavoriteBook
    {
        public int Id { get; set; }
        public int BookId { get; set; }
        public int UserId { get; set; }
        public BookFa book { get; set; }

    }

    public class AddFavo
    {
        public int Id { get; set; }
        public int BookId { get; set; }
        public int UserId { get; set; }

    }
}
