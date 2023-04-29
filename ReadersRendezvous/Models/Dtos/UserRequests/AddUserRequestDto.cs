namespace ReadersRendezvous.Models.Dtos.UserRequests
{
    public class AddUserRequestDto
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public int BookId { get; set; }
        public DateTime RequestTS { get; set; }
        public int RequestTypeId { get; set; }

    }
}
