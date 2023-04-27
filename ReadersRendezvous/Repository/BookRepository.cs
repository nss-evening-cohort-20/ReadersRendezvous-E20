using ReadersRendezvous.Interfaces;
using ReadersRendezvous.Models;
using ReadersRendezvous.Repositories;
using ReadersRendezvous.Utils;
using System.Reflection.PortableExecutable;
using System.Security.Cryptography;
using static System.Reflection.Metadata.BlobBuilder;

namespace ReadersRendezvous.Repository
{
    public class BookRepository : BaseRepository, IBookRepository
    {
        //private Book book;
        public BookRepository(IConfiguration configuration) : base(configuration) { }

        /*------------------AddBook()----------------------*/
        public void AddBook(AddBook book)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"INSERT INTO [dbo].[Book]
                                                   ([ImageUrl]
                                                   ,[AgeRangeId]
                                                   ,[GenreId]
                                                   ,[Title]
                                                   ,[CoverTypeId]
                                                   ,[Quantity]
                                                   ,[Author]
                                                   ,[Publisher]
                                                   ,[Language]
                                                   ,[Description]
                                                   ,[ISBN13])
                                                    OUTPUT INSERTED.Id
                                             VALUES(@ImageUrl
                                                   ,@AgeRangeId
                                                   ,@GenreId
                                                   ,@Title
                                                   ,@CoverTypeId               
                                                   ,@Quantity
                                                   ,@Author
                                                   ,@Publisher
                                                   ,@Language
                                                   ,@Description
                                                   ,@ISBN13)";
                    DbUtils.AddParameter(cmd, "@ImageUrl", book.ImageUrl);
                    DbUtils.AddParameter(cmd, "@AgeRangeId", book.AgeRangeId);
                    DbUtils.AddParameter(cmd, "@GenreId", book.GenreId);
                    DbUtils.AddParameter(cmd, "@Title", book.Title);
                    DbUtils.AddParameter(cmd, "@CoverTypeId", book.CoverTypeId);
                    DbUtils.AddParameter(cmd, "@Quantity", book.Quantity);
                    DbUtils.AddParameter(cmd, "@Author", book.Author);
                    DbUtils.AddParameter(cmd, "@Publisher", book.Publisher);
                    DbUtils.AddParameter(cmd, "@Language", book.Language);
                    DbUtils.AddParameter(cmd, "@Description", book.Description);
                    DbUtils.AddParameter(cmd, "@ISBN13", book.ISBN13);
                    book.Id = (int)cmd.ExecuteScalar();//needs output inserted.id
                }
            }
        }

        /*------------------GetAllBooks()------------------*/
        public List<Book> GetAllBooks()
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"SELECT [Book].[Id] AS BookId
                                              ,[Book].[ImageUrl]
                                              ,[Book].[Title]
                                              ,[Book].[Quantity]
                                              ,[Book].[Author]
                                              ,[Book].[Publisher]
                                              ,[Book].[Language]
                                              ,[Book].[Description]
                                              ,[Book].[ISBN13]
                                              ,[AgeRange].[Id] AS AgeRangeId
                                              ,[AgeRange].[Range] AS AgeRange
                                              ,[Genre].[Id] AS GenreId
                                              ,[Genre].[Description] As BookGenre
                                          FROM [ReadersRendezvous].[dbo].[Book]
                                          INNER JOIN AgeRange ON Book.AgeRangeId = AgeRange.Id 
                                          INNER JOIN Genre ON Book.GenreId = Genre.Id ";

                    var reader = cmd.ExecuteReader();
                    var books = new List<Book>();
                    while (reader.Read())
                    {
                        var book = new Book()
                        {
                            Id = DbUtils.GetInt(reader, "BookId"),
                            ImageUrl = DbUtils.GetString(reader, "ImageUrl"),
                            Title = DbUtils.GetString(reader, "Title"),
                            Quantity = DbUtils.GetInt(reader, "Quantity"),
                            Author = DbUtils.GetString(reader, "Author"),
                            Publisher = DbUtils.GetString(reader, "Publisher"),
                            Language = DbUtils.GetString(reader, "Language"),
                            Description = DbUtils.GetString(reader, "Description"),
                            ISBN13 = DbUtils.GetString(reader, "ISBN13"),
                            AgeRange = new AgeRange()
                            {
                                Id = DbUtils.GetInt(reader, "AgeRangeId"),
                                Range = DbUtils.GetString(reader, "AgeRange")
                            },
                            Genre = new Genre()
                            {
                                Id = DbUtils.GetInt(reader, "GenreId"),
                                Description = DbUtils.GetString(reader, "BookGenre")
                            }
                        };
                        books.Add(book);
                    }
                    conn.Close();
                    return books;
                }
            }
        }
        //

        /*------------------SearchBooksById()----------------------*/
        public BookInfo SearchBooksByID(int bookId)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"SELECT [Book].[Id] AS BookId
                                              ,[Book].[ImageUrl]
                                              ,[Book].[Title] 
                                              ,[Book].[Quantity]
                                              ,[Book].[Author]
                                              ,[Book].[Publisher]
                                              ,[Book].[Language]
                                              ,[Book].[Description]
                                              ,[Book].[ISBN13]
                                              ,[AgeRange].[Id] AS AgeRangeId
                                              ,[AgeRange].[Range] AS AgeRange
                                              ,[Genre].[Id] AS GenreId
                                              ,[Genre].[Description] As BookGenre
                                          FROM [ReadersRendezvous].[dbo].[Book]
                                          INNER JOIN AgeRange ON Book.AgeRangeId = AgeRange.Id 
                                          INNER JOIN Genre ON Book.GenreId = Genre.Id 
                                          WHERE [Book].[Id] = @BookId";

                    DbUtils.AddParameter(cmd, "@BookId", bookId);
                    var reader = cmd.ExecuteReader();
                    BookInfo book = null;
                    while (reader.Read())
                    {
                        if (book == null)
                        {
                            book = new BookInfo()
                            {
                                Id = DbUtils.GetInt(reader, "BookId"),
                                ImageUrl = DbUtils.GetString(reader, "ImageUrl"),
                                Title = DbUtils.GetString(reader, "Title"),
                                Quantity = DbUtils.GetInt(reader, "Quantity"),
                                Author = DbUtils.GetString(reader, "Author"),
                                Publisher = DbUtils.GetString(reader, "Publisher"),
                                Language = DbUtils.GetString(reader, "Language"),
                                Description = DbUtils.GetString(reader, "Description"),
                                ISBN13 = DbUtils.GetString(reader, "ISBN13"),
                                AgeRange = new AgeRange()
                                {
                                    Id = DbUtils.GetInt(reader, "AgeRangeId"),
                                    Range = DbUtils.GetString(reader, "AgeRange")
                                },
                                Genre = new Genre()
                                {
                                    Id = DbUtils.GetInt(reader, "GenreId"),
                                    Description = DbUtils.GetString(reader, "BookGenre")
                                }
                            };
                    }
                }
                    reader.Close();
                    return book;

                }
            }
        }
                /*------------------SearchBooksByTitle()----------------------*/
        public Book SearchBooksByTitle(string title) //Just a Girl
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"SELECT [Book].[Id] AS BookId
                                              ,[Book].[ImageUrl]
                                              ,[Book].[Title] 
                                              ,[Book].[Quantity]
                                              ,[Book].[Author]
                                              ,[Book].[Publisher]
                                              ,[Book].[Language]
                                              ,[Book].[Description]
                                              ,[Book].[ISBN13]
                                              ,[AgeRange].[Id] AS AgeRangeId
                                              ,[AgeRange].[Range] AS AgeRange
                                              ,[Genre].[Id] AS GenreId
                                              ,[Genre].[Description] As BookGenre
                                          FROM [ReadersRendezvous].[dbo].[Book]
                                          INNER JOIN AgeRange ON Book.AgeRangeId = AgeRange.Id 
                                          INNER JOIN Genre ON Book.GenreId = Genre.Id 
                                          WHERE[Book].[Title] LIKE @Title";
                    //WHERE [Book].[Title] LIKE '%'+'Just a Girl'+'%';
                    //DbUtils.AddParameter(cmd, "@Title", title);
                    //cmd.Parameters.AddWithValue("@Title", "%" + title + "%");
                    DbUtils.AddParameter(cmd, "@Title", $"%{title.ToLower()}%");
                    var reader = cmd.ExecuteReader();
                    Book book = null;
                    while (reader.Read())
                    {
                        if (book == null)
                        {//Book book = null;
                            book = new Book()
                            {
                                Id = DbUtils.GetInt(reader, "BookId"),
                                ImageUrl = DbUtils.GetString(reader, "ImageUrl"),
                                Title = DbUtils.GetString(reader, "Title"),
                                Quantity = DbUtils.GetInt(reader, "Quantity"),
                                Author = DbUtils.GetString(reader, "Author"),
                                Publisher = DbUtils.GetString(reader, "Publisher"),
                                Language = DbUtils.GetString(reader, "Language"),
                                Description = DbUtils.GetString(reader, "Description"),
                                ISBN13 = DbUtils.GetString(reader, "ISBN13"),
                                AgeRange = new AgeRange()
                                {
                                    Id = DbUtils.GetInt(reader, "AgeRangeId"),
                                    Range = DbUtils.GetString(reader, "AgeRange")
                                },
                                Genre = new Genre()
                                {
                                    Id = DbUtils.GetInt(reader, "GenreId"),
                                    Description = DbUtils.GetString(reader, "BookGenre")
                                }
                            };
                        }
                    }
                    reader.Close();
                    return book;
                }
            }
        }


        /*------------------SearchBooksByISBN()----------------------*/
        public BookInfo SearchBooksByISBN(string iSBN) //9780744066944
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"SELECT [Book].[Id] AS BookId
                                              ,[Book].[ImageUrl]
                                              ,[Book].[Title] 
                                              ,[Book].[Quantity]
                                              ,[Book].[Author]
                                              ,[Book].[Publisher]
                                              ,[Book].[Language]
                                              ,[Book].[Description]
                                              ,[Book].[ISBN13]
                                              ,[AgeRange].[Id] AS AgeRangeId
                                              ,[AgeRange].[Range] AS AgeRange
                                              ,[Genre].[Id] AS GenreId
                                              ,[Genre].[Description] As BookGenre
                                          FROM [ReadersRendezvous].[dbo].[Book]
                                          INNER JOIN AgeRange ON Book.AgeRangeId = AgeRange.Id 
                                          INNER JOIN Genre ON Book.GenreId = Genre.Id 
                                          WHERE [Book].[ISBN13] = @ISBN13";

                    DbUtils.AddParameter(cmd, "@ISBN13", iSBN);
                    var reader = cmd.ExecuteReader();
                    BookInfo book = null;
                    while (reader.Read())
                    {
                        if (book == null)
                        {
                            book = new BookInfo()
                            {
                                Id = DbUtils.GetInt(reader, "BookId"),
                                ImageUrl = DbUtils.GetString(reader, "ImageUrl"),
                                Title = DbUtils.GetString(reader, "Title"),
                                Quantity = DbUtils.GetInt(reader, "Quantity"),
                                Author = DbUtils.GetString(reader, "Author"),
                                Publisher = DbUtils.GetString(reader, "Publisher"),
                                Language = DbUtils.GetString(reader, "Language"),
                                Description = DbUtils.GetString(reader, "Description"),
                                ISBN13 = DbUtils.GetString(reader, "ISBN13"),
                                AgeRange = new AgeRange()
                                {
                                    Id = DbUtils.GetInt(reader, "AgeRangeId"),
                                    Range = DbUtils.GetString(reader, "AgeRange")
                                },
                                Genre = new Genre()
                                {
                                    Id = DbUtils.GetInt(reader, "GenreId"),
                                    Description = DbUtils.GetString(reader, "BookGenre")
                                }
                            };
                        }
                    }
                    reader.Close();
                    return book;

                }
            }
        }

        /*------------------SearchByAuthor()----------------------*/
        public List<BookInfo> SearchByAuthor(string author) //Davis, Lee
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"SELECT [Book].[Id] AS BookId
                                              ,[Book].[ImageUrl]
                                              ,[Book].[Title] 
                                              ,[Book].[Quantity]
                                              ,[Book].[Author]
                                              ,[Book].[Publisher]
                                              ,[Book].[Language]
                                              ,[Book].[Description]
                                              ,[Book].[ISBN13]
                                              ,[AgeRange].[Id] AS AgeRangeId
                                              ,[AgeRange].[Range] AS AgeRange
                                              ,[Genre].[Id] AS GenreId
                                              ,[Genre].[Description] As BookGenre
                                          FROM [ReadersRendezvous].[dbo].[Book]
                                          INNER JOIN AgeRange ON Book.AgeRangeId = AgeRange.Id 
                                          INNER JOIN Genre ON Book.GenreId = Genre.Id 
                                          WHERE [Book].[Author] LIKE @Author";
                                          //WHERE [Book].[Author] = @Author";

                    DbUtils.AddParameter(cmd, "@Author", $"%{author.ToLower()}%");//error when space
                    //DbUtils.AddParameter(cmd, "@Title", $"%{title.ToLower()}%");
                    //DbUtils.AddParameter(cmd, "@Author", author);
                    var reader = cmd.ExecuteReader();
                    
                    var books = new List<BookInfo>();
                    while (reader.Read())
                    {
                        //if (books == null)
                        //{
                            var book = new BookInfo()
                            {
                                Id = DbUtils.GetInt(reader, "BookId"),
                                ImageUrl = DbUtils.GetString(reader, "ImageUrl"),
                                Title = DbUtils.GetString(reader, "Title"),
                                Quantity = DbUtils.GetInt(reader, "Quantity"),
                                Author = DbUtils.GetString(reader, "Author"),
                                Publisher = DbUtils.GetString(reader, "Publisher"),
                                Language = DbUtils.GetString(reader, "Language"),
                                Description = DbUtils.GetString(reader, "Description"),
                                ISBN13 = DbUtils.GetString(reader, "ISBN13"),
                                AgeRange = new AgeRange()
                                {
                                    Id = DbUtils.GetInt(reader, "AgeRangeId"),
                                    Range = DbUtils.GetString(reader, "AgeRange")
                                },
                                Genre = new Genre()
                                {
                                    Id = DbUtils.GetInt(reader, "GenreId"),
                                    Description = DbUtils.GetString(reader, "BookGenre")
                                }
                            };
                        var test = book;
                        books.Add(book);
                        //}
                    }
                    reader.Close();
                    return books;

                }
            }
        }

        /*------------------SearchByPublisher()----------------------*/
        public List<BookInfo> SearchByPublisher(string publisher) //Davis, Lee
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"SELECT [Book].[Id] AS BookId
                                              ,[Book].[ImageUrl]
                                              ,[Book].[Title] 
                                              ,[Book].[Quantity]
                                              ,[Book].[Author]
                                              ,[Book].[Publisher]
                                              ,[Book].[Language]
                                              ,[Book].[Description]
                                              ,[Book].[ISBN13]
                                              ,[AgeRange].[Id] AS AgeRangeId
                                              ,[AgeRange].[Range] AS AgeRange
                                              ,[Genre].[Id] AS GenreId
                                              ,[Genre].[Description] As BookGenre
                                          FROM [ReadersRendezvous].[dbo].[Book]
                                          INNER JOIN AgeRange ON Book.AgeRangeId = AgeRange.Id 
                                          INNER JOIN Genre ON Book.GenreId = Genre.Id 
                                          WHERE [Book].[Publisher] LIKE @publisher";
                    //WHERE [Book].[Author] = @Author";

                    DbUtils.AddParameter(cmd, "@Publisher", $"%{publisher.ToLower()}%");//error when space
                    //DbUtils.AddParameter(cmd, "@Title", $"%{title.ToLower()}%");
                    //DbUtils.AddParameter(cmd, "@Author", author);
                    var reader = cmd.ExecuteReader();

                    var books = new List<BookInfo>();
                    while (reader.Read())
                    {
                        var book = new BookInfo()
                        {
                            Id = DbUtils.GetInt(reader, "BookId"),
                            ImageUrl = DbUtils.GetString(reader, "ImageUrl"),
                            Title = DbUtils.GetString(reader, "Title"),
                            Quantity = DbUtils.GetInt(reader, "Quantity"),
                            Author = DbUtils.GetString(reader, "Author"),
                            Publisher = DbUtils.GetString(reader, "Publisher"),
                            Language = DbUtils.GetString(reader, "Language"),
                            Description = DbUtils.GetString(reader, "Description"),
                            ISBN13 = DbUtils.GetString(reader, "ISBN13"),
                            AgeRange = new AgeRange()
                            {
                                Id = DbUtils.GetInt(reader, "AgeRangeId"),
                                Range = DbUtils.GetString(reader, "AgeRange")
                            },
                            Genre = new Genre()
                            {
                                Id = DbUtils.GetInt(reader, "GenreId"),
                                Description = DbUtils.GetString(reader, "BookGenre")
                            }
                        };
                        var test = book;
                        books.Add(book);
                    }
                    reader.Close();
                    return books;

                }
            }
        }
        /*------------------SearchByAgeRange()----------------------*/
        public List<BookInfo> SearchByAgeRange(string range) //Davis, Lee
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"SELECT [Book].[Id] AS BookId
                                              ,[Book].[ImageUrl]
                                              ,[Book].[Title] 
                                              ,[Book].[Quantity]
                                              ,[Book].[Author]
                                              ,[Book].[Publisher]
                                              ,[Book].[Language]
                                              ,[Book].[Description]
                                              ,[Book].[ISBN13]
                                              ,[AgeRange].[Id] AS AgeRangeId
                                              ,[AgeRange].[Range] 
                                              ,[Genre].[Id] AS GenreId
                                              ,[Genre].[Description] As BookGenre
                                          FROM [ReadersRendezvous].[dbo].[Book]
                                          INNER JOIN AgeRange ON Book.AgeRangeId = AgeRange.Id 
                                          INNER JOIN Genre ON Book.GenreId = Genre.Id 
                                          WHERE [AgeRange].[Range] LIKE @Range";

                    DbUtils.AddParameter(cmd, "@Range", $"%{range.ToLower()}%");//error when space

                    var reader = cmd.ExecuteReader();

                    var books = new List<BookInfo>();
                    while (reader.Read())
                    {
                        var book = new BookInfo()
                        {
                            Id = DbUtils.GetInt(reader, "BookId"),
                            ImageUrl = DbUtils.GetString(reader, "ImageUrl"),
                            Title = DbUtils.GetString(reader, "Title"),
                            Quantity = DbUtils.GetInt(reader, "Quantity"),
                            Author = DbUtils.GetString(reader, "Author"),
                            Publisher = DbUtils.GetString(reader, "Publisher"),
                            Language = DbUtils.GetString(reader, "Language"),
                            Description = DbUtils.GetString(reader, "Description"),
                            ISBN13 = DbUtils.GetString(reader, "ISBN13"),
                            AgeRange = new AgeRange()
                            {
                                Id = DbUtils.GetInt(reader, "AgeRangeId"),
                                Range = DbUtils.GetString(reader, "Range")
                            },
                            Genre = new Genre()
                            {
                                Id = DbUtils.GetInt(reader, "GenreId"),
                                Description = DbUtils.GetString(reader, "BookGenre")
                            }
                        };
                        //var test = book;
                        books.Add(book);
                    }
                    reader.Close();
                    return books;

                }
            }
        }

        /*------------------SearchByGenre()----------------------*/
        public List<BookInfo> SearchByGenre(string bookGenre) //Non-Fiction
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"SELECT [Book].[Id] AS BookId
                                              ,[Book].[ImageUrl]
                                              ,[Book].[Title] 
                                              ,[Book].[Quantity]
                                              ,[Book].[Author]
                                              ,[Book].[Publisher]
                                              ,[Book].[Language]
                                              ,[Book].[Description]
                                              ,[Book].[ISBN13]
                                              ,[AgeRange].[Id] AS AgeRangeId
                                              ,[AgeRange].[Range] 
                                              ,[Genre].[Id] AS GenreId
                                              ,[Genre].[Description] As BookGenre
                                          FROM [ReadersRendezvous].[dbo].[Book]
                                          INNER JOIN AgeRange ON Book.AgeRangeId = AgeRange.Id 
                                          INNER JOIN Genre ON Book.GenreId = Genre.Id 
                                          WHERE [Genre].[Description] LIKE @BookGenre";

                    DbUtils.AddParameter(cmd, "@BookGenre", $"%{bookGenre.ToLower()}%");//error when space

                    var reader = cmd.ExecuteReader();

                    var books = new List<BookInfo>();
                    while (reader.Read())
                    {
                        var book = new BookInfo()
                        {
                            Id = DbUtils.GetInt(reader, "BookId"),
                            ImageUrl = DbUtils.GetString(reader, "ImageUrl"),
                            Title = DbUtils.GetString(reader, "Title"),
                            Quantity = DbUtils.GetInt(reader, "Quantity"),
                            Author = DbUtils.GetString(reader, "Author"),
                            Publisher = DbUtils.GetString(reader, "Publisher"),
                            Language = DbUtils.GetString(reader, "Language"),
                            Description = DbUtils.GetString(reader, "Description"),
                            ISBN13 = DbUtils.GetString(reader, "ISBN13"),
                            AgeRange = new AgeRange()
                            {
                                Id = DbUtils.GetInt(reader, "AgeRangeId"),
                                Range = DbUtils.GetString(reader, "Range")
                            },
                            Genre = new Genre()
                            {
                                Id = DbUtils.GetInt(reader, "GenreId"),
                                Description = DbUtils.GetString(reader, "BookGenre")
                            }
                        };
                        //var test = book;
                        books.Add(book);
                    }
                    reader.Close();
                    return books;

                }
            }
        }
        /*------------------EditBook()----------------------*/

        public void EditBook(string ISBN13, AddBook book)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"UPDATE [dbo].[Book]
                                           SET 
                                               [ImageUrl] = @ImageUrl
                                              ,[AgeRangeId] = @AgeRangeId
                                              ,[GenreId] = @GenreId
                                              ,[Title] = @Title
                                              ,[CoverTypeId] = @CoverTypeId
                                              ,[Quantity] = @Quantity
                                              ,[Author] = @Author
                                              ,[Publisher] = @Publisher
                                              ,[Language] = @Language
                                              ,[Description] = @Description
                                         WHERE [ISBN13]=@ISBN13";
                    DbUtils.AddParameter(cmd, "@ImageUrl", book.ImageUrl);
                    DbUtils.AddParameter(cmd, "@AgeRangeId", book.AgeRangeId);
                    DbUtils.AddParameter(cmd, "@GenreId", book.GenreId);
                    DbUtils.AddParameter(cmd, "@Title", book.Title);
                    DbUtils.AddParameter(cmd, "@CoverTypeId", book.CoverTypeId);
                    DbUtils.AddParameter(cmd, "@Quantity", book.Quantity);
                    DbUtils.AddParameter(cmd, "@Author", book.Author);
                    DbUtils.AddParameter(cmd, "@Publisher", book.Publisher);
                    DbUtils.AddParameter(cmd, "@Language", book.Language);
                    DbUtils.AddParameter(cmd, "@Description", book.Description);
                    DbUtils.AddParameter(cmd, "@ISBN13", ISBN13);
                    //book.Id = (int)cmd.ExecuteScalar();//needs output inserted.id
                    cmd.ExecuteNonQuery();

                }
            }
        }

        /*------------------DeleteBook()----------------------*/
        public void DeleteBook(string iSBN)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = "DELETE FROM Book WHERE ISBN13 = @ISBN13";
                    DbUtils.AddParameter(cmd, "@ISBN13", iSBN);
                    cmd.ExecuteNonQuery();
                }
            }
        }











    }
}
/* 
Books API
Add a Book//
Edit a Book
Delete a Book//
Get All Books//
Search Books By Name//
Search Books By ISBN//
Search Books By Author//
Search Books By Publisher//
Search Books By AgeRange//
Search Books By Genre//
Get All Books by User
Return Book//
 */

