using Microsoft.AspNetCore.Mvc;
using ReadersRendezvous.Models;
using ReadersRendezvous.Repository;
using System;


// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ReadersRendezvous.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IUserRepository _userRepository;


        public UserController(IUserRepository userRepository)
        {
            _userRepository = userRepository;
        }
        // GET: api/<userController>
        [HttpGet("GetAllUsers")]
        public IActionResult GetAllUsers()   
        {
            return Ok(_userRepository.GetAllUsers());
        }

        //=============================================================

        [HttpPost]
        public IActionResult AddUser(User user)
        {
            _userRepository.Insert(user);
            return Created("/api/user/" + user.Id, user);
        }


        [HttpGet("GetById/{id}")]
        public IActionResult GetById(int id)
        {
            if (id == null)
            {
                return BadRequest();
            }
            User user = _userRepository.GetById(id);
            if (user == null)
            {
                return NotFound($"{id} Not Found!");
            }
            return Ok(user);

        }
        //======================================

        [HttpPut("{id}")]
        public IActionResult UpdateUser(int id, User user)
        {
            if (id !=   user.Id)
            {
                return BadRequest();
            }
            _userRepository.Update(id, user);
            return NoContent();
        }






        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            User user = (User)_userRepository.GetById(id);
            if (user == null)
            {
                return NotFound();
            }
            _userRepository.Delete(user.Id);
            return NoContent();
        }




    }
}
