using ReadersRendezvous.Models;

namespace ReadersRendezvous.Interfaces
{
    public interface IBookRepository
    {
        void AddBook(AddBook book);
        void DeleteBook(string iSBN);
        void EditBook(string ISBN13, AddBook book);
        List<Book> GetAllBooks();
        BookInfo SearchBooksByID(int bookId);
        BookInfo SearchBooksByISBN(string iSBN);
        Book SearchBooksByTitle(string title);
        List<BookInfo> SearchByAgeRange(string range);
        List<BookInfo> SearchByAuthor(string author);
        List<BookInfo> SearchByGenre(string bookGenre);
        List<BookInfo> SearchByPublisher(string publisher);
    }
}