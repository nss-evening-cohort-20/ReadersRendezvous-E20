namespace ReadersRendezvous.Models.Dtos.UserRequests
{
    public class UserRequestDto
    {
        public UserDto User { get; set; }
        public IEnumerable<BookRequestDto> BookRequests { get; set; }
    }
}
