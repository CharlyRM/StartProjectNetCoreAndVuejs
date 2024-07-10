using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace br.com.DAL.br.com.Model.br.com.Management.br.com.Authentication
{
    public class User
    {
        public User() { }

        public User(
             int idUser,
             string name,
             string email,
             string password,
             string newPassword,
             string avatar,
             int status,
             string firstAccess, 
             string administrator,
             string alterPassword, 
             string codigoRecuperacaoSenha, 
             string singleCode, 
             string emailConfirmed, 
             string dateHourExpiration,
             string recoveryPassword,
             string licenceValid,
             string licenceTrial, 
             string dateLicenceExpiration, 
             string paymentConfirmed)
        {
            this.idUser = idUser;
            this.name = name;
            this.email = email;
            this.password = password;
            this.newPassword = newPassword;
            this.avatar = avatar;
            this.status = status;
            this.firstAccess = firstAccess;
            this.administrator = administrator;
            this.alterPassword = alterPassword;
            this.codigoRecuperacaoSenha = codigoRecuperacaoSenha;
            this.singleCode = singleCode;
            this.emailConfirmed = emailConfirmed;
            this.dateHourExpiration = dateHourExpiration;
            this.recoveryPassword = recoveryPassword;
            this.licenceValid = licenceValid;
            this.licenceTrial = licenceTrial;
            this.dateLicenceExpiration = dateLicenceExpiration;
            this.paymentConfirmed = paymentConfirmed;
        }

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
        public virtual string licenceValid { get; set; }
        public virtual string licenceTrial { get; set; }
        public virtual string dateLicenceExpiration { get; set; }
        public virtual string paymentConfirmed { get; set; }
    }
}
