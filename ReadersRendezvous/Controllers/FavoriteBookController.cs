using Microsoft.AspNetCore.Mvc;
using ReadersRendezvous.Models;
using ReadersRendezvous.Repository;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ReadersRendezvous.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FavoriteBookController : ControllerBase
    {
        private readonly IFavoriteBookRepository _favoriteBookRepository;

        public FavoriteBookController(IFavoriteBookRepository favoriteBooksRepository)
        {
            _favoriteBookRepository = favoriteBooksRepository;
        }

        // GET: api/<FavoriteBooksController>
        //[HttpGet]
        //public IEnumerable<string> Get()
        //{
        //    return new string[] { "value1", "value2" };
        //}

        // GET api/<FavoriteBooksController>/5
        [HttpGet("{userId}")]
        public IActionResult Get(int userId)
        {
            if (userId == null)
            {
                return BadRequest();
            }
            return Ok(_favoriteBookRepository.GetAllFavoriteBooks(userId));
        }

        // POST api/<FavoriteBooksController>
        [HttpPost("/addToFavorite")]
        public IActionResult Post(AddFavo favoriteBook)
        {
            _favoriteBookRepository.AddFavoriteBook(favoriteBook);
            return Created("", favoriteBook);
        }

        // PUT api/<FavoriteBooksController>/5
        //[HttpPut("{id}")]
        //public void Put(int id, [FromBody] string value)
        //{
        //}

        // DELETE api/<FavoriteBooksController>/5
        [HttpDelete("DeleteById/{bookId}")]
        public IActionResult Delete(int bookId)
        {
            _favoriteBookRepository.DeleteFavoriteBook(bookId);
            return NoContent();
        }
    }
}
