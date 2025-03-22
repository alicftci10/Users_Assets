using Private_DataAccess.DBContext;
using Private_Entities.DataModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Private_DataAccess.EFOperations
{
    public class EFHome
    {
        public HomeDataModel getHomeGoldList(decimal currentGoldSelling,HomeDataModel model)
        {
            using (PrivateContext db = new PrivateContext())
            {
                if (model.goldList != null)
                {
                    model.currentGoldValue = model.goldList.Select(i => i.GoldAmount).Sum();

                    model.currentGoldPrice = model.currentGoldValue * currentGoldSelling;

                    model.totalGoldBuyingPrice = model.goldList.Where(i => i.Price > 0).Select(i=>i.Price).Sum();

                    model.totalGoldSellingPrice = model.goldList.Where(i => i.Price < 0).Select(i => i.Price).Sum();

                    model.totalCost = model.totalGoldBuyingPrice + model.totalGoldSellingPrice;

                    model.currentProfitorLoss = model.currentGoldPrice - model.totalCost;

                    return model;
                }

               return new HomeDataModel();
            }
        }
    }
}
