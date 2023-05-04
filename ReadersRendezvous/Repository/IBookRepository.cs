using ReadersRendezvous.Models;

namespace ReadersRendezvous.Repository
{
    public interface IBookRepository
    {
        void AddBook(AddBook book);
        void DeleteBook(string iSBN);
        void EditBookByISBN13(AddBook book);
        void EditBookById(AddBook book);

        //List<Book> GetAllBooks();
        List<AddBook> GetAllBooks();
        (List<Book>, int) GetAllBooksPaginate(int offset, int limit);
        BookInfo SearchBooksByID(int bookId);
        BookInfo SearchBooksByID2(int id);
        BookInfo SearchBooksByISBN(string iSBN);
        Book SearchBooksByTitle(string title);
        List<BookInfo> SearchByAgeRange(string range);
        List<BookInfo> SearchByAuthor(string author);
        List<BookInfo> SearchByGenre(string bookGenre);
        List<BookInfo> SearchByPublisher(string publisher);
    }
}