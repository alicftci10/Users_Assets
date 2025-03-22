using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Private_Entities.DataModels
{
    public class HomeDataModel : BaseDataModel
    {
        public List<GoldDataModel>? goldList { get; set; }

        public GoldDataModel? getGold { get; set; }

        public decimal? currentGoldValue { get; set; }

        public decimal? currentGoldPrice { get; set; }

        public decimal? totalGoldBuyingPrice { get; set; }

        public decimal? totalGoldSellingPrice { get; set; }

        public decimal? totalCost { get; set; }

        public decimal? currentProfitorLoss { get; set; }
    }
}
