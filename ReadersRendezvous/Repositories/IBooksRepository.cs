using ReadersRendezvous.Models;

namespace ReadersRendezvous.Repositories
{
    public interface IBooksRepository
    {
        IEnumerable<Books> GetAllBooks();
        IEnumerable<Books> SearchBooksByTitle(string title);
    }
}
