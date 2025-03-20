using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Private_Business.Interfaces;
using Private_Entities.DataModels;

namespace Private_WebApi.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class GoldApiController : BaseApiController
    {
        IGoldService _gold;
        public GoldApiController(IGoldService gold)
        {
            _gold = gold;
        }

        [HttpGet]
        [Authorize]
        public IActionResult GetUserGoldList()
        {
            return Ok(_gold.GetUserGoldList(GetCurrentUser(HttpContext).Id));
        }

        [HttpGet]
        [Authorize]
        public IActionResult GetGold(int pId)
        {
            return Ok(_gold.GetId(pId));
        }

        [HttpPost]
        [Authorize]
        public IActionResult Add([FromBody] GoldDataModel model)
        {
            model.CreatedBy = GetCurrentUser(HttpContext).Id;

            return Ok(_gold.Add(model));
        }

        [HttpPut]
        [Authorize]
        public IActionResult Update([FromBody] GoldDataModel model)
        {
            model.CreatedBy = GetCurrentUser(HttpContext).Id;

            return Ok(_gold.Update(model));
        }

        [HttpDelete]
        [Authorize]
        public IActionResult Delete(int pId)
        {
            return Ok(_gold.Delete(pId));
        }
    }
}