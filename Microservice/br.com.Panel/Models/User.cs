using Microsoft.AspNetCore.Identity;

/*
    Developer Linkedin Inglish : https://br.linkedin.com/in/charly-milhomem-76156637/en
    Developer Linkedin Português : https://br.linkedin.com/in/charly-milhomem-76156637
*/

namespace br.com.Painel.Models
{
    public class User : IdentityUser
    {
        public string Company { get; set; }
    }
}
