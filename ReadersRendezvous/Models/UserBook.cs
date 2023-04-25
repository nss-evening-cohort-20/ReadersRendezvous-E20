namespace ReadersRendezvous.Models
{
    public class UserBook
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public int BookId { get; set; }
        public DateTime RentalStartDate { get; set; }
        public DateTime DueDate { get; set; }
        public decimal LateFee { get; set; }
        public DateTime ReturnDate { get; set; }
    }
}