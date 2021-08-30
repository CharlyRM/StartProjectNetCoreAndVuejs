using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using br.com.DAL.br.com.Model.br.com.Management.br.com.Authentication;
using br.com.DAL.br.com.Repository.br.com.Library;
using br.com.DAL.br.com.Repository.br.com.Management.br.com.Authentication;
using br.com.DAL.br.com.Validation;
using br.com.Model.br.com.Model.br.com.Management.br.com.Library;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

/*
    Developer Linkedin Inglish : https://br.linkedin.com/in/charly-milhomem-76156637/en
    Developer Linkedin Português : https://br.linkedin.com/in/charly-milhomem-76156637
*/

namespace br.com.API.br.com.Controllers.br.com.Authentication
{
    [Route("api/[controller]")]
    public class UserController : Controller
    {
        List<User> listUser;
        UserRepository userRepository = new UserRepository();

        // GET: api/<controller>
        [HttpGet("GetUser")]
        public IActionResult Get()
        {
            try
            {
                listUser = userRepository.SearchUser("NEN", "");

                if (listUser == null)
                {
                    return NotFound(new
                    {
                        msg = "No users found!"
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
                    msg = "There was an error fetching users."
                });
            }
        }

        // GET api/<controller>
        [HttpGet("GetUserId")]
        public IActionResult Get(int idUser)
        {
            try
            {
                listUser = userRepository.SearchUser("COD", Convert.ToString(idUser));

                if (listUser == null)
                {
                    return NotFound(new
                    {
                        msg = "The user was not found."
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
                    msg = "There was an error fetching the user."
                });
            }
        }

        // POST api/<controller>
        [HttpPost("SaveUser")]
        public IActionResult Post([FromBody] User user)
        {
            WebError result = new WebError();
            result.occurredError = false;

            if (!ValidationEmail.ValidationAddressEmail(user.email))
            {
                return NotFound(new
                {
                    msg = "Invalid email."
                });
            }

            user.firstAccess = "N";
            user.status = 1;

            result = userRepository.RecordUser(user);

            if (!result.occurredError)
            {
                return Ok();
            }
            else
            {
                return NotFound(new
                {
                    msg = result.message
                });
            }
        }

        // PUT api/<controller>/5
        [HttpPut("SaveChangeUser")]
        public IActionResult Put([FromBody]User user)
        {
            WebError result = new WebError();
            result.occurredError = false;

            result = userRepository.RecordUser(user);

            if (!result.occurredError)
            {
                return Ok();
            }
            else
            {
                return NotFound(new
                {
                    msg = result.message
                });
            }
        }

        // DELETE api/<controller>/5
        [HttpDelete("DeleteUser")]
        public IActionResult Delete(int idUser)
        {
            WebError result = new WebError();
            result.occurredError = false;

            if (idUser <= 0)
                return NotFound(new
                {
                    msg = "User ID must be selected."
                });

            userRepository.DeleteUser(Convert.ToString(idUser));

            if (!result.occurredError)
            {
                return Ok();
            }
            else
            {
                return NotFound(new
                {
                    msg = "There was an error deleting the user."
                });
            }
        }

        [HttpGet("GetInfoUserLogin")]
        public IActionResult GetInfoUserLogin(string email)
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
                    intro = listUser[0].name,
                    user = listUser[0]
                });
            }
            else
            {
                return NotFound(new
                {
                    msg = "It was not possible to verify the user's identity."
                });
            }
        }
    }
}
