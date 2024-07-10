using br.com.DAL.br.com.Model.br.com.Management.br.com.Authentication;
using br.com.Model.br.com.Model.br.com.Management.br.com.Library;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace br.com.DAL.br.com.Interface.br.com.Management.br.com.User
{
    interface IUser<User>
    {

        WebError CheckLogin(User user);

        List<User> SearchUser(string filter, string key);
    }
}
