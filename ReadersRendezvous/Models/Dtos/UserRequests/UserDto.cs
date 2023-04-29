namespace ReadersRendezvous.Models.Dtos.UserRequests
{
    public class UserDto
    {
        public int UserId { get; set; }
        public string? FirstName { get; set; }
        public string? LastName { get; set; }
        public string? Email { get; set; }
        public int? LibraryCardNumber { get; set; }
        public string? PhoneNumber { get; set; }
        public string? AddressLineOne { get; set; }
        public string? AddressLineTwo { get; set; }
        public string? City { get; set; }
        public string? State { get; set; }
        public int Zip { get; set; }
    }
}
