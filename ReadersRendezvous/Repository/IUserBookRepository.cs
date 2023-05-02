using ReadersRendezvous.Models;

namespace ReadersRendezvous.Repository
{
    public interface IUserBookRepository
    {
        void AddUserBook(UserBook userBook);
        void DeleteUserBook(int id);
        UserBook SearchUserBookById(int userBookId);
        List<UserBook> SearchUserBookByLibraryCardNumber(int libraryCardNumber);
        List<UserBook> SearchUserBookByUserId(int userId);
    }
}