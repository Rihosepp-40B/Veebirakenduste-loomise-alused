using FullStackReact.Server.Domain;
using Microsoft.EntityFrameworkCore;

namespace FullStackReact.Server.Data
{
    public class PlanetContext : DbContext
    {
        public PlanetContext(DbContextOptions<PlanetContext> option) : base(option)  // constructor
        { }

        public DbSet<Planets> Planets { get; set; }


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Planets>().ToTable("Planets");
        }

    }
}
