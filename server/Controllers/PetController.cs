
using Microsoft.AspNetCore.Mvc; 
using HelloWorld.Models;
using Microsoft.EntityFrameworkCore;

namespace HelloWorld.Controllers;

[Route("api/[controller]")]     
[ApiController]
public class PetController : ControllerBase     
{        
    private readonly PetContext _context;
          
    public PetController(PetContext context)         
    {
        _context = context;
    }

    // GET: api/pet/5
    [HttpGet("{id}")]
    public async Task<ActionResult<Pet>> GetPet(int id)
    {
        var pet = await _context.Pets.FindAsync(id);

        if (pet == null)
        {
            return NotFound();
        }

        return pet;
    }
}
