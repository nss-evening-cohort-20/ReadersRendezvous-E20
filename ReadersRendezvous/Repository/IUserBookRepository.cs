using ReadersRendezvous.Models;

namespace ReadersRendezvous.Repository
{
    public interface IUserBookRepository
    {
        void AddUserBook(UserBook userBook);
        void DeleteUserBook(int id);
        UserBook SearchUserBookById(int userBookId);
        UserBook SearchUserBookByIsbn13(int isbn13);
        UserBook SearchUserBookByLibraryCardNumber(int libraryCardNumber);
        UserBook SearchUserBookByUserId(int userId);
    }
}