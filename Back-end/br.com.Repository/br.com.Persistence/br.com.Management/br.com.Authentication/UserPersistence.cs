using br.com.DAL.br.com.Library;
using br.com.DAL.br.com.Infra;
using br.com.DAL.br.com.Model.br.com.Management.br.com.Authentication;
using br.com.DAL.br.com.Repository.br.com.Library;
using br.com.Model.br.com.Model.br.com.Management.br.com.Library;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using br.com.DAL.br.com.Interface.br.com.Management.br.com.User;

namespace br.com.DAL.br.com.Persistence.br.com.Management.br.com.Authentication
{
    public abstract class UserPersistence
    {
        DataTable userTable = new DataTable();
        string commandSQL;
        int i;

        protected internal List<User> PersistenceSearch(string command, Connection connection)
        {
            List<User> list = new List<User>();

            commandSQL = String.Format(
              "select " +
                "FUN.ID_USER," +
                "FUN.NAME," +
                "FUN.EMAIL," +
                "FUN.PASSWORD," +
                "FUN.AVATAR," +
                "FUN.STATUS, " +
                "FUN.FIRST_ACCESS, " +
                "FUN.ADMINISTRATOR " +
              "from " +
                "AUTHENTICATION_USER FUN " + command);

            userTable = connection.ExecuteConsultation(commandSQL);

            for (i = 0; i < userTable.Rows.Count; i++)
            {
                User usuario = new User();
                usuario.idUser = userTable.Rows[i]["ID_USER"].GetHashCode();
                usuario.name = userTable.Rows[i]["NAME"].ToString();
                usuario.email = userTable.Rows[i]["EMAIL"].ToString();
                usuario.password = userTable.Rows[i]["PASSWORD"].ToString();
                usuario.avatar = userTable.Rows[i]["AVATAR"].ToString();
                usuario.status = userTable.Rows[i]["STATUS"].GetHashCode();
                usuario.firstAccess = userTable.Rows[i]["FIRST_ACCESS"].ToString();
                usuario.administrator = userTable.Rows[i]["ADMINISTRATOR"].ToString();
                usuario.licenceValid = "S";

                list.Add(usuario);
            }

            return list;
        }

        protected internal WebError PersistenceCheckLogin(Connection connection, User user)
        {
            WebError result = new WebError();
            result.occurredError = false;

            commandSQL = String.Format(
              "select " +
                "FUN.EMAIL," +
                "FUN.PASSWORD, " +
                "FUN.STATUS " +
              "from " +
                "AUTHENTICATION_USER FUN " + "where FUN.EMAIL = '" + user.email + "'");

            userTable = connection.ExecuteConsultation(commandSQL);

            if (userTable.Rows.Count > 0)
            {
                if (userTable.Rows[0]["STATUS"].GetHashCode() == 0)
                {
                    result.occurredError = true;
                    result.message = "Usuário bloqueado. Entre em contato com nosso suporte.";
                }

                if (userTable.Rows[0]["PASSWORD"].ToString() != user.password)
                {
                    result.occurredError = true;
                    result.message = "Usuário ou senha incorreto.!";
                }

                if (userTable.Rows[0]["EMAIL"].ToString() != user.email)
                {
                    result.occurredError = true;
                    result.message = "Usuário ou senha incorreto.!";
                }
            }
            else
            {
                result.occurredError = true;
                result.message = "Usuário não encontrado!";
            }

            return result;
        }
    }
}
