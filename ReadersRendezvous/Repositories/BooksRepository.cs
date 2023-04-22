using ReadersRendezvous.Models;
using ReadersRendezvous.Utilities;

namespace ReadersRendezvous.Repositories
{
	public class BooksRepository : BaseRepository, IBooksRepository
	{
		public BooksRepository(IConfiguration configuration) : base(configuration)
		{

		}
		public IEnumerable<Books> GetAllBooks()
		{
			using (var conn = Connection)
			{
				conn.Open();
				using (var cmd = conn.CreateCommand())
				{
					cmd.CommandText = @"
										select Id, ImageUrl, AgeRangeId, GenreId, Title, 
												CoverTypeId, Quantity, Author, Publisher, Language,
												Description, ISBN13
										from book
										";

					var reader = cmd.ExecuteReader();

					var booksList = new List<Books>();
					while (reader.Read())
					{
						booksList.Add(new Books()
						{

							Id = DbUtils.GetInt(reader, "Id"),
							GenreId = DbUtils.GetInt(reader, "GenreId"),
							Title = DbUtils.GetString(reader, "Title"),
							CoverTypeId = DbUtils.GetInt(reader, "CoverTypeId"),
							Quantity = DbUtils.GetInt(reader, "Quantity"),
							Author = DbUtils.GetString(reader, "Author"),
							Publisher = DbUtils.GetString(reader, "Publisher"),
							Language = DbUtils.GetString(reader, "Language"),
							Description = DbUtils.GetString(reader, "Description"),
							ISBN13 = DbUtils.GetString(reader, "ISBN13")


						});
					}

					reader.Close();

					return booksList;

				}
			}
		}

		public IEnumerable<Books> SearchBooksByTitle(string title)
		{
			using (var conn = Connection)
			{
				conn.Open();
				using (var cmd = conn.CreateCommand())
				{
					cmd.CommandText = @"
										select Id, ImageUrl, AgeRangeId, GenreId, Title, 
												CoverTypeId, Quantity, Author, Publisher, Language,
												Description, ISBN13
										from book 
										where title like @Title
										";

					var searchTerm = $"%{title.Trim()}%";
					DbUtils.AddParameter(cmd, "@Title", searchTerm);

					var reader = cmd.ExecuteReader();


					var booksList = new List<Books>();
					while (reader.Read())
					{
						booksList.Add(new Books()
						{

							Id = DbUtils.GetInt(reader, "Id"),
							GenreId = DbUtils.GetInt(reader, "GenreId"),
							Title = DbUtils.GetString(reader, "Title"),
							CoverTypeId = DbUtils.GetInt(reader, "CoverTypeId"),
							Quantity = DbUtils.GetInt(reader, "Quantity"),
							Author = DbUtils.GetString(reader, "Author"),
							Publisher = DbUtils.GetString(reader, "Publisher"),
							Language = DbUtils.GetString(reader, "Language"),
							Description = DbUtils.GetString(reader, "Description"),
							ISBN13 = DbUtils.GetString(reader, "ISBN13")


						});
					}

					reader.Close();

					return booksList;

				}
			}
		}
	}
}
