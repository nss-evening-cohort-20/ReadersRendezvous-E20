


using Microsoft.Data.SqlClient;

using ReadersRendezvous.Models;
using ReadersRendezvous.Repositories;
using ReadersRendezvous.Utils;
using System;

namespace ReadersRendezvous.Repository;

public class UserRepository : BaseRepository, IUserRepository
{
    public UserRepository(IConfiguration configuration) : base(configuration) { }



    public List<User> GetAllUsers()
    {
        using (var conn = Connection)
        {
            conn.Open();

            using (var cmd = conn.CreateCommand())
            {
                cmd.CommandText = @"SELECT  [Id]
                                        ,[FirstName]
                                        ,[LastName]
                                        ,[Email]
                                        ,[LibraryCardNumber]
                                        ,[IsActive]
                                       ,[PhoneNumber]
                                        ,[AddressLineOne]
                                        ,[AddressLineTwo]
                                        ,[City]
                                        ,[State]
                                        ,[Zip]
                                        FROM [ReadersRendezvous].[dbo].[User]";

                var reader = cmd.ExecuteReader();
                var users = new List<User>();
                while (reader.Read())
                {
                    var user = new User()
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
                    //var test = user;
                    users.Add(user);
                }
                conn.Close();
                return users;
            }
        }
    }

    //===============================================================

    public User GetById(int Id)
    {
        using (var conn = Connection)
        {
            conn.Open();
            using (var cmd = conn.CreateCommand())
            {
                cmd.CommandText = @"SELECT  [Id]
                                                ,[FirstName]
                                                ,[LastName]
                                                ,[Email]
                                                ,[LibraryCardNumber]
                                                ,[IsActive]
                                                ,[PhoneNumber]
                                                ,[AddressLineOne]
                                                ,[AddressLineTwo]
                                                ,[City]
                                                ,[State]
                                                ,[Zip]
	                                            FROM [User] 
                                                WHERE Id = @id";
                cmd.Parameters.AddWithValue("@id", Id);
                SqlDataReader reader = cmd.ExecuteReader();
                User user = null;
                if (reader.Read())
                {
                    user = new User()
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
                }
                reader.Close();
                return user;
            }
        }
    }
    //=====================================================================

    //public void Insert(User user)
    //{
    //    using (SqlConnection conn = Connection)
    //    {
    //        conn.Open();
    //        using (SqlCommand cmd = conn.CreateCommand())
    //        {
    //            cmd.CommandText = @"INSERT INTO User 
    //                                                (Id
    //                                                ,firstName
    //                                                ,lastName
    //                                                ,email
    //                                                ,libraryCardNumber
    //                                                ,PhoneNumber
    //                                                ,addresslineOne
    //                                                ,addressLineTwo
    //                                                ,city
    //                                                ,state
    //                                                ,zip) 

    //                                                OUTPUT INSERTED.Id 

    //                                                VALUES (@Id
    //                                                , @firstName
    //                                                , @lastName
    //                                                , @email
    //                                                ,@libraryCardNumber
    //                                                ,@IsActive 
    //                                                ,@PhoneNumber
    //                                                ,@addresslineOne
    //                                                ,@ AddressLineTwo
    //                                                , @city
    //                                                ,@state
    //                                                ,@zip)";
    //            DbUtils.AddParameter(cmd, "@Id", user.Id);
    //            DbUtils.AddParameter(cmd, "@firstName", user.FirstName);
    //            DbUtils.AddParameter(cmd, "@lastName", user.LastName);
    //            DbUtils.AddParameter(cmd, "@email", user.Email);
    //            DbUtils.AddParameter(cmd, "@libraryCardNumbe", user.LibraryCardNumber);
    //            DbUtils.AddParameter(cmd, "@IsActive", user.IsActive);
    //            DbUtils.AddParameter(cmd, "@PhoneNumber", user.PhoneNumber);
    //            DbUtils.AddParameter(cmd, "@addresslineOne", user.AddressLineOne);
    //            DbUtils.AddParameter(cmd, "@addressLineTwo", user.AddressLineTwo);
    //            DbUtils.AddParameter(cmd, "@city", user.City);
    //            DbUtils.AddParameter(cmd, "@zip", user.Zip);


    //            int id = (int)cmd.ExecuteScalar();

    //            id = user.Id;
    //        }
    //    }
    //}


    //=================================================


    //public void Update(User user)
    //{
    //    using (SqlConnection conn = Connection)
    //    {
    //        conn.Open();
    //        using (SqlCommand cmd = conn.CreateCommand())
    //        {
    //            cmd.CommandText = @"UPDATE User SET 
    //                                Id = @Id
    //                            WHERE Id = @id";
    //            cmd.Parameters.AddWithValue("@Id", user.Id);
    //            ;
    //            cmd.Parameters.AddWithValue("@id", user.Id);
    //            cmd.ExecuteNonQuery();
    //        }
    //        conn.Close();
    //    }
    //}

    //=====================================================

    public void Delete(int id)
    {
        //using (SqlConnection conn = Connection)

        using (var conn = Connection)
        {
            conn.Open();

            using (SqlCommand cmd = conn.CreateCommand())
            {
                cmd.CommandText = @"DELETE FROM [User] WHERE Id = @id";
                //cmd.Parameters.AddWithValue("@id", id);
                DbUtils.AddParameter(cmd, "@id", id);

                cmd.ExecuteNonQuery();
            }
            conn.Close();
        }
    }

    public void Insert(User user)
    {
        throw new NotImplementedException();
    }

    //List<User> IUserRepository.GetAllUsers()
    //{
    //    throw new NotImplementedException();
    //}
}



