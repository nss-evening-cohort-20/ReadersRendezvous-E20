using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using ReadersRendezvous.Models;
using ReadersRendezvous.Repository;
// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ReadersRendezvous.Controllers
{
    //[Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class BookController : ControllerBase
    {
        private readonly IBookRepository _bookRepository;

        public BookController(IBookRepository bookRepository)
        {
            _bookRepository = bookRepository;
        }

        // GET: api/<BookController>
        [HttpGet("GetAllBooks")] 
        public IActionResult GetAll()
        {
            return Ok(_bookRepository.GetAllBooks());
        }
        //---------------------------------------------

        [HttpGet("AllBooksPaginate")]
        public IActionResult GetAllPaginatedBooks(int page = 2, int limit = 1)
        {
            int offset = 0;
            if (page != 1 && page != 0) { offset = (page - 1) * limit; };
            (var books, int pageQuantity) = _bookRepository.GetAllBooksPaginate(offset, limit);
            HttpContext.Response.Headers.Add("X-Total-Count", pageQuantity.ToString());
            return Ok(books);
        }
        //---------------------------------------------
        // GET api/<BookController>/5
        [HttpGet("GetById/{bookId}")]
        public IActionResult GetById(int bookId)
        {
            if (bookId == null)
            {
                return BadRequest();
            }
            BookInfo book = _bookRepository.SearchBooksByID(bookId);
            if (book == null)
            {
                return NotFound($"{bookId} Not Found!");
            }
            return Ok(book);

        }

        // GET api/<BookController>/title
        [HttpGet("GetByTitle/{title}")]
        public IActionResult GetTByitle(string title)
        {
            if (title == null)
            {
                return BadRequest();
            }
            var book = _bookRepository.SearchBooksByTitle(title);
            if(book == null)
            {
                return NotFound($"{title} Not Found!");
            }
            return Ok(book);

        }

        // GET api/<BookController>/iSBN
        [HttpGet("GetByISBN/{iSBN}")]
        public IActionResult GetByISBN(string iSBN)
        {
            if (iSBN == null)
            {
                return BadRequest();
            }
            var book = _bookRepository.SearchBooksByISBN(iSBN);
            if (book == null)
            {
                return NotFound($"{iSBN} Not Found!");
            }
            return Ok(book);

        }

        [HttpGet("GetByAuthor/{author}")]
        public IActionResult GetByAuthor(string author)
        {
            //if (author == null)
            //{
            //    return BadRequest();
            //}
            var book = _bookRepository.SearchByAuthor(author);
            //if (book == null)
            //{
            //    return NotFound($"{author} Not Found!");
            //}
            return Ok(book);

        }

        [HttpGet("GetByPublisher/{publisher}")]
        public IActionResult GetByPublisher(string publisher)
        {
            if (publisher == null)
            {
                return BadRequest();
            }
            var book = _bookRepository.SearchByPublisher(publisher);
            if (book == null)
            {
                return NotFound($"{publisher} Not Found!");
            }
            return Ok(book);

        }

        [HttpGet("GetByAgeRange/{range}")]
        public IActionResult GetByAgeRange(string range)
        {
            if (range == null)
            {
                return BadRequest();
            }
            var book = _bookRepository.SearchByAgeRange(range);
            if (book == null)
            {
                return NotFound($"{range} Not Found!");
            }
            return Ok(book);

        }

        [HttpGet("GetByGenre/{bookGenre}")]
        public IActionResult GetByGenre(string bookGenre)
        {
            if (bookGenre == null)
            {
                return BadRequest();
            }
            var book = _bookRepository.SearchByGenre(bookGenre);
            if (book == null)
            {
                return NotFound($"{bookGenre} Not Found!");
            }
            return Ok(book);

        }

        // POST api/<BookController>
        [HttpPost("/AddBook")]
        public IActionResult Post(AddBook book)
        {
            _bookRepository.AddBook(book);
            return Created("", book);
        }

        // PUT api/<BookController>/5
        [HttpPut("UpdateBook/{ISBN13}")]
        public IActionResult Put(string ISBN13, AddBook book)
        {
            _bookRepository.EditBook(ISBN13,book);
            //return NoContent();
            return Ok(book);
        }

        // DELETE api/<BookController>/5
        [HttpDelete("DeleteByISBN13/{iSBN}")]
        public IActionResult Delete(string iSBN)
        {
            _bookRepository.DeleteBook(iSBN);
            return NoContent();
        }
    }
}
