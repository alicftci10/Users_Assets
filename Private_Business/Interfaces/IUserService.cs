using Private_DataAccess.DBModels;
using Private_Entities.DataModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Private_Business.Interfaces
{
    public interface IUserService
    {
        UserDataModel LoginUser(UserDataModel model);

        List<UserDataModel> GetUserList();

        User GetId(int pId);

        int Add(UserDataModel item);

        int Update(UserDataModel item);

        User Delete(int pId);
    }
}