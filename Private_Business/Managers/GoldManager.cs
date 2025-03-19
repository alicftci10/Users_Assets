using Private_Business.Interfaces;
using Private_DataAccess.DBModels;
using Private_DataAccess.EFInterfaces;
using Private_Entities.DataModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Private_Business.Managers
{
    public class GoldManager : BaseManager, IGoldService
    {
        private readonly IEFGoldRepository _GoldRepository;
        public GoldManager(IEFGoldRepository GoldRepository)
        {
            _GoldRepository = GoldRepository;
        }

        private Gold GetDataModel(GoldDataModel model)
        {
            Gold item = new Gold();

            item.GoldAmount = model.GoldAmount.Value;
            item.Price = model.Price.Value;
            item.OneGrGoldPrice = model.OneGrGoldPrice.Value;
            item.CreatedBy = model.CreatedBy.Value;

            if (model.Id > 0)
            {
                item.Id = model.Id;
                item.CreatedAt = model.CreatedAt.Value;
            }
            else
            {
                item.CreatedAt = DateTime.Now;
            }

            return item;
        }

        public List<GoldDataModel> GetUserGoldList(int pUserId)
        {
            return _GoldRepository.GetUserGoldList(pUserId);
        }

        public Gold GetId(int pId)
        {
            return _GoldRepository.GetSelect(pId);
        }

        public int Add(GoldDataModel model)
        {
            return _GoldRepository.Add(GetDataModel(model)).Id;
        }

        public int Update(GoldDataModel model)
        {
            return _GoldRepository.Update(GetDataModel(model)).Id;
        }

        public Gold Delete(int pId)
        {
            return _GoldRepository.Delete(pId);
        }
    }
}
