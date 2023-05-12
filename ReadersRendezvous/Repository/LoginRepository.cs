using Microsoft.Data.SqlClient;
using Microsoft.Extensions.Configuration;
using ReadersRendezvous.Interfaces;
using ReadersRendezvous.Models;
using ReadersRendezvous.Repositories;
using System.Net;
using System.Numerics;
using System.Xml;
using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using ReadersRendezvous.Utils;
using ReadersRendezvous.Models.Dtos.Login;

namespace ReadersRendezvous.Repository
{
    public class LoginRepository : BaseRepository, ILoginRepository
    {

        private readonly IConfiguration _configuration;

        public LoginRepository(IConfiguration config) : base(config)
        {
            _configuration = config;
        }


        public User FetchUserByIdNonAdmin(string userId)
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();

                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = "SELECT Id, FirstName, LastName, Email, LibraryCardNumber, IsActive, PhoneNumber, AddressLineOne, AddressLineTwo, City, State, Zip FROM [User] WHERE Id = @userId";

                    cmd.Parameters.AddWithValue("@userId", userId);

                    using (SqlDataReader reader = cmd.ExecuteReader())
                    {

                        while (reader.Read())
                        {
                            User user = new User
                            {
                                Id = DbUtils.GetInt(reader, "Id"),
                                FirstName = DbUtils.GetString(reader, "FirstName"),
                                LastName = DbUtils.GetString(reader, "LastName"),
                                Email = DbUtils.GetString(reader, "Email"),
                                LibraryCardNumber = DbUtils.GetInt(reader, "LibraryCardNumber"),
                                IsActive = DbUtils.GetBoolean(reader, "IsActive"),
                                PhoneNumber = DbUtils.GetString(reader, "PhoneNumber"),
                                AddressLineOne = DbUtils.GetString(reader, "AddressLineOne"),
                                AddressLineTwo = DbUtils.GetString(reader, "AddressLineTwo"),
                                City = DbUtils.GetString(reader, "City"),
                                State = DbUtils.GetString(reader, "State"),
                                Zip = DbUtils.GetInt(reader, "Zip")
                            };


                            return user;
                        }
                    }

