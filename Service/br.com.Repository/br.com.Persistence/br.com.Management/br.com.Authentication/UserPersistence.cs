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

/*
    Developer Linkedin Inglish : https://br.linkedin.com/in/charly-milhomem-76156637/en
    Developer Linkedin Português : https://br.linkedin.com/in/charly-milhomem-76156637
*/

namespace br.com.DAL.br.com.Persistence.br.com.Management.br.com.Authentication
{
    public abstract class UserPersistence
    {
        DataTable userTable = new DataTable();
        DataTable companyTable = new DataTable();
        string commandSQL;
        int i;

        protected internal void RecordUser(User user, Connection connection, bool alteration)
        {
            if (alteration)
            {
                commandSQL = String.Format(
                "update " +
                  "AUTHENTICATION_USER " +
                  "set " +
                  "NAME = '" + "{0}" + "'," +
                  "EMAIL = '" + "{1}" + "'," +
                  "STATUS = " + "{2}" + "," +
                  "FIRST_ACCESS = '" + "{3}" + "'," +
                  "ADMINISTRATOR = '" + "{4}" + "'," +
                  "AVATAR = '" + "{5}" + "'",
                   user.name,
                   user.email,
                   user.status,
                   user.firstAccess,
                   user.administrator,
                   user.avatar
                );

                commandSQL = commandSQL + " where ID_USUARIO = " + System.Convert.ToString(user.idUser);
                connection.RunsCommand(commandSQL);
            }
            else
            {
                user.idUser = GenerateSequenceUser(connection);

                commandSQL = String.Format(
                "insert " +
                  "into AUTHENTICATION_USER " +
                  "( " +
                  "ID_USER, " +
                  "NAME, " +
                  "EMAIL, " +
                  "PASSWORD, " +
                  "STATUS, " +
                  "FIRST_ACCESS, " +
                  "ADMINISTRATOR, " +
                  "AVATAR " +
                ") " +
                "VALUES( " +
                  "{0}" + "," +
                  "'" + "{1}" + "'," +
                  "'" + "{2}" + "'," +
                  "'" + "{3}" + "'," +
                  "{4}" + "," +
                  "'" + "{5}" + "'," +
                  "'" + "{6}" + "'," +
                  "'" + "{7}" + "'" +
                  " )",
                  user.idUser,
                  user.name,
                  user.email,
                  user.password,
                  user.status,
                  user.firstAccess,
                  user.administrator,
                  "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif"
                  );

                connection.RunsCommand(commandSQL);
            }
        }

        protected internal void RecordUserTemp(User user, Connection connection)
        {
            commandSQL = String.Format(
            "insert " +
              "into AUTHENTICATION_USER_TEMP " +
              "( " +
              "NAME, " +
              "EMAIL, " +
              "PASSWORD, " +
              "SINGLE_CODE, " +
              "PASSWORD_RECOVERY " +
            ") " +
            "VALUES( " +
              "'" + "{0}" + "'," +
              "'" + "{1}" + "'," +
              "'" + "{2}" + "'," +
              "'" + "{3}" + "'," +
              "'" + "{4}" + "'" +
              " )",
              user.name,
              user.email,
              user.password,
              user.singleCode,
              user.recoveryPassword
              );

            connection.RunsCommand(commandSQL);
        }

        protected internal void RecordChangePassword(User user, Connection connection)
        {
            commandSQL = String.Format(
            "update " +
              "AUTHENTICATION_USER " +
              "set " +
              "PASSWORD = " + user.password
            );

            commandSQL = commandSQL + " where ID_USER = " + System.Convert.ToString(user.idUser);
            connection.RunsCommand(commandSQL);
        }

        protected internal int GenerateSequenceCompany(Connection connection)
        {
            commandSQL = "SELECT nextval('register_company_id_seq')";
            companyTable = connection.ExecuteConsultation(commandSQL);

            DataRow id = companyTable.Rows[0];
            return id[0].GetHashCode();
        }

