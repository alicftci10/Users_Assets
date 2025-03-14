using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using Private_Entities.DataModels;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace Private_WebApi.Controllers
{
    [ApiController]
    public abstract class BaseApiController : ControllerBase
    {
        internal string GenerateJwtToken(UserDataModel model)
        {
            var key = Encoding.UTF8.GetBytes("UCi9U2H{53(1RePt{Cwc8H9B>5q%rHkS");
            SymmetricSecurityKey symmetricSecurityKey = new SymmetricSecurityKey(key);

            JwtSecurityToken jwt = new JwtSecurityToken(
                    issuer: "PrivateJWTIssuer",
                    audience: "PrivateJWTAudience",
                    claims: new List<Claim>
                    {
                        new Claim("UserName",model.UserName),
                        new Claim("FullName", model.Name + " " + model.Surname),
                        new Claim("Id", model.Id.ToString())
                    },
                    notBefore: DateTime.UtcNow,
                    expires: DateTime.UtcNow.Add(TimeSpan.FromHours(6)),
                    signingCredentials: new SigningCredentials(symmetricSecurityKey, SecurityAlgorithms.HmacSha256)
                );

            var jwtToken = new JwtSecurityTokenHandler().WriteToken(jwt);

            return jwtToken;
        }

        internal UserDataModel GetCurrentUser(HttpContext context)
        {
            UserDataModel model = new UserDataModel();
            var token = context.Request.Headers["Authorization"].ToString().Replace("Bearer ", "");
            SecurityToken securityToken = new JwtSecurityTokenHandler().ReadToken(token);

            if (securityToken != null)
            {
                JwtSecurityToken jwt = securityToken as JwtSecurityToken;

                if (jwt != null)
                {
                    var FullName = model.Name + " " + model.Surname;

                    model.UserName = jwt.Payload["UserName"].ToString();
                    FullName = jwt.Payload["FullName"].ToString();
                    model.Id = Convert.ToInt32(jwt.Payload["Id"]);
                }
            }

            return model;
        }
    }
}
