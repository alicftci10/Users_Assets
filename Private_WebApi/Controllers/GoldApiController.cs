﻿using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Private_Business.Interfaces;
using Private_Entities.DataModels;

namespace Private_WebApi.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class GoldApiController : BaseApiController
    {
        private readonly IGoldService _goldService;
        public GoldApiController(IGoldService goldService)
        {
            _goldService = goldService;
        }

        [HttpGet]
        [Authorize]
        public IActionResult GetUserGoldList()
        {
            return Ok(_goldService.GetUserGoldList(GetCurrentUser(HttpContext).Id));
        }

        [HttpGet]
        [Authorize]
        public IActionResult GetGold(int pId)
        {
            return Ok(_goldService.GetId(pId));
        }

        [HttpPost]
        [Authorize]
        public IActionResult Add([FromBody] GoldDataModel model)
        {
            model.CreatedBy = GetCurrentUser(HttpContext).Id;

            return Ok(_goldService.Add(model));
        }

        [HttpPut]
        [Authorize]
        public IActionResult Update([FromBody] GoldDataModel model)
        {
            model.CreatedBy = GetCurrentUser(HttpContext).Id;

            return Ok(_goldService.Update(model));
        }

        [HttpDelete]
        [Authorize]
        public IActionResult Delete(int pId)
        {
            return Ok(_goldService.Delete(pId));
        }
    }
}