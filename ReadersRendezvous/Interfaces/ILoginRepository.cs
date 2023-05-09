using Microsoft.AspNetCore.Mvc;
using ReadersRendezvous.Models;
using ReadersRendezvous.Models.Dtos.Login;

namespace ReadersRendezvous.Interfaces
{
    public interface ILoginRepository
    {
        User fetchuserbyAdminId(string adminid);
        User FetchUserByIdNonAdmin(string userId);
        void UpdateCredentialsAdmin(string adminId, string passwordHash);
        void UpdateCredentialsNonAdmin(string userId, string passwordHash);
        LoginResponse LoginWithCredentials(LoginRequest loginRequest);

        public void RegisterUser(User user);
    }
}