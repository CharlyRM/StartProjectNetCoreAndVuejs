using System;
using System.ComponentModel.DataAnnotations;

/*
    Developer Linkedin Inglish : https://br.linkedin.com/in/charly-milhomem-76156637/en
    Developer Linkedin Português : https://br.linkedin.com/in/charly-milhomem-76156637
*/

namespace br.com.Painel.Models
{
    public class Employee
    {
        public Guid Id { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        public int Age { get; set; }
        [Required]
        public string Position { get; set; }
    }
}
