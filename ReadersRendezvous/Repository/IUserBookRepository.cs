using ReadersRendezvous.Models;

namespace ReadersRendezvous.Repository
{
    public interface IUserBookRepository
    {
        void AddUserBook(UserBook userBook);
        void DeleteUserBook(int id);
        void EditUserBook(UserBook userBook);
        List<UserBook> GetAllUserBooks();
        List<UserBookDto> GetAllUserBooksDTO();
        UserBook SearchUserBookById(int userBookId);
        List<UserBookDto> SearchUserBookByLibraryCardNumber(int libraryCardNumber);
        List<UserBookDto> SearchUserBookByUserId(int userId);
    }
}