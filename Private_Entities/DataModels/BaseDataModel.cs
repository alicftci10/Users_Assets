﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Private_Entities.DataModels
{
    public abstract class BaseDataModel
    {
        public int Id { get; set; }
        public DateTime? CreatedAt { get; set; }
        public int? CreatedBy { get; set; }

        public bool IsSuccess { get; set; }

        public string? CreatedByName { get; set; }

        public int? Count { get; set; }
    }
}
