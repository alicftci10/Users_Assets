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
    public class UserManager : BaseManager, IUserService
    {
        private readonly IEFUserRepository _UserRepository;
        public UserManager(IEFUserRepository UserRepository)
        {
            _UserRepository = UserRepository;
        }

        public UserDataModel LoginUser(UserDataModel model)
        {
            User kul = _UserRepository.LoginUser(model);

            model.Id = kul.Id;
            model.Name = kul.Name;
            model.Surname = kul.Surname;
            model.UserName = kul.UserName;
            model.Password = kul.Password;
            model.CreatedAt = kul.CreatedAt;
            model.CreatedBy = kul.CreatedBy;

            return model;
        }

        private User GetDataModel(UserDataModel model)
        {
            User item = new User();

            item.Name = model.Name;
            item.Surname = model.Surname;
            item.UserName = model.UserName;
            item.Password = model.Password;
            item.CreatedAt = DateTime.Now;
            item.CreatedBy = model.CreatedBy.Value;

            if (model.Id > 0)
            {
                item.Id = model.Id;
            }

            return item;
        }

        public User GetId(int pId)
        {
            return _UserRepository.GetSelect(pId);
        }

        public int Add(UserDataModel item)
        {
            return _UserRepository.Add(GetDataModel(item)).Id;
        }

        public int Update(UserDataModel item)
        {
            return _UserRepository.Update(GetDataModel(item)).Id;
        }

        public User Delete(int pId)
        {
            return _UserRepository.Delete(pId);
        }
    }
}