                    return null;
                }
            }
        }

        public User fetchuserbyAdminId(string adminid)
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();

                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"SELECT [User].Id, [User].FirstName, [User].LastName, [User].Email, [User].LibraryCardNumber, [User].IsActive, [User].PhoneNumber, [User].AddressLineOne, [User].AddressLineTwo, [User].City, [User].State, [User].Zip FROM [User] LEFT JOIN [Login] ON [User].Id = [Login].UserId LEFT JOIN [Admin] ON [Admin].Id = [Login].AdminId WHERE [Admin].Id = @AdminId;";

                    cmd.Parameters.AddWithValue("@AdminId", adminid);

                    using (SqlDataReader reader = cmd.ExecuteReader())
                    {

                        if (reader.Read())
                        {
                            User user = new User
                            {
                                Id = DbUtils.GetInt(reader, "Id"),
                                FirstName = DbUtils.GetString(reader, "FirstName"),
                                LastName = DbUtils.GetString(reader, "LastName"),
                                Email = DbUtils.GetString(reader, "Email"),
                                LibraryCardNumber = DbUtils.GetInt(reader, "LibraryCardNumber"),
                                IsActive = DbUtils.GetBoolean(reader, "IsActive"),
                                PhoneNumber = DbUtils.GetString(reader, "PhoneNumber"),
                                AddressLineOne = DbUtils.GetString(reader, "AddressLineOne"),
                                AddressLineTwo = DbUtils.GetString(reader, "AddressLineTwo"),
                                City = DbUtils.GetString(reader, "City"),
                                State = DbUtils.GetString(reader, "State"),
                                Zip = DbUtils.GetInt(reader, "Zip")
                            };

                            reader.Close();
                            return user;
                        }

                        return null;
                    }
                };



            }
        }

        public LoginResponse LoginWithCredentials(LoginRequest loginRequest)
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();

                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"SELECT TOP 1 * FROM(SELECT 'User' AS UserType, [User].Id AS Id, [User].FirstName AS FirstName, [User].LastName AS LastName, [User].Email AS Email, [User].LibraryCardNumber AS LibraryCardNumber,
                            [User].IsActive AS IsActive, [User].PhoneNumber AS PhoneNumber, [User].AddressLineOne AS AddressLineOne, [User].AddressLineTwo AS AddressLineTwo, [User].City AS City,
                            [User].State AS State, [User].Zip AS Zip
                    FROM[User]
                    --INNER JOIN[Login] ON[User].Id = [Login].UserId
                    WHERE--[Login].PasswordHash = 'Jane'
                    [User].Email = @EmailId


                    UNION

                    SELECT 'Admin' AS UserType, [Admin].Id AS Id, [Admin].FirstName AS FirstName, [Admin].LastName AS LastName, [Admin].Email AS Email, '' AS LibraryCardNumber,
                            '' AS IsActive, '' AS PhoneNumber, '' AS AddressLineOne, '' AS AddressLineTwo, '' AS City,
                            '' AS State, '' AS Zip
                    FROM[Admin]
                    -- INNER JOIN[Login] ON[Admin].Id = [Login].UserId
                    WHERE--[Login].PasswordHash = 'Jane'
                    [Admin].Email = @EmailId) TBL

                    ORDER BY UserType";

                    cmd.Parameters.AddWithValue("@Password", loginRequest.Password);
                    //cmd.Parameters.AddWithValue("@Id", credentials.Id);
                    cmd.Parameters.AddWithValue("@EmailId", loginRequest.Email);

                    using (SqlDataReader reader = cmd.ExecuteReader())
                    {

                        if (reader.Read())
                        {
                            LoginResponse loginResponse = new LoginResponse
                            {
                                UserType = DbUtils.GetString(reader, "UserType"),
                                IsAuthorized = true,
                                Id = DbUtils.GetInt(reader, "Id"),
                                FirstName = DbUtils.GetString(reader, "FirstName"),
                                LastName = DbUtils.GetString(reader, "LastName"),
                                Email = DbUtils.GetString(reader, "Email"),
                                LibraryCardNumber = DbUtils.GetInt(reader, "LibraryCardNumber"),
                                IsActive = DbUtils.GetBoolean(reader, "IsActive"),
                                PhoneNumber = DbUtils.GetString(reader, "PhoneNumber"),
                                AddressLineOne = DbUtils.GetString(reader, "AddressLineOne"),
                                AddressLineTwo = DbUtils.GetString(reader, "AddressLineTwo"),
                                City = DbUtils.GetString(reader, "City"),
                                State = DbUtils.GetString(reader, "State"),
                                Zip = DbUtils.GetInt(reader, "Zip")
                            };
                            reader.Close();
                            return loginResponse;
                        }
                    }

                    return null;
                }
            }
        }


        public void UpdateCredentialsAdmin(string adminId, string passwordHash)
        {
            try
            {
                using (SqlConnection conn = Connection)
                {
                    conn.Open();

                    using (SqlCommand cmd = conn.CreateCommand())
                    {
                        cmd.CommandText = @"UPDATE [LOGIN] SET [PasswordHash] = @passwordHash WHERE [AdminId] = @AdminId;";

                        cmd.Parameters.AddWithValue("@AdminId", adminId);
                        cmd.Parameters.AddWithValue("@PasswordHash", passwordHash);

                        cmd.ExecuteNonQuery();

                        Console.WriteLine("credentials successfully updated");
                    }
                }
            }
            catch (Exception ex)
            {

                Console.WriteLine(ex.Message);
            }


        }

        public void UpdateCredentialsNonAdmin(string userId, string passwordHash)
        {
            try
            {
                using (SqlConnection conn = Connection)
                {
                    conn.Open();

                    using (SqlCommand cmd = conn.CreateCommand())
                    {
                        cmd.CommandText = @"UPDATE [LOGIN] SET [PasswordHash] = @passwordHash WHERE [UserId] = @UserId;";

                        cmd.Parameters.AddWithValue("@UserId", userId);
                        cmd.Parameters.AddWithValue("@PasswordHash", passwordHash);

                        cmd.ExecuteNonQuery();

                        Console.WriteLine("credentials successfully updated");

                    }
                }
            }
            catch (Exception ex)
            {

                Console.WriteLine(ex.Message);
            }


        }


        public void RegisterUser(RegisterUserClass registerUser)
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();

                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"INSERT INTO [User] (
                    FirstName, LastName, Email, LibraryCardNumber, IsActive,
                    PhoneNumber, AddressLineOne, AddressLineTwo, City, State, Zip)
                VALUES (
                    @FirstName, @LastName, @Email, @LibraryCardNumber, @IsActive,
                    @PhoneNumber, @AddressLineOne, @AddressLineTwo, @City, @State, @Zip);
                INSERT INTO [Login] (UserId, PasswordHash) VALUES (SCOPE_IDENTITY(), @PasswordHash);";

                    cmd.Parameters.AddWithValue("@FirstName", registerUser.FirstName);
                    cmd.Parameters.AddWithValue("@LastName", registerUser.LastName);
                    cmd.Parameters.AddWithValue("@Email", registerUser.Email);
                    Random random = new Random();
                    int libraryCardNumber = random.Next(1, 100000);
                    cmd.Parameters.AddWithValue("@LibraryCardNumber", libraryCardNumber);
                    cmd.Parameters.AddWithValue("@IsActive", true);
                    cmd.Parameters.AddWithValue("@PhoneNumber", registerUser.PhoneNumber);
                    cmd.Parameters.AddWithValue("@AddressLineOne", registerUser.AddressLineOne);
                    cmd.Parameters.AddWithValue("@AddressLineTwo", registerUser.AddressLineTwo);
                    cmd.Parameters.AddWithValue("@City", registerUser.City);
                    cmd.Parameters.AddWithValue("@State", registerUser.State);
                    cmd.Parameters.AddWithValue("@Zip", registerUser.Zip);
                    cmd.Parameters.AddWithValue("@PasswordHash", registerUser.PasswordHash);
                    cmd.ExecuteNonQuery();
                    
                }
            }
        }
    }
}