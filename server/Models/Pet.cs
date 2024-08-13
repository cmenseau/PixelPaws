using System.ComponentModel.DataAnnotations.Schema;

namespace HelloWorld.Models;

[Table("pets")]
public class Pet
{
    [System.ComponentModel.DataAnnotations.Key]
    [Column("id")] 
    public int Id { get; set; }

    [Column("name")]
    public string Name { get; set; }

    [Column("type")] 
    public string Type { get; set; }

    [Column("colour")]
    public string Colour { get; set; }

    [Column("userid")] 
    public int UserId { get; set; }

    public User User {get; set;} = null!;
}

