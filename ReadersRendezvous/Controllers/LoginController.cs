using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ReadersRendezvous.Interfaces;
using ReadersRendezvous.Repositories;
using ReadersRendezvous.Models;
using Microsoft.AspNetCore.Authorization;
using System.Net;
using FirebaseAdmin.Messaging;
using ReadersRendezvous.Models.Dtos.Login;

namespace ReadersRendezvous.Controllers
{
    // [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {

        private readonly ILoginRepository _loginRepo;

        public LoginController(ILoginRepository loginRepository)
        {
            _loginRepo = loginRepository;
        }


        //[HttpGet("{userId}")]
        //public IActionResult FetchUserByIdNonAdmin(string userId)
        //{
        //    var fetchedUser = _loginRepo.FetchUserByIdNonAdmin(userId);

        //    if (fetchedUser == null)
        //    {
        //        return NotFound();
        //    }

        //    return Ok(fetchedUser);
        //}


        //[HttpGet("admin/{adminId}")]
        //public IActionResult FetchUserByIdAdmin(string adminId)
        //{
        //    var user = _loginRepo.fetchuserbyAdminId(adminId);

        //    if (user == null)
        //    {
        //        return NotFound();
        //    }

        //    return Ok(user);
        //}

        [HttpPost("loginvalidate")]
        public IActionResult LoginWithCredentials([FromBody] LoginRequest loginRequest)
        {

            var loginResponse = _loginRepo.LoginWithCredentials(loginRequest);
            
            Console.WriteLine(loginResponse);

            if (loginResponse == null)
            {
                return NotFound();
            }

            CookieOptions cookie = new CookieOptions
            {
                HttpOnly = false,
                Secure = true,
                Expires = DateTime.UtcNow.AddDays(2),
                SameSite = SameSiteMode.None,
            };

      
            Console.WriteLine(loginResponse);


            var responseBody = new
            {
                StatusCode = 200,
                StatusText = "OK",
                User = loginResponse
            };

            Response.Cookies.Append("authCookie", $"{loginRequest.Email}", cookie);
            return Ok(responseBody);
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

        [HttpPost("RegisterUser")]
        public IActionResult RegisterUser(RegisterUserClass registerUser)
        {
            _loginRepo.RegisterUser(registerUser);
            return NoContent();

        }
    }

}
