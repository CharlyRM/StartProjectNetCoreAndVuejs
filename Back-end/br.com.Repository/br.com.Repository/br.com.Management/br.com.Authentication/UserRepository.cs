using br.com.DAL.br.com.Model.br.com.Management.br.com.Authentication;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using br.com.DAL.br.com.Infra;
using br.com.DAL.br.com.Persistence.br.com.Management.br.com.Authentication;
using br.com.DAL.br.com.Interface.br.com.Management.br.com.User;
using br.com.Model.br.com.Model.br.com.Management.br.com.Library;
using br.com.DAL.br.com.Library;
using br.com.DAL.br.com.Repository.br.com.Library;
using Microsoft.Extensions.Configuration;

namespace br.com.DAL.br.com.Repository.br.com.Management.br.com.Authentication
{
    public class UserRepository : UserPersistence, IUser<User>
    {
        Connection connection = new Connection();
        string command;

        public WebError CheckLogin(User user)
        {
            WebError process = new WebError();
            process.occurredError = false;

            try
            {
                connection.OpenTransaction();
                process = PersistenceCheckLogin(connection, user);      
            }
            catch (Exception ex)
            {
                process.occurredError = true;
                process.message = "Ocorreu um erro ao iniciar a sessão.";
            }
            finally
            {
                connection.CloseConnection();
            }

            return process;
        }

        public List<User> SearchUser(string filter, string key)
        {
            List<User> list = new List<User>();
            command = "";

            try
            {
                connection.OpenConnection();

                if (key != "" && filter != "NEN")
                {
                    if (filter == "COD") // Search by user code
                    {
                        command = "where FUN.ID_USER = " + key;
                    }
                    else if (filter == "NAM") // Search by name
                    {
                        command = "where FUN.NAME = '" + key + "'";
                    }
                    else if (filter == "EML") // Search by email
                    {
                        command = "where FUN.EMAIL = '" + key + "'";
                    }
                }

                list = PersistenceSearch(command, connection);

                return list;
            }
            catch (Exception ex)
            {
                throw ex;
            }
            finally
            {
                connection.CloseConnection();
            }
        }
    }
}
