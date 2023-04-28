namespace ReadersRendezvous.Models.Dtos.UserRequests
{
    public class BookRequestDto
    {
        public string? RequestType { get; set; }
        public int RequestId { get; set; }
        public DateTime RequestTS { get; set; }
        public DateTime? CompletedTS { get; set; }
        public bool? IsApproved { get; set; }
        public int BookId { get; set; }
        public string ImageUrl { get; set; }
        public string Title { get; set; }
        public int Quantity { get; set; } = 1;
        public string Author { get; set; }
        public string Publisher { get; set; }
        public string Language { get; set; }
        public string Description { get; set; }
        public string ISBN13 { get; set; }
        public string AgeRange { get; set; }
        public string Genre { get; set; }
    }
}
