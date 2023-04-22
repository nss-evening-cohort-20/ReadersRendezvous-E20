using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ReadersRendezvous.Repositories;

namespace ReadersRendezvous.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BooksController : ControllerBase
    {
        private readonly IBooksRepository _booksRepository;

        public BooksController(IBooksRepository booksRepository)
        {
            _booksRepository = booksRepository;
        }

        [HttpGet]
        public IActionResult GetAllBooks()
        {
            var booksList = _booksRepository.GetAllBooks();
            if (booksList == null)
            {
                return NotFound();
            }
            return Ok(booksList);
        }

        [HttpGet("{title}")]
        public IActionResult SearchBooksByTitle(string title)
        {
            if (title == null) { return BadRequest("Invalid Title"); }
            var booksList = _booksRepository.SearchBooksByTitle(title);
            if (booksList == null)
            {
                return NotFound();
            }
            return Ok(booksList);
        }
    }
}
