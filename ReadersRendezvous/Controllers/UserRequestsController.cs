using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ReadersRendezvous.Models;
using ReadersRendezvous.Models.Dtos.UserRequests;
using ReadersRendezvous.Repository;
using System.Reflection.Metadata.Ecma335;

namespace ReadersRendezvous.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class UserRequestsController : ControllerBase
    {
        private readonly IUserRequestRepository _userRequestRepository;
        public UserRequestsController(IUserRequestRepository userRequestRepository)
        {
            _userRequestRepository = userRequestRepository;
        }

        [HttpGet("[action]/{userId}")]
        public IActionResult  GetAllHoldRequestsByUser(int userId)
        {
            string? firebaseUID = User.FindFirst(claim => claim.Type == "user_id")?.Value;
            string? name = User?.Identity?.Name;

            var userRequestDto = _userRequestRepository.GetAllOpenHoldRequestsByUser(userId);
            if (userRequestDto == null) { return NotFound(); }

            return Ok(userRequestDto);
        }

        [HttpPost("[action]/")]
        public IActionResult AddHoldRequest(AddUserRequestDto addUserRequestDto)
        {
            _userRequestRepository.AddHoldRequest(addUserRequestDto);

            var createdResource = addUserRequestDto;
            var actionName = nameof(GetAllHoldRequestsByUser);
            var routeValues = new { userId = addUserRequestDto.UserId };

            return CreatedAtAction(actionName, routeValues, createdResource);
        }

        [HttpPut("[action]/{requestId}")]
        public IActionResult UpdateHoldRequestStatus(int requestId, UserRequest userRequest)
        {
            if (requestId != userRequest.Id)
            {
                return BadRequest();
            }

            var updateStatus = _userRequestRepository.UpdateHoldRequestStatus(userRequest);

            return updateStatus == 0 ? NotFound() : NoContent();
        }

        [HttpDelete("[action]/")]
        public IActionResult DeleteHoldRequest(int requestId)
        {
            var deleteStatus = _userRequestRepository.DeleteHoldRequest(requestId);

            return deleteStatus == 0 ? NotFound() : NoContent();
        }
    }


}

