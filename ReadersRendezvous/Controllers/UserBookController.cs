﻿using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using ReadersRendezvous.Interfaces;
using ReadersRendezvous.Models;
using ReadersRendezvous.Repository;

namespace ReadersRendezvous.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserBookController : ControllerBase
    {
        private readonly IUserBookRepository _userBookRepository;

        public UserBookController(IUserBookRepository userBookRepository)
        {
            _userBookRepository = userBookRepository;
        }

        // GET: api/<BookController>
        [HttpGet("GetAllUserBooks")]
        public IActionResult GetAllUserBooks()
        {
            return Ok(_userBookRepository.GetAllUserBooks());
        }



        // GET: api/<BookController>
        [HttpGet("GetAllUserBooksDTO")]
        public IActionResult GetAll()
        {
            return Ok(_userBookRepository.GetAllUserBooksDTO());
        }

        // GET api/<BookController>/5
        [HttpGet("GetById/{userBookId}")]
        public IActionResult GetById(int userBookId)
        {
            if (userBookId == null)
            {
                return BadRequest();
            }
            UserBook userBook = _userBookRepository.SearchUserBookById(userBookId);
            if (userBook == null)
            {
                return NotFound($"{userBookId} Not Found!");
            }
            return Ok(userBook);

        }



        // GET api/<BookController>/title
        [HttpGet("[action]/{userId}")]
        public IActionResult GetTByUserId(int userId)
        {
            if (userId == null)
            {
                return BadRequest();
            }
            var userBook = _userBookRepository.SearchUserBookByUserId(userId);
            if (userBook == null)
            {
                return NotFound($"{userId} Not Found!");
            }
            return Ok(userBook);

        }



        // GET api/<BookController>/title
        [HttpGet("[action]/{libraryCardNumber}")]
        public IActionResult GetTByLibraryCardNumber(int libraryCardNumber)
        {
            if (libraryCardNumber == null)
            {
                return BadRequest();
            }
            var userBook = _userBookRepository.SearchUserBookByLibraryCardNumber(libraryCardNumber);
            if (userBook == null)
            {
                return NotFound($"{libraryCardNumber} Not Found!");
            }
            return Ok(userBook);

        }



        // POST api/<BookController>
        [HttpPost("/AddUserBook")]
        public IActionResult Post(UserBook userBook)
        {
            _userBookRepository.AddUserBook(userBook);
            return Created("", userBook);
        }


        // PUT api/<BookController>/5
        [HttpPut("{id}")]
        public IActionResult Put(int id, UserBook userBook)
        {
            if (id != userBook.Id)
            {
                return BadRequest();
            }

            _userBookRepository.EditUserBook(userBook);
            return NoContent();
        }




        // DELETE api/<BookController>/5
        [HttpDelete("DeleteById/{id}")]
        public IActionResult Delete(int id)
        {
            _userBookRepository.DeleteUserBook(id);
            return NoContent();
        }



    }
}
