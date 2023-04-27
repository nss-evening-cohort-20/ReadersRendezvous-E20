using Microsoft.Data.SqlClient;
using Microsoft.Extensions.Configuration;
using ReadersRendezvous.Interfaces;
using ReadersRendezvous.Models;
using ReadersRendezvous.Repositories;
using System.Net;
using System.Numerics;
using System.Xml;
using System.Diagnostics;

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
                                Id = reader.GetInt32(reader.GetOrdinal("Id")),
                                FirstName = reader.GetString(reader.GetOrdinal("FirstName")),
                                LastName = reader.GetString(reader.GetOrdinal("LastName")),
                                Email = reader.GetString(reader.GetOrdinal("Email")),
                                LibraryCardNumber = reader.GetInt32(reader.GetOrdinal("LibraryCardNumber")),
                                IsActive = reader.GetBoolean(reader.GetOrdinal("IsActive")),
                                PhoneNumber = reader.GetString(reader.GetOrdinal("PhoneNumber")),
                                AddressLineOne = reader.GetString(reader.GetOrdinal("AddressLineOne")),
                                AddressLineTwo = reader.GetString(reader.GetOrdinal("AddressLineTwo")),
                                City = reader.GetString(reader.GetOrdinal("City")),
                                State = reader.GetString(reader.GetOrdinal("State")),
                                Zip = reader.GetInt32(reader.GetOrdinal("Zip"))
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
                                Id = reader.GetInt32(reader.GetOrdinal("Id")),
                                FirstName = reader.GetString(reader.GetOrdinal("FirstName")),
                                LastName = reader.GetString(reader.GetOrdinal("LastName")),
                                Email = reader.GetString(reader.GetOrdinal("Email")),
                                LibraryCardNumber = reader.GetInt32(reader.GetOrdinal("LibraryCardNumber")),
                                IsActive = reader.GetBoolean(reader.GetOrdinal("IsActive")),
                                PhoneNumber = reader.GetString(reader.GetOrdinal("PhoneNumber")),
                                AddressLineOne = reader.GetString(reader.GetOrdinal("AddressLineOne")),
                                AddressLineTwo = reader.GetString(reader.GetOrdinal("AddressLineTwo")),
                                City = reader.GetString(reader.GetOrdinal("City")),
                                State = reader.GetString(reader.GetOrdinal("State")),
                                Zip = reader.GetInt32(reader.GetOrdinal("Zip"))
                            };

                            reader.Close();
                            return user;
                        }

                        return null;
                    }
                };



            }
        }

        public User ValidateCredentialsAdmin(string passwordHash)
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();

                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"SELECT [User].Id, [User].FirstName, [User].LastName, [User].Email, [User].LibraryCardNumber, 
                            [User].IsActive, [User].PhoneNumber, [User].AddressLineOne, [User].AddressLineTwo, [User].City, 
                            [User].State, [User].Zip 
                    FROM [User] 
                    LEFT JOIN [Login] ON [User].Id = [Login].UserId  
                    WHERE [Login].PasswordHash = @PasswordHash;";

                    cmd.Parameters.AddWithValue("@PasswordHash", passwordHash);

                    using (SqlDataReader reader = cmd.ExecuteReader())
                    {

                        if (reader.Read())
                        {
                            User user = new User
                            {
                                Id = reader.GetInt32(reader.GetOrdinal("Id")),
                                FirstName = reader.GetString(reader.GetOrdinal("FirstName")),
                                LastName = reader.GetString(reader.GetOrdinal("LastName")),
                                Email = reader.GetString(reader.GetOrdinal("Email")),
                                LibraryCardNumber = reader.GetInt32(reader.GetOrdinal("LibraryCardNumber")),
                                IsActive = reader.GetBoolean(reader.GetOrdinal("IsActive")),
                                PhoneNumber = reader.GetString(reader.GetOrdinal("PhoneNumber")),
                                AddressLineOne = reader.GetString(reader.GetOrdinal("AddressLineOne")),
                                AddressLineTwo = reader.GetString(reader.GetOrdinal("AddressLineTwo")),
                                City = reader.GetString(reader.GetOrdinal("City")),
                                State = reader.GetString(reader.GetOrdinal("State")),
                                Zip = reader.GetInt32(reader.GetOrdinal("Zip"))
                            };
                            reader.Close();
                            return user;
                        }
                    }

                    return null;
                }
            }
        }

        public User ValidateCredentialsNonAdmin(string passwordHash)
        {

            using (SqlConnection conn = Connection)
            {
                conn.Open();

                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"SELECT [User].Id, [User].FirstName, [User].LastName, [User].Email, [User].LibraryCardNumber, 
                            [User].IsActive, [User].PhoneNumber, [User].AddressLineOne, [User].AddressLineTwo, [User].City, 
                            [User].State, [User].Zip 
                    FROM [User] 
                    LEFT JOIN [Login] ON [User].Id = [Login].UserId  
                    WHERE [Login].PasswordHash = @PasswordHash;";

                    cmd.Parameters.AddWithValue("@PasswordHash", passwordHash);

                    using (SqlDataReader reader = cmd.ExecuteReader())
                    {

                        if (reader.Read())
                        {
                            User user = new User
                            {
                                Id = reader.GetInt32(reader.GetOrdinal("Id")),
                                FirstName = reader.GetString(reader.GetOrdinal("FirstName")),
                                LastName = reader.GetString(reader.GetOrdinal("LastName")),
                                Email = reader.GetString(reader.GetOrdinal("Email")),
                                LibraryCardNumber = reader.GetInt32(reader.GetOrdinal("LibraryCardNumber")),
                                IsActive = reader.GetBoolean(reader.GetOrdinal("IsActive")),
                                PhoneNumber = reader.GetString(reader.GetOrdinal("PhoneNumber")),
                                AddressLineOne = reader.GetString(reader.GetOrdinal("AddressLineOne")),
                                AddressLineTwo = reader.GetString(reader.GetOrdinal("AddressLineTwo")),
                                City = reader.GetString(reader.GetOrdinal("City")),
                                State = reader.GetString(reader.GetOrdinal("State")),
                                Zip = reader.GetInt32(reader.GetOrdinal("Zip"))
                            };
                            reader.Close();
                            return user;
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

    }
}