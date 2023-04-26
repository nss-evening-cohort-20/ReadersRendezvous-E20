using ReadersRendezvous.Models;
using ReadersRendezvous.Repositories;
using ReadersRendezvous.Utils;
using System.Reflection.PortableExecutable;
using System.Security.Cryptography;
using static System.Reflection.Metadata.BlobBuilder;

namespace ReadersRendezvous.Repository
{
    public class AdminRepository : BaseRepository, IAdminRepository
    {
        
        public AdminRepository(IConfiguration configuration) : base(configuration) { }


        /*------------------Get All Admins----------------------*/

        public List<Admin> GetAllAdmins()
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"SELECT
                                            [Admin].[Id] AS AdminId,
                                            [Admin].[FirstName] AS AdminFirstName,
                                            [Admin].[LastName] AS AdminLastName,
                                            [Admin].[Email] AS AdminEmail
                                            FROM [ReadersRendezvous].[dbo].[Admin]";

                    var reader = cmd.ExecuteReader();
                    var admins = new List<Admin>();
                    while (reader.Read())
                    {
                        var admin = new Admin()
                        {
                            Id = DbUtils.GetInt(reader, "AdminId"),
                            FirstName = DbUtils.GetString(reader, "AdminFirstName"),
                            LastName = DbUtils.GetString(reader, "AdminLastName"),
                            Email = DbUtils.GetString(reader, "AdminEmail"),
                        };
                        admins.Add(admin);
                    }
                    conn.Close();
                    return admins;
                }
            }
        }


        /*------------------Search Admins by Id----------------------*/


        public Admin SearchAdminsById(int adminId)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"SELECT
                                            [Admin].[Id] AS AdminId,
                                            [Admin].[FirstName] AS AdminFirstName,
                                            [Admin].[LastName] AS AdminLastName,
                                            [Admin].[Email] AS AdminEmail
                                            FROM [ReadersRendezvous].[dbo].[Admin]
                                          WHERE [Admin].[Id] = @AdminId";

                    DbUtils.AddParameter(cmd, "@AdminId", adminId);
                    var reader = cmd.ExecuteReader();
                    Admin admin = null;
                    while (reader.Read())
                    {
                        if (admin == null)
                        {
                            admin = new Admin()
                            {
                                Id = DbUtils.GetInt(reader, "AdminId"),
                                FirstName = DbUtils.GetString(reader, "AdminFirstName"),
                                LastName = DbUtils.GetString(reader, "AdminLastName"),
                                Email = DbUtils.GetString(reader, "AdminEmail"),
                            };
                        }
                    }
                    reader.Close();
                    return admin;

                }
            }
        }



        /*------------------Add Admin----------------------*/


        public void AddAdmin(Admin admin)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"INSERT INTO Admin
                        (FirstName, LastName, Email)
                        OUTPUT INSERTED.ID
                        VALUES (@firstName, @lastName, @email)";
                    DbUtils.AddParameter(cmd, "@firstName", admin.FirstName);
                    DbUtils.AddParameter(cmd, "@lastName", admin.LastName);
                    DbUtils.AddParameter(cmd, "@email", admin.Email);
                    admin.Id = (int)cmd.ExecuteScalar();
                }
            }
        }



        /*------------------Edit Admin----------------------*/

        public void EditAdmin(Admin admin)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"UPDATE [dbo].[Admin]
                                           SET 
                                               [FirstName] = @FirstName
                                              ,[LastName] = @LastName
                                              ,[Email] = @Email
                                        WHERE Id = @id";
                    DbUtils.AddParameter(cmd, "@id", admin.Id);
                    DbUtils.AddParameter(cmd, "@FirstName", admin.FirstName);
                    DbUtils.AddParameter(cmd, "@LastName", admin.LastName);
                    DbUtils.AddParameter(cmd, "@Email", admin.Email);
                    cmd.ExecuteNonQuery();

                }
            }
        }



        /*------------------Delete Admin----------------------*/

        public void DeleteAdmin(int id)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = "DELETE FROM Admin WHERE Id = @id";
                    DbUtils.AddParameter(cmd, "@id", id);
                    cmd.ExecuteNonQuery();
                }
            }
        }


    }
}
