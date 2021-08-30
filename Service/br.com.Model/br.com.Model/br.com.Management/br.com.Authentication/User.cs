using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

/*
    Developer Linkedin Inglish : https://br.linkedin.com/in/charly-milhomem-76156637/en
    Developer Linkedin Português : https://br.linkedin.com/in/charly-milhomem-76156637
*/

namespace br.com.DAL.br.com.Model.br.com.Management.br.com.Authentication
{
    public class User
    {
        public virtual int idUser { get; set; }
        public virtual string name { get; set; }
        public virtual string email { get; set; }
        public virtual string password { get; set; }
        public virtual string newPassword { get; set; }
        public virtual string avatar { get; set; }
        public virtual int status { get; set; }
        public virtual string firstAccess { get; set; }
        public virtual string administrator { get; set; }
        public virtual string alterPassword { get; set; }
        public virtual string codigoRecuperacaoSenha { get; set; }
        public virtual string singleCode { get; set; }
        public virtual string emailConfirmed { get; set; }
        public virtual string dateHourExpiration { get; set; }
        public virtual string recoveryPassword { get; set; }
    }
}
