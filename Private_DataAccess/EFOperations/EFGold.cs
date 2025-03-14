using Private_DataAccess.DBContext;
using Private_DataAccess.DBModels;
using Private_DataAccess.EFInterfaces;
using Private_DataAccess.GenericRepository.Repository;
using Private_Entities.DataModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Private_DataAccess.EFOperations
{
    public class EFGold : GenericRepository<Gold>, IEFGoldRepository
    {
        public EFGold(PrivateContext PrivateContext) : base(PrivateContext) { }

        public List<GoldDataModel> GetUserGoldList(int pUserId)
        {
            using (PrivateContext db = new PrivateContext())
            {
                var userGoldList = db.Golds.Where(i => i.CreatedBy == pUserId).Select(i => new GoldDataModel
                {
                    Id = i.Id,
                    GoldAmount = i.GoldAmount,
                    Price = i.Price,
                    OneGrGoldPrice = i.OneGrGoldPrice,
                    CreatedBy = i.CreatedBy,
                    CreatedAt = i.CreatedAt,
                    CreatedByFullName = db.Users.Where(i=>i.Id == pUserId).Select(i=>i.Name + " " + i.Surname).FirstOrDefault()
                }).ToList();

                if (userGoldList != null)
                {
                    return userGoldList;
                }

                return new List<GoldDataModel>();
            }
        }
    }
}