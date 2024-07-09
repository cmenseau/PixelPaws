
using Microsoft.AspNetCore.Mvc; 
using HelloWorld.Models;
using Microsoft.EntityFrameworkCore;

namespace HelloWorld.Controllers;

[Route("api/[controller]")]     
[ApiController]     
public class UserController : ControllerBase     
{        
    private readonly UserContext _context;
          
    public UserController(UserContext context)         
    {
        _context = context;
    }

    // GET: api/user
    [HttpGet]
    public async Task<ActionResult<List<User>>> GetAll()
    {
        return await _context.Users
            .ToListAsync();
    }

    // GET: api/user/name/
    // curl http://localhost:5000/api/user/name/michael
    [HttpGet("name/{name}")]
    public async Task<ActionResult<List<User>>> GetUserByName(string name)
    {
            return await Task.FromResult(_context.Users.Where(b => b.FirstName == name || b.LastName == name).ToList());
    }
}
