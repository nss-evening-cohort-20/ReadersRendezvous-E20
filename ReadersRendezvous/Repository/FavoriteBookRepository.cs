using ReadersRendezvous.Models;
using ReadersRendezvous.Repositories;
using ReadersRendezvous.Utils;
using System.Net;

namespace ReadersRendezvous.Repository
{
    public class FavoriteBookRepository : BaseRepository, IFavoriteBookRepository
    {
        public FavoriteBookRepository(IConfiguration configuration) : base(configuration)
        {
        }

        /*------------------GetAllUserFavoriteBooks()----------------------*/
        public List<FavoriteBook> GetAllFavoriteBooks( int userId)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"SELECT [FavoriteBook].[Id]
                                              ,[FavoriteBook].[UserId]
                                              ,[FavoriteBook].[BookId]
                                              ,[Book].[Id] As [BId]
                                              ,[Book].[ImageUrl]
                                              ,[Book].[Title]
                                          FROM [ReadersRendezvous].[dbo].[FavoriteBook]
                                          INNER JOIN [Book] ON [Book].[Id] = [FavoriteBook].[BookId]
                                          WHERE [FavoriteBook].[UserId] = @UserId";
                   
                    DbUtils.AddParameter(cmd, "@UserId", userId);
                    var reader = cmd.ExecuteReader();
                    var faivorites = new List<FavoriteBook>();
                    while (reader.Read())
                    {
                        var faivorite = new FavoriteBook()
                        {
                            Id = DbUtils.GetInt(reader, "id"),
                            UserId = DbUtils.GetInt(reader, "userId"),
                            BookId = DbUtils.GetInt(reader, "bookId"),
                            book = new BookFa()
                            {
                                Id = DbUtils.GetInt(reader, "bid"),
                                ImageUrl = DbUtils.GetString(reader, "imageUrl"),
                                Title = DbUtils.GetString(reader, "title"),
                            }

                        };
                        faivorites.Add(faivorite);
                    }
                    conn.Close();
                    return faivorites;
                }
            }

        }
        /*------------------AddFavoriteBook()----------------------*/
        public void AddFavoriteBook(AddFavo favoriteBook)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using(var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"INSERT INTO [dbo].[FavoriteBook]
                                                   ([UserId],[BookId])
                                                    OUTPUT INSERTED.Id
                                                    VALUES
                                                   (@UserId, @BookId)";
                    DbUtils.AddParameter(cmd, "@UserId", favoriteBook.UserId);
                    DbUtils.AddParameter(cmd, "@BookId", favoriteBook.BookId);
                    favoriteBook.Id = (int)cmd.ExecuteScalar();//needs output inserted.id
                }
            }
        }
        /*------------------DeleteFavoriteBook()----------------------*/
        public void DeleteFavoriteBook(int bookId)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = "DELETE FROM FavoriteBook WHERE bookId = @bookId";
                    DbUtils.AddParameter(cmd, "@bookId", bookId);
                    cmd.ExecuteNonQuery();
                }
            }
        }

    }
}
