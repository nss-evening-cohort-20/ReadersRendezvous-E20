namespace ReadersRendezvous.Models
{
    public class UserRequest
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public int BookId { get; set; }
        public DateTime RequestTS { get; set; }
        public int RequestTypeId { get; set; }
        public DateTime CompletedTS { get; set; }
        public bool IsApproved { get; set; }
    }
}
