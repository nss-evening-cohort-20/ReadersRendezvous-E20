

using Microsoft.Data.SqlClient;

public abstract class BaseRepository
{
    public BaseRepository(IConfiguration config)
    {
        _connectionString = config.GetConnectionString("DefaultConnection");
    }
    private string _connectionString;
    protected SqlConnection Connection => new SqlConnection(_connectionString);
}