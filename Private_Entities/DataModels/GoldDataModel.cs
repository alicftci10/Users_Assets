using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Private_Entities.DataModels
{
    public class GoldDataModel : BaseDataModel
    {
        public decimal? GoldAmount { get; set; }

        public decimal? Price { get; set; }

        public decimal? OneGrGoldPrice { get; set; }

        public decimal? TotalGoldAmount { get; set; }

        public decimal? TotalPrice { get; set; }
    }
}
