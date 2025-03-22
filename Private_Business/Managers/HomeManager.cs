using Private_Business.Interfaces;
using Private_DataAccess.EFOperations;
using Private_Entities.DataModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Private_Business.Managers
{
    public class HomeManager:BaseManager,IHomeService
    {
        public HomeManager() { }

        public HomeDataModel getHomeGoldList(decimal currentGoldSelling,HomeDataModel model)
        {
            return new EFHome().getHomeGoldList(currentGoldSelling,model);
        }
    }
}
