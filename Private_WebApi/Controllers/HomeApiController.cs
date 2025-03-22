using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Private_Business.Interfaces;
using Private_Entities.DataModels;

namespace Private_WebApi.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class HomeApiController : BaseApiController
    {
        IHomeService _homeService;
        IGoldService _goldService;

        public HomeApiController(IHomeService homeService, IGoldService goldService)
        {
            _homeService = homeService;
            _goldService = goldService;
        }

        [HttpGet]
        [Authorize]
        public IActionResult getHomeGoldList(decimal currentGoldSelling)
        {
            HomeDataModel model = new HomeDataModel();

            model.goldList = _goldService.GetUserGoldList(GetCurrentUser(HttpContext).Id);

            return Ok(_homeService.getHomeGoldList(currentGoldSelling,model));
        }
    }
}