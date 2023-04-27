using ReadersRendezvous.Models;

namespace ReadersRendezvous.Interfaces
{
    public interface ILoginRepository
    {
        User fetchuserbyAdminId(string adminid);
        User FetchUserByIdNonAdmin(string userId);
        void UpdateCredentialsAdmin(string adminId, string passwordHash);
        void UpdateCredentialsNonAdmin(string userId, string passwordHash);
        User ValidateCredentialsAdmin(string passwordHash);
        User ValidateCredentialsNonAdmin(string passwordHash);
    }
}