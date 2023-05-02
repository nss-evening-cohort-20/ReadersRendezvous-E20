using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using ReadersRendezvous.Models;
using ReadersRendezvous.Repository;
// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ReadersRendezvous.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class AdminController : ControllerBase
    {
        private readonly IAdminRepository _adminRepository;

        public AdminController(IAdminRepository adminRepository)
        {
            _adminRepository = adminRepository;
        }

        // GET: api/<BookController>
        [HttpGet]
        public IActionResult GetAll()
        {
            return Ok(_adminRepository.GetAllAdmins());
        }

        // GET api/<BookController>/5
        [HttpGet("GetById/{adminId}")]
        public IActionResult GetById(int adminId)
        {
            if (adminId == null)
            {
                return BadRequest();
            }
            Admin admin = _adminRepository.SearchAdminsById(adminId);
            if (admin == null)
            {
                return NotFound($"{adminId} Not Found!");
            }
            return Ok(admin);

        }


        // POST api/<BookController>
        [HttpPost("/AddAdmin")]
        public IActionResult Post(Admin admin)
        {
            _adminRepository.AddAdmin(admin);
            return Created("", admin);
        }

        // PUT api/<BookController>/5
        [HttpPut("{id}")]
        public IActionResult Put(int id, Admin admin)
        {
            if (id != admin.Id)
            {
                return BadRequest();
            }

            _adminRepository.EditAdmin(admin);
            return NoContent();
        }

    }
}
