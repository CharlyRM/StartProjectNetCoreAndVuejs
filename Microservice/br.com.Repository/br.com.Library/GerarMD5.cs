using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;

/*
    Developer Linkedin Inglish : https://br.linkedin.com/in/charly-milhomem-76156637/en
    Developer Linkedin Português : https://br.linkedin.com/in/charly-milhomem-76156637
*/

namespace br.com.DAL.br.com.Library
{
    public class GerarMD5
    {
        public static string GenerateHashMd5(string input)
        {
            MD5 md5Hash = MD5.Create();
            // Convert the String to an array of bytes, which is how the library works.
            byte[] data = md5Hash.ComputeHash(Encoding.UTF8.GetBytes(input));

            // A StringBuilder is created to recompose the string.
            StringBuilder sBuilder = new StringBuilder();

            // Loop to format each byte as a String in hexadecimal
            for (int i = 0; i < data.Length; i++)
            {
                sBuilder.Append(data[i].ToString("x2"));
            }

            return sBuilder.ToString();
        }
    }
}
