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



        public List<UserBookDto> SearchUserBookByUserId(int userId)
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
		                                    U.[Id] AS UserId,
		                                    U.[FirstName] AS UserFirstName,
		                                    U.[LastName] AS UserLastName,
		                                    U.[Email] AS UserBookId,
		                                    U.[LibraryCardNumber] AS UserLibraryCardNumber,
		                                    U.[IsActive] AS UserIsActive,
		                                    U.[PhoneNumber] AS UserPhoneNumber,
		                                    U.[AddressLineOne] AS UserAddressLineOne,
		                                    U.[AddressLineTwo] AS UserAddressLineTwo,
		                                    U.[City] AS UserCity,
		                                    U.[State] AS UserState,
		                                    U.[Zip] AS UserZip,
		                                    B.[Id] AS BookId,
		                                    B.[ImageUrl] AS BookImageUrl,
		                                    B.[AgeRangeId] AS BookAgeRangeId,
		                                    B.[GenreId] AS BookGenreId,
		                                    B.[Title] AS BookTitle,
		                                    B.[CoverTypeId] AS BookCoverTypeId,
		                                    B.[Quantity] AS BookQuantity,
		                                    B.[Author] AS BookAuthor,
		                                    B.[Publisher] AS BookPublisher,
		                                    B.[Language] AS BookLanguage,
		                                    B.[Description] AS BookDescription,
		                                    B.[ISBN13] AS BookISBN13
                                    FROM [ReadersRendezvous].[dbo].[UserBook]
                                    INNER JOIN [User] U ON UserBook.UserId = U.Id
                                    INNER JOIN [Book] B ON UserBook.BookId = B.Id
                                            WHERE [UserBook].[UserId] = @UserId";

                    DbUtils.AddParameter(cmd, "@UserId", userId);
                    var reader = cmd.ExecuteReader();



                    List<UserBookDto> userBook = new List<UserBookDto>();
                    while (reader.Read())
                    {
                        var userBookVariety = new UserBookDto()
                        {
                            Id = DbUtils.GetInt(reader, "UserBookId"),
                            BookImageUrl = DbUtils.GetString(reader, "BookImageUrl"),
                            BookTitle = DbUtils.GetString(reader, "BookTitle"),
                            BookAuthor = DbUtils.GetString(reader, "BookAuthor"),
                            RentalStartDate = DbUtils.GetDateTime(reader, "UserBookRentalStartDate"),
                            DueDate = DbUtils.GetDateTime(reader, "UserBookDueDate"),
                            LateFee = DbUtils.GetDecimal(reader, "UserBookLateFee"),
                            ReturnDate = DbUtils.GetDateTime(reader, "UserBookReturnDate"),
                        };
                        userBook.Add(userBookVariety);
                    }
                    reader.Close();
                    return userBook;
                }
            }
        }






        /*------------------Search UserBook by LibraryCardNumber----------------------*/



        public List<UserBook> SearchUserBookByLibraryCardNumber(int libraryCardNumber)
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
		                                    U.[Id] AS UserId,
		                                    U.[FirstName] AS UserFirstName,
		                                    U.[LastName] AS UserLastName,
		                                    U.[Email] AS UserBookId,
		                                    U.[LibraryCardNumber] AS UserLibraryCardNumber,
		                                    U.[IsActive] AS UserIsActive,
		                                    U.[PhoneNumber] AS UserPhoneNumber,
		                                    U.[AddressLineOne] AS UserAddressLineOne,
		                                    U.[AddressLineTwo] AS UserAddressLineTwo,
		                                    U.[City] AS UserCity,
		                                    U.[State] AS UserState,
		                                    U.[Zip] AS UserZip,
		                                    B.[Id] AS BookId,
		                                    B.[ImageUrl] AS BookImageUrl,
		                                    B.[AgeRangeId] AS BookAgeRangeId,
		                                    B.[GenreId] AS BookGenreId,
		                                    B.[Title] AS BookTitle,
		                                    B.[CoverTypeId] AS BookCoverTypeId,
		                                    B.[Quantity] AS BookQuantity,
		                                    B.[Author] AS BookAuthor,
		                                    B.[Publisher] AS BookPublisher,
		                                    B.[Language] AS BookLanguage,
		                                    B.[Description] AS BookDescription,
		                                    B.[ISBN13] AS BookISBN13
                                    FROM [ReadersRendezvous].[dbo].[UserBook]
                                    INNER JOIN [User] U ON UserBook.UserId = U.Id
                                    INNER JOIN [Book] B ON UserBook.BookId = B.Id
                                    WHERE U.[LibraryCardNumber] = @LibraryCardNumber";
                    DbUtils.AddParameter(cmd, "@LibraryCardNumber", libraryCardNumber);
                    var reader = cmd.ExecuteReader();
                    List<UserBook> userBook = new List<UserBook>();
                    while (reader.Read())
                    {
                        var userBookVariety = new UserBook()
                        {
                            Id = DbUtils.GetInt(reader, "UserBookId"),
                            UserId = DbUtils.GetInt(reader, "UserBookUserId"),
                            BookId = DbUtils.GetInt(reader, "UserBookBookId"),
                            RentalStartDate = DbUtils.GetDateTime(reader, "UserBookRentalStartDate"),
                            DueDate = DbUtils.GetDateTime(reader, "UserBookDueDate"),
                            LateFee = DbUtils.GetDecimal(reader, "UserBookLateFee"),
                            ReturnDate = DbUtils.GetDateTime(reader, "UserBookReturnDate"),
                        };
                        userBook.Add(userBookVariety);
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
