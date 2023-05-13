using ReadersRendezvous.Models;

namespace ReadersRendezvous.Repository
{
    public interface IFavoriteBookRepository
    {
        void AddFavoriteBook(AddFavo favoriteBook);
        void DeleteFavoriteBook(int bookId);
        List<FavoriteBook> GetAllFavoriteBooks(int userId);
    }
}