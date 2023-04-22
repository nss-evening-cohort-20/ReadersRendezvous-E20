using ReadersRendezvous.Models;

namespace ReadersRendezvous.Repository
{
    public interface IBookRepository
    {
        void AddBook(AddBook book);
        List<Book> GetAllBooks();
        BookInfo SearchBooksByID(int bookId);
        BookInfo SearchBooksByISBN(string iSBN);
        Book SearchBooksByTitle(string title);
        List<BookInfo> SearchByAuthor(string author);
        List<BookInfo> SearchByPublisher(string publisher);
    }
}