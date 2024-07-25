using Microsoft.EntityFrameworkCore;

namespace HelloWorld.Models;
    
public class PetContext : DbContext
{
    public PetContext(DbContextOptions<PetContext> contextOptions) 
        : base(contextOptions) {  }

    public DbSet<Pet> Pets { get; set; }
}

