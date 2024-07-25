using System.ComponentModel.DataAnnotations.Schema;

namespace HelloWorld.Models;

[Table("pets")]
public class Pet
{
    [System.ComponentModel.DataAnnotations.Key]
    [Column("id")] 
    public int Id { get; internal set; }

    [Column("name")]
    public string Name { get; internal set; }

    [Column("type")] 
    public string Type { get; internal set; }

    [Column("colour")]
    public string Colour { get; internal set; }
}

