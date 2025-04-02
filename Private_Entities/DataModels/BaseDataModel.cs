using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Private_Entities.DataModels
{
    public abstract class BaseDataModel
    {
        public int Id { get; set; }

        public DateOnly? CreatedAt { get; set; }

        public int? CreatedBy { get; set; }

        public string? CreatedByFullName { get; set; }
    }
}
