using ReadersRendezvous.Models;
using ReadersRendezvous.Models.Dtos.UserRequests;
using ReadersRendezvous.Repositories;
using ReadersRendezvous.Utils;

namespace ReadersRendezvous.Repository
{
    public class UserRequestRepository : BaseRepository, IUserRequestRepository
    {
        public UserRequestRepository(IConfiguration configuration) : base(configuration)
        {
            
        }
        public void AddHoldRequest(AddUserRequestDto addUserRequestDto)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {

                    cmd.CommandText = @"
                                        INSERT INTO [dbo].[UserRequest]
                                                   ([UserId]
                                                   ,[BookId]
                                                   ,[RequestTS]
                                                   ,[RequestTypeId])
                                        OUTPUT INSERTED.Id 
                                             VALUES
                                                   (@UserId
                                                   ,@BookId
                                                   ,@RequestTS
                                                   ,@RequestTypeId)
                                        ";


                    DbUtils.AddParameter(cmd, "@UserId", addUserRequestDto.UserId);
                    DbUtils.AddParameter(cmd, "@BookId", addUserRequestDto.BookId);
                    DbUtils.AddParameter(cmd, "@RequestTS", addUserRequestDto.RequestTS);
                    DbUtils.AddParameter(cmd, "@RequestTypeId", addUserRequestDto.RequestTypeId);

                    addUserRequestDto.Id = (int)cmd.ExecuteScalar();
                }
            }
        }

        public int DeleteHoldRequest(int requestId)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                                        DELETE FROM [dbo].[UserRequest]
                                         WHERE 
                                              [Id] = @Id
                                      ";

                    DbUtils.AddParameter(cmd, "@Id", requestId);

                    return cmd.ExecuteNonQuery();
                }
            }
        }

        public IEnumerable<UserRequestDto> GetAllHoldRequests()
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                                        select u1.Id, u1.FirstName, u1.LastName, u1.Email, u1.LibraryCardNumber
                                        ,u1.PhoneNumber, u1.AddressLineOne, u1.AddressLineTwo, u1.City
                                        ,u1.State, u1.Zip
                                        from [dbo].[User] u1
                                        ";

                    var reader = cmd.ExecuteReader();

                    var allHoldRequests = new List<UserRequestDto>();
                    UserRequestDto userRequestDto = null;


                    while (reader.Read())
                    {
                        userRequestDto = new UserRequestDto()
                        {
                            User = new UserDto()
                            {
                                UserId = DbUtils.GetInt(reader, "Id"),
                                FirstName = DbUtils.GetString(reader, "FirstName"),
                                LastName = DbUtils.GetString(reader, "LastName"),
                                Email = DbUtils.GetString(reader, "Email"),
                                LibraryCardNumber = DbUtils.GetInt(reader, "LibraryCardNumber"),
                                PhoneNumber = DbUtils.GetString(reader, "PhoneNumber"),
                                AddressLineOne = DbUtils.GetString(reader, "AddressLineOne"),
                                AddressLineTwo = DbUtils.GetString(reader, "AddressLineTwo"),
                                City = DbUtils.GetString(reader, "City"),
                                State = DbUtils.GetString(reader, "State"),
                                Zip = DbUtils.GetInt(reader, "Zip")
                            },

                            BookRequests = GetAllHoldRequestsByUser(DbUtils.GetInt(reader, "Id"))
                        };

                        allHoldRequests.Add(userRequestDto);

                    }

                    reader.Close();
                    return allHoldRequests;
                }
            }
        }

        public UserRequestDto GetAllOpenHoldRequestsByUser(int userId)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                                        select u1.Id, u1.FirstName, u1.LastName, u1.Email, u1.LibraryCardNumber
                                        ,u1.PhoneNumber, u1.AddressLineOne, u1.AddressLineTwo, u1.City
                                        ,u1.State, u1.Zip
                                        from [dbo].[User] u1
                                        where u1.id = @UserId
                                        ";

                    DbUtils.AddParameter(cmd, "@UserId", userId);

                    var reader = cmd.ExecuteReader();

                    UserRequestDto userRequestDto = null;


                    while (reader.Read())
                    {
                        userRequestDto = new UserRequestDto()
                        {
                            User = new UserDto()
                            {
                                UserId = DbUtils.GetInt(reader, "Id"),
                                FirstName = DbUtils.GetString(reader, "FirstName"),
                                LastName = DbUtils.GetString(reader, "LastName"),
                                Email = DbUtils.GetString(reader, "Email"),
                                LibraryCardNumber = DbUtils.GetInt(reader, "LibraryCardNumber"),
                                PhoneNumber = DbUtils.GetString(reader, "PhoneNumber"),
                                AddressLineOne = DbUtils.GetString(reader, "AddressLineOne"),
                                AddressLineTwo = DbUtils.GetString(reader, "AddressLineTwo"),
                                City = DbUtils.GetString(reader, "City"),
                                State = DbUtils.GetString(reader,"State"),
                                Zip = DbUtils.GetInt(reader,"Zip")
                            },

                            BookRequests = GetAllHoldRequestsByUser(userId)
                        };

                    }

                    reader.Close();
                    return userRequestDto;
                }
            }
        }

        public int UpdateHoldRequestStatus(UserRequest userRequest)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                                        UPDATE [dbo].[UserRequest]
                                           SET 
                                              [CompletedTS] = @CompletedTS
                                              ,[IsApproved] = @IsApproved
                                         WHERE 
                                               [UserId] = @UserId
                                               and [BookId] = @BookId
                                               and [Id] = @Id
                                               and [CompletedTS] is NULL
                                      ";

                    DbUtils.AddParameter(cmd, "@Id", userRequest.Id);
                    DbUtils.AddParameter(cmd, "@UserId", userRequest.UserId);
                    DbUtils.AddParameter(cmd, "@BookId", userRequest.BookId);
                    DbUtils.AddParameter(cmd, "@CompletedTS", userRequest.CompletedTS);
                    DbUtils.AddParameter(cmd, "@IsApproved", userRequest.IsApproved);

                    return cmd.ExecuteNonQuery();
                }
            }
        }

        private IEnumerable<BookRequestDto> GetAllHoldRequestsByUser(int userId)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                                        select urt1.Description as RequestType
                                        ,ur1.Id as RequestId
                                        ,ur1.RequestTS
                                        ,ur1.CompletedTS
                                        ,ur1.IsApproved
                                        ,b1.Id as BookId
                                        ,b1.ImageUrl as ImageUrl
                                        ,b1.Title as Title
                                        ,b1.Quantity as Quantity
                                        ,b1.Author as Author,
                                        b1.Publisher as Publisher
                                        ,b1.Language as Language
                                        ,b1.Description as Description
                                        ,b1.ISBN13 as ISBN13
                                        ,ag1.Range as AgeRange
                                        ,g1.Description as Genre
                                        from [dbo].[UserRequest] ur1
                                        inner join [dbo].[Book] b1 on b1.id = ur1.BookId
                                        inner join [dbo].[UserRequestType] urt1 on urt1.id = ur1.RequestTypeId
                                        inner join [dbo].[AgeRange] ag1 on ag1.Id = b1.AgeRangeId
                                        inner join [dbo].[Genre] g1 on g1.Id = b1.GenreId
                                        where 
                                        urt1.Description='Hold'
                                        and ur1.UserId = @UserId
                                        ";

                    DbUtils.AddParameter(cmd, "@UserId", userId);

                    var reader = cmd.ExecuteReader();

                    IList<BookRequestDto> bookRequests = new List<BookRequestDto>();

                    while (reader.Read())
                    {
                        bookRequests.Add(new BookRequestDto()
                        {
                            RequestType = DbUtils.GetString(reader, "RequestType"),
                            RequestId = DbUtils.GetInt(reader, "RequestId"),
                            RequestTS = DbUtils.GetDateTime(reader, "RequestTS"),
                            CompletedTS = DbUtils.GetNullableDateTime(reader, "CompletedTS"),
                            IsApproved = DbUtils.GetNullableBoolean(reader, "IsApproved"),
                            BookId = DbUtils.GetInt(reader, "BookId"),
                            ImageUrl = DbUtils.GetString(reader, "ImageUrl"),
                            Title = DbUtils.GetString(reader, "Title"),
                            Quantity = DbUtils.GetInt(reader, "Quantity"),
                            Author = DbUtils.GetString(reader, "Author"),
                            Publisher = DbUtils.GetString(reader, "Publisher"),
                            Language = DbUtils.GetString(reader, "Language"),
                            Description = DbUtils.GetString(reader, "Description"),
                            ISBN13 = DbUtils.GetString(reader, "ISBN13"),
                            AgeRange = DbUtils.GetString(reader, "AgeRange"),
                            Genre = DbUtils.GetString(reader, "Genre")
                        });
 
                    }
                    reader.Close();
                    return bookRequests;
                }
            }
        }
    }
}
