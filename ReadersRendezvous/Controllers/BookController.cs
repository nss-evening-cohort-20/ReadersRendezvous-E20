using Microsoft.AspNetCore.Mvc;
using ReadersRendezvous.Models;
using ReadersRendezvous.Repository;  
// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ReadersRendezvous.Controllers
{
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
        [HttpGet] 
        public IActionResult GetAll()
        {
            return Ok(_bookRepository.GetAllBooks());
        }

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

        // POST api/<BookController>
        [HttpPost]
        public IActionResult Post(AddBook book)
        {
            _bookRepository.AddBook(book);
            return Created("", book);
        }

        // PUT api/<BookController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<BookController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
