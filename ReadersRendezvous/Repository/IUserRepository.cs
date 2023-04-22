using ReadersRendezvous.Model;

namespace ReadersRendezvous.Repository
{
    public interface IUserRepository
    {
        void Delete(object id);
        List<User> GetAllUsers();
        object GetById(int id);
        void Insert(User user);
        void Update(User user);
    }
}