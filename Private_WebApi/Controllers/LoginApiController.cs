using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Private_Business.Interfaces;
using Private_Entities.DataModels;

namespace Private_WebApi.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class LoginApiController : BaseApiController
    {
        private readonly IUserService _userService;
        public LoginApiController(IUserService userService)
        {
            _userService = userService;
        }

        [HttpPost]
        [AllowAnonymous]
        public IActionResult LoginUser([FromBody] UserDataModel model)
        {
            var user = _userService.LoginUser(model);

            if (user.Id > 0)
            {
                user.JwtToken = GenerateJwtToken(user);
            }

            return Ok(user);
        }
    }
}