        protected internal void Delete(string id, Connection connection)
        {
            commandSQL = String.Format("delete " +
                "from " +
                "AUTHENTICATION_USER " +
                "where ID_USER = " + "{0}",
                id);
            connection.RunsCommand(commandSQL);
        }

        protected internal List<User> Search(string command, Connection connection)
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
                list.Add(usuario);
            }

            return list;
        }

        protected internal List<User> SearchUserTemp(string command, Connection connection)
        {
            List<User> list = new List<User>();

            commandSQL = String.Format(
              "select " +
                "FUN.ID_USER," +
                "FUN.NAME," +
                "FUN.EMAIL," +
                "FUN.PASSWORD," +
                "FUN.SINGLE_CODE," +
                "FUN.EMAIL_CONFIRMED, " +
                "FUN.EXPIRATION_TIME " +
              "from " +
                "AUTHENTICATION_USER_TEMP FUN " + command);

            userTable = connection.ExecuteConsultation(commandSQL);

            for (i = 0; i < userTable.Rows.Count; i++)
            {
                User user = new User();
                user.idUser = userTable.Rows[i]["ID_USER"].GetHashCode();
                user.name = userTable.Rows[i]["NAME"].ToString();
                user.email = userTable.Rows[i]["EMAIL"].ToString();
                user.password = userTable.Rows[i]["PASSWORD"].ToString();
                user.singleCode = userTable.Rows[i]["SINGLE_CODE"].ToString();
                user.emailConfirmed = userTable.Rows[i]["EMAIL_CONFIRMED"].ToString();
                user.dateHourExpiration = userTable.Rows[i]["EXPIRATION_TIME"].ToString();
                list.Add(user);
            }

            return list;
        }

        protected internal WebError CheckLogin(Connection connection, User user)
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
                if (userTable.Rows[0]["PASSWORD"].ToString() != GerarMD5.GenerateHashMd5(user.password))
                {
                    result.occurredError = true;
                    result.message = "Incorrect Email or Password!";
                }

                if (userTable.Rows[0]["EMAIL"].ToString() != user.email)
                {
                    result.occurredError = true;
                    result.message = "Incorrect Email or Password!";
                }
            }
            else
            {
                result.occurredError = true;
                result.message = "User not registered!";
            }

            return result;
        }

        public WebError CheckEmailNewUser(Connection connection, User user)
        {
            WebError result = new WebError();
            result.occurredError = false;

            commandSQL = String.Format(
              "select " +
                "FUN.EMAIL " +
              "from " +
                "AUTHENTICATION_USER FUN " + "where FUN.EMAIL = '" + user.email + "'");

            userTable = connection.ExecuteConsultation(commandSQL);

            if (userTable.Rows.Count > 0)
            {
                result.occurredError = true;
                result.message = "This email is already being used by another user!";
            }

            return result;
        }

        protected internal int GenerateSequenceUser(Connection connection)
        {
            commandSQL = "SELECT nextval('authentication_user_id_seq')";
            userTable = connection.ExecuteConsultation(commandSQL);

            DataRow id = userTable.Rows[0];
            return id[0].GetHashCode();
        }

        protected internal void WriteConfirmationEmail(Connection connection, string token)
        {
            commandSQL = String.Format(
            "update " +
              "AUTHENTICATION_USER_TEMP " +
              "set " +
              "EMAIL_CONFIRMED = 'S'"
            );

            commandSQL = commandSQL + " where SINGLE_CODE = " + token;
            connection.RunsCommand(commandSQL);
        }

        /* USER PASSWORD RECOVERY */

        protected internal void WriteRecovery(User user, Connection connection)
        {
            commandSQL = String.Format(
            "update " +
              "AUTHENTICATION_USER " +
              "set " +
              "PASSWORD = '" + user.password + "'"
            );

            commandSQL = commandSQL + " where EMAIL = '" + user.email + "'";
            connection.RunsCommand(commandSQL);
        }
    }
}
