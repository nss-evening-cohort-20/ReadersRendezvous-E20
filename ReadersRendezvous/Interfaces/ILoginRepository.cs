using ReadersRendezvous.Models;
using ReadersRendezvous.Models.Dtos.Login;

namespace ReadersRendezvous.Interfaces
{
    public interface ILoginRepository
    {
        User fetchuserbyAdminId(string adminid);
        User FetchUserByIdNonAdmin(string userId);
        LoginResponse LoginWithCredentials(LoginRequest loginRequest);
        void RegisterUser(RegisterUserClass registerUser);
        void UpdateCredentialsAdmin(string adminId, string passwordHash);
        void UpdateCredentialsNonAdmin(string userId, string passwordHash);
    }
}