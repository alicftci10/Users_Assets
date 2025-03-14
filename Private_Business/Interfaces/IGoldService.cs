using Private_DataAccess.DBModels;
using Private_Entities.DataModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Private_Business.Interfaces
{
    public interface IGoldService
    {
        List<GoldDataModel> GetUserGoldList(int pUserId);

        Gold GetId(int pId);

        int Add(GoldDataModel item);

        int Update(GoldDataModel item);

        Gold Delete(int pId);
    }
}
