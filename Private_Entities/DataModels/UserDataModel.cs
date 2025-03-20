using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Private_Entities.DataModels
{
    public class UserDataModel : BaseDataModel
    {
        public string? Name { get; set; }

        public string? Surname { get; set; }

        public string? UserName { get; set; }

        public string? Password { get; set; }

        public int? UserTypeId { get; set; }

        public DateTime? CreatedAt { get; set; }

        public string? JwtToken { get; set; }
    }
}
