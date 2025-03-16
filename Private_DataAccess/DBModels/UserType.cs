using System;
using System.Collections.Generic;

namespace Private_DataAccess.DBModels;

public partial class UserType
{
    public int Id { get; set; }

    public string TypeName { get; set; } = null!;

    public DateTime CreatedAt { get; set; }

    public int CreatedBy { get; set; }

    public virtual User CreatedByNavigation { get; set; } = null!;

    public virtual ICollection<User> Users { get; set; } = new List<User>();
}
