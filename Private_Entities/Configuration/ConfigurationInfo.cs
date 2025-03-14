﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Private_Entities.Configuration
{
    public static class ConfigurationInfo
    {
        public static string ApiUrl { get; set; }
        public static string ConnectionString { get; set; }
        public static string ResimFolderUrl { get; set; }
        public static string FileUploadFolderUrl { get; set; }

        /// <summary>
        /// Dakika
        /// </summary>
		public static int MemoryCacheTimeOut { get; set; }
    }
}
