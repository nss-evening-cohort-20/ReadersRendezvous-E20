

using Microsoft.Data.SqlClient;
    public abstract class BaseRepository
    {
       
    }
    private string _connectionString;
    protected SqlConnection Connection => new SqlConnection(_connectionString);

