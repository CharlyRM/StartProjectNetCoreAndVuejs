using System;
using System.Collections.Generic;
using br.com.DAL.br.com.Model.br.com.Management.br.com.Authentication;
using br.com.DAL.br.com.Repository.br.com.Management.br.com.Authentication;
using br.com.DAL.br.com.Validation;
using br.com.Model.br.com.Model.br.com.Management.br.com.Library;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Text;
using Microsoft.Extensions.Configuration;
using System.Net.Http;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace br.com.API.Controllers.br.com.Authentication
{
    [Authorize]
    [Route("api/[controller]")]
    public class UserController : Controller
    {
        List<User> listUser;
        UserRepository userRepository = new UserRepository();

        private IConfiguration _config;
        public UserController(IConfiguration Configuration)
        {
            _config = Configuration;
        }

        // GET: api/<controller>
        [HttpGet("getUser")]
        public IActionResult Get()
        {
            try
            {
                listUser = userRepository.SearchUser("NEN", "");

                if (listUser == null)
                {
                    return NotFound(new
                    {
                        msg = "Usuários não encontrados!"
                    });
                }
                else
                {
                    return Json(new
                    {
                        Users = listUser
                    });
                }
            }
            catch (Exception ex)
            {
                return NotFound(new
                {
                    msg = "Ocorreu um erro ao buscar usuários."
                });
            }
        }

        // GET api/<controller>
        [HttpGet("getUserId")]
        public IActionResult GetUserId(int idUser)
        {
            try
            {
                listUser = userRepository.SearchUser("COD", Convert.ToString(idUser));

                if (listUser == null)
                {
                    return NotFound(new
                    {
                        msg = "O usuário não foi encontrado."
                    });
                }
                else
                {
                    return Json(listUser);
                }
            }
            catch (Exception ex)
            {
                return NotFound(new
                {
                    msg = "Ocorreu um erro ao buscar o usuário."
                });
            }
        }

        [HttpGet("getInfoUserLogin")]
        public IActionResult GetInfoUserLogin(String email)
        {
            listUser = userRepository.SearchUser("EML", email);

            if (listUser.Count > 0)
            {
                listUser[0].password = "";

                return Json(new
                {
                    listUser[0].idUser,
                    listUser[0].administrator,
                    listUser[0].name,
                    listUser[0].avatar,
                    listUser[0].dateLicenceExpiration,
                    listUser[0].licenceTrial,
                    listUser[0].licenceValid,
                    listUser[0].paymentConfirmed,
                    listUser[0].firstAccess,
                    intro = listUser[0].name,
                    user = listUser[0]
                });
            }
            else
            {
                return NotFound(new
                {
                    msg = "Não foi possível verificar a identidade do usuário."
                });
            }
        }

        [AllowAnonymous]
        [HttpGet("userLogin")]
        public IActionResult UserLogin(String username, String password)
        {
            User usuario = new User();
            usuario.email = username;
            usuario.password = password;

            WebError result = new WebError();
            result.occurredError = false;

            result = userRepository.CheckLogin(usuario);

            if (!result.occurredError)
            {
                result = GenerateTokenJWT();

                if (!result.occurredError)
                {
                    return Ok(new { access_token = result.parameter });
                }
                else
                {
                    return NotFound(new
                    {
                        msg = result.message
                    });
                }
            }
            else
            {
                return NotFound(new
                {
                    msg = result.message
                });
            }
        }

        private WebError GenerateTokenJWT()
        {
            WebError process = new WebError();
            process.occurredError = false;
            try
            {
                var issuer = _config["Jwt:Issuer"];
                var audience = _config["Jwt:Audience"];
                var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config["Jwt:Key"]));
                var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);

                var token = new JwtSecurityToken(issuer: issuer, audience: audience,
                expires: DateTime.Now.AddDays(7), signingCredentials: credentials);

                var tokenHandler = new JwtSecurityTokenHandler();
                var stringToken = tokenHandler.WriteToken(token);
                process.parameter = stringToken;
            }
            catch (Exception ex)
            {
                process.occurredError = true;
                process.message = "Ocorreu um problema ao gerar o token de acesso.";
            }

            return process;
        }
    }
}
