using ReadersRendezvous.Models;
using ReadersRendezvous.Models.Dtos.UserRequests;

namespace ReadersRendezvous.Repository
{
    public interface IUserRequestRepository
    {
        UserRequestDto GetAllOpenHoldRequestsByUser(int userId);
        IEnumerable<UserRequestDto> GetAllHoldRequests();
        int DeleteHoldRequest(int requestId);
        int UpdateHoldRequestStatus(UserRequest userRequest);
        void AddHoldRequest(AddUserRequestDto addUserRequestDto);
    }
}
