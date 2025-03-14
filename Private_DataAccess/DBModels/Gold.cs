using System;
using System.Collections.Generic;

namespace Private_DataAccess.DBModels;

public partial class Gold
{
    public int Id { get; set; }

    public decimal GoldAmount { get; set; }

    public decimal Price { get; set; }

    public decimal OneGrGoldPrice { get; set; }

    public DateTime CreatedAt { get; set; }

    public int CreatedBy { get; set; }

    public virtual User CreatedByNavigation { get; set; } = null!;
}
