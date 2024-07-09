using Microsoft.EntityFrameworkCore;

namespace HelloWorld.Models;
    
public class UserContext : DbContext
{
    public UserContext(DbContextOptions<UserContext> contextOptions) 
        : base(contextOptions) {  }

    public DbSet<User> Users { get; set; }
}

