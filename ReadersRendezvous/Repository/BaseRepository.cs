using Microsoft.Data.SqlClient;
using Microsoft.Extensions.Configuration;
namespace ReadersRendezvous.Repositories
{
    public abstract class BaseRepository
    {
        public readonly string _connectionString;

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
