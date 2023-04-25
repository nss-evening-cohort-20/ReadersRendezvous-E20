using ReadersRendezvous.Models;

namespace ReadersRendezvous.Repository
{
    public interface IUserRepository
    {
        void Delete(int id);
        List<User> GetAllUsers();
        User GetById(int id);
        void Insert(User user);
        //void Insert(User user);
        // void Update(User user);
    }
}