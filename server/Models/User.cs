using System.ComponentModel.DataAnnotations.Schema;

namespace HelloWorld.Models;

[Table("users")]
public class User
{
    [System.ComponentModel.DataAnnotations.Key]
    [Column("id")] 
    public int Id { get; internal set; }

    [Column("firstname")]
    public string FirstName { get; internal set; }

    [Column("lastname")] 
    public string LastName { get; internal set; }

    [Column("birthdate")]
    public DateTime? Birthdate { get; internal set; }
}

