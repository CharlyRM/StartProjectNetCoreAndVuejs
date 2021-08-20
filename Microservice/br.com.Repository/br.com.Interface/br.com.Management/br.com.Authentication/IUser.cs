using br.com.DAL.br.com.Model.br.com.Management.br.com.Authentication;
using br.com.Model.br.com.Model.br.com.Management.br.com.Library;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

/*
    Developer Linkedin Inglish : https://br.linkedin.com/in/charly-milhomem-76156637/en
    Developer Linkedin Português : https://br.linkedin.com/in/charly-milhomem-76156637
*/

namespace br.com.DAL.br.com.Interface.br.com.Management.br.com.User
{
    interface IUser<User>
    {
        WebError RecordUser(User user);

        WebError SaveUserFirstAccess(User user);

        WebError RecordUserTemp(User user);

        WebError CheckLogin(User user);

        List<User> SearchUser(string filter, string key);

        List<User> SearchUserTemp(string filter, string key);

        void DeleteUser(string id);

        WebError RecoverUserPassword(User user);

        WebError RecordConfirmationEmailRegister(string token);
    }
}
