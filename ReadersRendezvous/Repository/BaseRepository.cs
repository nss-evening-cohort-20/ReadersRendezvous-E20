

//using Microsoft.Data.SqlClient;
//    public abstract class BaseRepository
//    {

//    }
//    private string _connectionString;
//    protected SqlConnection Connection => new SqlConnection(_connectionString);

using Microsoft.Data.SqlClient;
using Microsoft.Extensions.Configuration;
namespace ReadersRendezvous.Repositories
{
    public abstract class BaseRepository
    {
        private readonly string _connectionString;

        public BaseRepository(IConfiguration configuration)
        {
            _connectionString = configuration.GetConnectionString("DefaultConnection");
        }

        protected SqlConnection Connection
        {
            get
            {
                return new SqlConnection(_connectionString);
            }
        }
    }
}
