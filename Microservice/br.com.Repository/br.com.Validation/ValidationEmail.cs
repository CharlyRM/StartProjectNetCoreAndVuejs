using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using SendGrid;
using System.Net;
using br.com.Model.br.com.Model.br.com.Management.br.com.Library;
using System.Net.Mail;
using System.Text.RegularExpressions;
using System.Collections;
using System.Net.Mime;
using br.com.DAL.br.com.Repository.br.com.Library;

/*
    Developer Linkedin Inglish : https://br.linkedin.com/in/charly-milhomem-76156637/en
    Developer Linkedin Português : https://br.linkedin.com/in/charly-milhomem-76156637
*/

namespace br.com.DAL.br.com.Validation
{
    public class ValidationEmail
    {
        public static bool ValidationAddressEmail(string addressEmail)
        {
            try
            {
                string textValidation = addressEmail;
                Regex regex = new Regex(@"\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}");

                if (regex.IsMatch(textValidation))
                {
                    return true;
                }
                else
                {
                    return false;
                }
            }
            catch (Exception)
            {
                throw;
            }
        }
    }
}