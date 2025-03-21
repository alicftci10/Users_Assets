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
        public HomeDataModel getHomeList(int pId)
        {
            using (PrivateContext db = new PrivateContext())
            {
                HomeDataModel model = new HomeDataModel();

                model.goldList = db.Golds.Where(i => i.CreatedBy == pId).Select(i => new GoldDataModel
                {
                    Id = i.Id,
                    GoldAmount = i.GoldAmount,
                    Price = i.Price,
                    OneGrGoldPrice = i.OneGrGoldPrice,
                    CreatedAt = i.CreatedAt,
                    CreatedBy = i.CreatedBy
                }).ToList();

                model.totalCost = model.goldList.Where(i=>i.GoldAmount>0).Select(i=>i.GoldAmount).Sum();

                model.totalGoldValue = model.goldList.Select(i => i.GoldAmount).Sum();

                return model;
            }
        }
    }
}
