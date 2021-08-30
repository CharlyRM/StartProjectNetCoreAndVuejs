using System.ComponentModel.DataAnnotations;

/*
    Developer Linkedin Inglish : https://br.linkedin.com/in/charly-milhomem-76156637/en
    Developer Linkedin Português : https://br.linkedin.com/in/charly-milhomem-76156637
*/

namespace br.com.Painel.Models
{
    public class UserRegistrationModel
    {
        [Required(ErrorMessage = "Company is necessary")]
        [DataType(DataType.Text)]
        public string Nome { get; set; }
        [Required(ErrorMessage = "Email is required")]
        [EmailAddress]
        public string Email { get; set; }

        [Required(ErrorMessage = "Password is required")]
        [DataType(DataType.Password)]
        public string Password { get; set; }

        [DataType(DataType.Password)]
        [Compare("Password", ErrorMessage = "The password and the confirmation password do not match.")]
        public string ConfirmPassword { get; set; }
    }
}
