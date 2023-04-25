using ReadersRendezvous.Models;

namespace ReadersRendezvous.Repository
{
    public interface IAdminRepository
    {
        void AddAdmin(Admin admin);
        void DeleteAdmin(int id);
        void EditAdmin(Admin admin);
        List<Admin> GetAllAdmins();
        Admin SearchAdminsById(int adminId);
    }
}