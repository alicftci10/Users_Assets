using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Private_DataAccess.DBModels;
using Private_Entities.Configuration;

namespace Private_DataAccess.DBContext;

public partial class PrivateContext : DbContext
{
    public PrivateContext()
    {
    }

    public PrivateContext(DbContextOptions<PrivateContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Gold> Golds { get; set; }

    public virtual DbSet<User> Users { get; set; }

    public virtual DbSet<UserType> UserTypes { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        if (!optionsBuilder.IsConfigured)
        {
            string connectionString = ConfigurationInfo.ConnectionString;
            optionsBuilder.UseSqlServer(connectionString);
        }
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Gold>(entity =>
        {
            entity.ToTable("Gold");

            entity.Property(e => e.CreatedAt).HasColumnType("datetime");
            entity.Property(e => e.GoldAmount).HasColumnType("decimal(18, 2)");
            entity.Property(e => e.OneGrGoldPrice).HasColumnType("decimal(18, 2)");
            entity.Property(e => e.Price).HasColumnType("decimal(18, 2)");

            entity.HasOne(d => d.CreatedByNavigation).WithMany(p => p.Golds)
                .HasForeignKey(d => d.CreatedBy)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_Gold_User");
        });

        modelBuilder.Entity<User>(entity =>
        {
            entity.ToTable("User");

            entity.Property(e => e.CreatedAt).HasColumnType("datetime");
            entity.Property(e => e.Name).HasMaxLength(50);
            entity.Property(e => e.Password).HasMaxLength(50);
            entity.Property(e => e.Surname).HasMaxLength(50);
            entity.Property(e => e.UserName).HasMaxLength(50);

            entity.HasOne(d => d.UserType).WithMany(p => p.Users)
                .HasForeignKey(d => d.UserTypeId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_User_UserType");
        });

        modelBuilder.Entity<UserType>(entity =>
        {
            entity.ToTable("UserType");

            entity.Property(e => e.CreatedAt).HasColumnType("datetime");
            entity.Property(e => e.TypeName).HasMaxLength(50);

            entity.HasOne(d => d.CreatedByNavigation).WithMany(p => p.UserTypes)
                .HasForeignKey(d => d.CreatedBy)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_UserType_User");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
