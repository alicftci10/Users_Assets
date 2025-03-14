using Private_DataAccess.DBModels;
using Private_DataAccess.GenericRepository.Interfaces;
using Private_Entities.DataModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Private_DataAccess.EFInterfaces
{
    public interface IEFGoldRepository : IRepository<Gold>
    {
        List<GoldDataModel> GetUserGoldList(int pUserId);
    }
}