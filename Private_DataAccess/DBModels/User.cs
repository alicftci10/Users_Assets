using System;
using System.Collections.Generic;

namespace Private_DataAccess.DBModels;

public partial class User
{
    public int Id { get; set; }

    public string Name { get; set; } = null!;

    public string Surname { get; set; } = null!;

    public string UserName { get; set; } = null!;

    public string Password { get; set; } = null!;

    public int UserTypeId { get; set; }

    public DateTime CreatedAt { get; set; }

    public int CreatedBy { get; set; }

    public virtual ICollection<Gold> Golds { get; set; } = new List<Gold>();

    public virtual UserType UserType { get; set; } = null!;

    public virtual ICollection<UserType> UserTypes { get; set; } = new List<UserType>();
}
