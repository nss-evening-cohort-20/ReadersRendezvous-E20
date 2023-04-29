using ReadersRendezvous.Models;
using ReadersRendezvous.Repositories;
using ReadersRendezvous.Utils;
using System.Reflection.PortableExecutable;
using System.Security.Cryptography;
using static System.Reflection.Metadata.BlobBuilder;

namespace ReadersRendezvous.Repository
{
    public class UserBookRepository : BaseRepository, IUserBookRepository
    {

        public UserBookRepository(IConfiguration configuration) : base(configuration) { }



        /*------------------Search UserBook by Id----------------------*/



        public UserBook SearchUserBookById(int userBookId)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"SELECT
                                            [UserBook].[Id] AS UserBookId,
                                            [UserBook].[UserId] AS UserBookUserId,
                                            [UserBook].[BookId] AS UserBookBookId,
                                            [UserBook].[RentalStartDate] AS UserBookRentalStartDate,
                                            [UserBook].[DueDate] AS UserBookDueDate,
                                            [UserBook].[LateFee] AS UserBookLateFee,
                                            [UserBook].[ReturnDate] AS UserBookReturnDate
                                            FROM [ReadersRendezvous].[dbo].[UserBook]
                                            WHERE [UserBook].[Id] = @UserBookId";

                    DbUtils.AddParameter(cmd, "@UserBookId", userBookId);
                    var reader = cmd.ExecuteReader();
                    UserBook userBook = null;
                    while (reader.Read())
                    {
                        if (userBook == null)
                        {
                            userBook = new UserBook()
                            {
                                Id = DbUtils.GetInt(reader, "UserBookId"),
                                UserId = DbUtils.GetInt(reader, "UserBookUserId"),
                                BookId = DbUtils.GetInt(reader, "UserBookBookId"),
                                RentalStartDate = DbUtils.GetDateTime(reader, "UserBookRentalStartDate"),
                                DueDate = DbUtils.GetDateTime(reader, "UserBookDueDate"),
                                LateFee = DbUtils.GetDecimal(reader, "UserBookLateFee"),
                                ReturnDate = DbUtils.GetDateTime(reader, "UserBookReturnDate"),
                            };
                        }
                    }
                    reader.Close();
                    return userBook;

                }
            }
        }



        /*------------------Search UserBook by UserId----------------------*/



        public UserBook SearchUserBookByUserId(int userId)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"SELECT
                                            [UserBook].[Id] AS UserBookId,
                                            [UserBook].[UserId] AS UserBookUserId,
                                            [UserBook].[BookId] AS UserBookBookId,
                                            [UserBook].[RentalStartDate] AS UserBookRentalStartDate,
                                            [UserBook].[DueDate] AS UserBookDueDate,
                                            [UserBook].[LateFee] AS UserBookLateFee,
                                            [UserBook].[ReturnDate] AS UserBookReturnDate
                                            FROM [ReadersRendezvous].[dbo].[UserBook]
                                            WHERE [UserBook].[UserId] = @UserId";

                    DbUtils.AddParameter(cmd, "@UserId", userId);
                    var reader = cmd.ExecuteReader();
                    UserBook userBook = null;
                    while (reader.Read())
                    {
                        if (userBook == null)
                        {
                            userBook = new UserBook()
                            {
                                Id = DbUtils.GetInt(reader, "UserBookId"),
                                UserId = DbUtils.GetInt(reader, "UserBookUserId"),
                                BookId = DbUtils.GetInt(reader, "UserBookBookId"),
                                RentalStartDate = DbUtils.GetDateTime(reader, "UserBookRentalStartDate"),
                                DueDate = DbUtils.GetDateTime(reader, "UserBookDueDate"),
                                LateFee = DbUtils.GetDecimal(reader, "UserBookLateFee"),
                                ReturnDate = DbUtils.GetDateTime(reader, "UserBookReturnDate"),
                            };
                        }
                    }
                    reader.Close();
                    return userBook;

                }
            }
        }



        /*------------------Search UserBook by ISBN13----------------------*/



        public UserBook SearchUserBookByIsbn13(int isbn13)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"SELECT
		                                    [UserBook].[Id] AS UserBookId,
		                                    [UserBook].[UserId] AS UserBookUserId,
		                                    [UserBook].[BookId] AS UserBookBookId,
		                                    [UserBook].[RentalStartDate] AS UserBookRentalStartDate,
		                                    [UserBook].[DueDate] AS UserBookDueDate,
		                                    [UserBook].[LateFee] AS UserBookLateFee,
		                                    [UserBook].[ReturnDate] AS UserBookReturnDate,

		                                    [User].[Id] AS UserId,
		                                    [User].[FirstName] AS UserFirstName,
		                                    [User].[LastName] AS UserLastName,
		                                    [User].[Email] AS UserBookId,
		                                    [User].[LibraryCardNumber] AS UserLibraryCardNumber,
		                                    [User].[IsActive] AS UserIsActive,
		                                    [User].[PhoneNumber] AS UserPhoneNumber,
		                                    [User].[AddressLineOne] AS UserAddressLineOne,
		                                    [User].[AddressLineTwo] AS UserAddressLineTwo,
		                                    [User].[City] AS UserCity,
		                                    [User].[State] AS UserState,
		                                    [User].[Zip] AS UserZip,


		                                    [Book].[Id] AS BookId,
		                                    [Book].[ImageUrl] AS BookImageUrl,
		                                    [Book].[AgeRangeId] AS BookAgeRangeId,
		                                    [Book].[GenreId] AS BookGenreId,
		                                    [Book].[Title] AS BookTitle,
		                                    [Book].[CoverTypeId] AS BookCoverTypeId,
		                                    [Book].[Quantity] AS BookQuantity,
		                                    [Book].[Author] AS BookAuthor,
		                                    [Book].[Publisher] AS BookPublisher,
		                                    [Book].[Language] AS BookLanguage,
		                                    [Book].[Description] AS BookDescription,
		                                    [Book].[ISBN13] AS BookISBN13
                                    FROM [ReadersRendezvous].[dbo].[UserBook]
                                    INNER JOIN [User] ON UserBook.UserId = UserId 
                                    INNER JOIN [Book] ON UserBook.BookId = BookId 
                                    WHERE [Book].[ISBN13] = @ISBN13";

                    DbUtils.AddParameter(cmd, "@ISBN13", isbn13);
                    var reader = cmd.ExecuteReader();
                    UserBook userBook = null;
                    while (reader.Read())
                    {
                        if (userBook == null)
                        {
                            userBook = new UserBook()
                            {
                                Id = DbUtils.GetInt(reader, "UserBookId"),
                                UserId = DbUtils.GetInt(reader, "UserBookUserId"),
                                BookId = DbUtils.GetInt(reader, "UserBookBookId"),
                                RentalStartDate = DbUtils.GetDateTime(reader, "UserBookRentalStartDate"),
                                DueDate = DbUtils.GetDateTime(reader, "UserBookDueDate"),
                                LateFee = DbUtils.GetDecimal(reader, "UserBookLateFee"),
                                ReturnDate = DbUtils.GetDateTime(reader, "UserBookReturnDate"),
                            };
                        }
                    }
                    reader.Close();
                    return userBook;

                }
            }
        }



        /*------------------Search UserBook by LibraryCardNumber----------------------*/



        public UserBook SearchUserBookByLibraryCardNumber(int libraryCardNumber)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"SELECT
		                                    [UserBook].[Id] AS UserBookId,
		                                    [UserBook].[UserId] AS UserBookUserId,
		                                    [UserBook].[BookId] AS UserBookBookId,
		                                    [UserBook].[RentalStartDate] AS UserBookRentalStartDate,
		                                    [UserBook].[DueDate] AS UserBookDueDate,
		                                    [UserBook].[LateFee] AS UserBookLateFee,
		                                    [UserBook].[ReturnDate] AS UserBookReturnDate,

		                                    [User].[Id] AS UserId,
		                                    [User].[FirstName] AS UserFirstName,
		                                    [User].[LastName] AS UserLastName,
		                                    [User].[Email] AS UserBookId,
		                                    [User].[LibraryCardNumber] AS UserLibraryCardNumber,
		                                    [User].[IsActive] AS UserIsActive,
		                                    [User].[PhoneNumber] AS UserPhoneNumber,
		                                    [User].[AddressLineOne] AS UserAddressLineOne,
		                                    [User].[AddressLineTwo] AS UserAddressLineTwo,
		                                    [User].[City] AS UserCity,
		                                    [User].[State] AS UserState,
		                                    [User].[Zip] AS UserZip,


		                                    [Book].[Id] AS BookId,
		                                    [Book].[ImageUrl] AS BookImageUrl,
		                                    [Book].[AgeRangeId] AS BookAgeRangeId,
		                                    [Book].[GenreId] AS BookGenreId,
		                                    [Book].[Title] AS BookTitle,
		                                    [Book].[CoverTypeId] AS BookCoverTypeId,
		                                    [Book].[Quantity] AS BookQuantity,
		                                    [Book].[Author] AS BookAuthor,
		                                    [Book].[Publisher] AS BookPublisher,
		                                    [Book].[Language] AS BookLanguage,
		                                    [Book].[Description] AS BookDescription,
		                                    [Book].[ISBN13] AS BookISBN13
                                    FROM [ReadersRendezvous].[dbo].[UserBook]
                                    INNER JOIN [User] ON UserBook.UserId = UserId 
                                    INNER JOIN [Book] ON UserBook.BookId = BookId 
                                    WHERE [User].[LibraryCardNumber] = @LibraryCardNumber";

                    DbUtils.AddParameter(cmd, "@LibraryCardNumber", libraryCardNumber);
                    var reader = cmd.ExecuteReader();
                    UserBook userBook = null;
                    while (reader.Read())
                    {
                        if (userBook == null)
                        {
                            userBook = new UserBook()
                            {
                                Id = DbUtils.GetInt(reader, "UserBookId"),
                                UserId = DbUtils.GetInt(reader, "UserBookUserId"),
                                BookId = DbUtils.GetInt(reader, "UserBookBookId"),
                                RentalStartDate = DbUtils.GetDateTime(reader, "UserBookRentalStartDate"),
                                DueDate = DbUtils.GetDateTime(reader, "UserBookDueDate"),
                                LateFee = DbUtils.GetDecimal(reader, "UserBookLateFee"),
                                ReturnDate = DbUtils.GetDateTime(reader, "UserBookReturnDate"),
                            };
                        }
                    }
                    reader.Close();
                    return userBook;

                }
            }
        }



        /*------------------Add UserBook----------------------*/



        public void AddUserBook(UserBook userBook)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"INSERT INTO USERBOOK
                                            (UserId, BookId, RentalStartDate, DueDate, LateFee, ReturnDate)
                                            OUTPUT INSERTED.ID
                                            VALUES (@userId, @bookId, @rentalStartDate, @dueDate, @lateFee, @returnDate)";
                    DbUtils.AddParameter(cmd, "@userId", userBook.UserId);
                    DbUtils.AddParameter(cmd, "@bookId", userBook.BookId);
                    DbUtils.AddParameter(cmd, "@rentalStartDate", userBook.RentalStartDate);
                    DbUtils.AddParameter(cmd, "@dueDate", userBook.DueDate);
                    DbUtils.AddParameter(cmd, "@lateFee", userBook.LateFee);
                    DbUtils.AddParameter(cmd, "@returnDate", userBook.ReturnDate);
                    userBook.Id = (int)cmd.ExecuteScalar();
                }
            }
        }



        /*------------------Delete UserBook----------------------*/



        public void DeleteUserBook(int id)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = "DELETE FROM UserBook WHERE Id = @id";
                    DbUtils.AddParameter(cmd, "@id", id);
                    cmd.ExecuteNonQuery();
                }
            }
        }

    }
}
