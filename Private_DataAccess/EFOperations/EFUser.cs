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
    public class EFUser : GenericRepository<User>, IEFUserRepository
    {
        public EFUser(PrivateContext PrivateContext) : base(PrivateContext) { }

        public User LoginUser(UserDataModel model)
        {
            using (PrivateContext db = new PrivateContext())
            {
                var user = db.Users.FirstOrDefault(i => i.Password == model.Password && i.UserName == model.UserName);

                if (user != null)
                    return user;

                return new User();
            }
        }

        public List<UserDataModel> GetUserList()
        {
            using (PrivateContext db = new PrivateContext())
            {
                var user = db.Users.Select(i=>new UserDataModel
                {
                    Id = i.Id,
                    Name = i.Name,
                    Surname = i.Surname,
                    UserName = i.UserName,
                    Password = i.Password,
                    UserTypeId = i.UserTypeId,
                    CreatedAt = i.CreatedAt,
                    CreatedBy = i.CreatedBy

                }).ToList();

                if (user != null)
                    return user;

                return new List<UserDataModel>();
            }
        }
    }
}