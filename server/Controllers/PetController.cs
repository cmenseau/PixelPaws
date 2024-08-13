
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

    // POST: api/pet/new-pet
    [HttpPost("new-pet")]
    public async Task<ActionResult<Pet>> PostPet([FromBody]PetDto p)
    {
        var pet = new Pet
        {
            Name = p.name,
            Type = p.type,
            Colour = p.colour,
            UserId = p.userId,
        };
        
        var createdPet = await _context.Pets.AddAsync(pet);
        await _context.SaveChangesAsync();

        return CreatedAtAction(nameof(GetPet), new { id = createdPet.Entity.Id }, p);

    }
}
