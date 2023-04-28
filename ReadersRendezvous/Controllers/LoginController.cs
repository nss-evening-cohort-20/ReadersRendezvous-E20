using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ReadersRendezvous.Interfaces;
using ReadersRendezvous.Repositories;
using ReadersRendezvous.Models;

namespace ReadersRendezvous.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {

        private readonly ILoginRepository _loginRepo;

        public LoginController(ILoginRepository loginRepository)
        {
            _loginRepo = loginRepository;
        }


        [HttpGet("{userId}")]
        public IActionResult FetchUserByIdNonAdmin(string userId)
        {
            var fetchedUser = _loginRepo.FetchUserByIdNonAdmin(userId);

            if (fetchedUser == null)
            {
                return NotFound();
            }

            return Ok(fetchedUser);
        }


        [HttpGet("admin/{adminId}")]
        public IActionResult FetchUserByIdAdmin(string adminId)
        {
            var user = _loginRepo.fetchuserbyAdminId(adminId);

            if (user == null)
            {
                return NotFound();
            }

            return Ok(user);
        }

        [HttpGet("validate/{passwordHash}")]
        public IActionResult ValidateCredentialsAdmin(string passwordHash)
        {
            var user = _loginRepo.ValidateCredentialsAdmin(passwordHash);

            if (user == null)
            {
                return NotFound();
            }

            return Ok(user);
        }

        [HttpGet("validateNonAdmin/{passwordHash}")]
        public IActionResult ValidateCredentialsNonAdmin(string passwordHash)
        {
            var user = _loginRepo.ValidateCredentialsNonAdmin(passwordHash);

            if (user == null)
            {
                return NotFound();
            }

            return Ok(user);
        }

        [HttpPut("UpdateCredentialsNonAdmin/{userId}/{passwordHash}")]
        public IActionResult UpdateCredentialsNonAdmin(string userId, string passwordHash)
        {
            _loginRepo.UpdateCredentialsNonAdmin(userId, passwordHash);

            return NoContent();
        }

        [HttpPut("UpdateCredentialsAdmin/{adminId}/{passwordHash}")]
        public IActionResult UpdateCredentialsAdmin(string adminId, string passwordHash)
        {
            _loginRepo.UpdateCredentialsAdmin(adminId, passwordHash);

            return NoContent();
        }
    }

}
