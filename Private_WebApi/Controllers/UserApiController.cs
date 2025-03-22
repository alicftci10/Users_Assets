using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Private_Business.Interfaces;
using Private_Entities.DataModels;

namespace Private_WebApi.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class UserApiController : BaseApiController
    {
        private readonly IUserService _userService;
        public UserApiController(IUserService userService)
        {
            _userService = userService;
        }

        [HttpGet]
        [Authorize]
        public IActionResult GetUserList()
        {
            return Ok(_userService.GetUserList());
        }

        [HttpGet]
        [Authorize]
        public IActionResult GetUser(int pId)
        {
            return Ok(_userService.GetId(pId));
        }

        [HttpPost]
        [Authorize]
        public IActionResult Add([FromBody] UserDataModel model)
        {
            model.CreatedBy = GetCurrentUser(HttpContext).Id;

            return Ok(_userService.Add(model));
        }

        [HttpPut]
        [Authorize]
        public IActionResult Update([FromBody] UserDataModel model)
        {
            model.CreatedBy = GetCurrentUser(HttpContext).Id;

            return Ok(_userService.Update(model));
        }

        [HttpDelete]
        [Authorize]
        public IActionResult Delete(int pId)
        {
            return Ok(_userService.Delete(pId));
        }
    }
}
