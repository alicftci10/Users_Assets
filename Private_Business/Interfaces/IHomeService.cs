using Private_Entities.DataModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Private_Business.Interfaces
{
    public interface IHomeService
    {
        HomeDataModel getHomeGoldList(decimal currentGoldSelling, HomeDataModel model);
    }
}
