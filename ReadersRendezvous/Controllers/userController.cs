using Microsoft.AspNetCore.Mvc;
using ReadersRendezvous.Model;
using ReadersRendezvous.Repository;
using ReadersRendezvous.Utils;

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
        [HttpGet]
        public IActionResult GetAllUsers()   
        {
            return Ok(_userRepository.GetAllUsers());
        }

        //=============================================================

        [HttpPost]
        public IActionResult AddSkill(User user)
        {
            _userRepository.Insert(user);
            return Created("/api/skills/" + user.Id, user);
        }



        [HttpPut("{id}")]
        public IActionResult UpdateUser(int id, User user)
        {
            if (id != user.Id)
            {
                return BadRequest();
            }
            _userRepository.Update(user);
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
