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

/*
    Developer Linkedin Inglish : https://br.linkedin.com/in/charly-milhomem-76156637/en
    Developer Linkedin Português : https://br.linkedin.com/in/charly-milhomem-76156637
*/

namespace br.com.DAL.br.com.Repository.br.com.Management.br.com.Authentication
{
    public class UserRepository : UserPersistence, IUser<User>
    {
        Connection connection = new Connection();
        string command;

        public WebError RecordUser(User user)
        {
            WebError process = new WebError();
            process.occurredError = false;

            try
            {
                connection.OpenTransaction();

                if (user.idUser > 0)
                {
                    if (user.alterPassword == "S")
                    {
                        process = CheckLogin(connection, user);

                        if (user.newPassword.Length < 6)
                        {
                            process.occurredError = true;
                            process.message = "The new password must contain at least 6 characters.";
                            return process;
                        }

                        if (process.occurredError)
                        {
                            process.occurredError = true;
                            process.message = "The current password is incorrect.";
                            return process;
                        }

                        user.password = GerarMD5.GenerateHashMd5(user.newPassword);
                        RecordChangePassword(user, connection);
                    }
                  
                    RecordUser(user, connection, true);
                }
                else
                {
                    user.idUser = GenerateSequenceUser(connection);
                    user.password = GerarMD5.GenerateHashMd5(user.password);
                    RecordUser(user, connection, false);
                }

                connection.ConfirmTransaction();
            }
            catch (Exception ex)
            {
                connection.CancelTransaction();
                process.occurredError = true;
                process.message = "Error writing customer information.";
            }
            finally
            {
                connection.PrivacyPolicy();
            }

            return process;
        }

        public WebError SaveUserFirstAccess(User user)
        {
            WebError process = new WebError();
            process.occurredError = false;

            try
            {
                connection.OpenTransaction();
                user.firstAccess = "S"; // 1 = First access
                user.administrator = "S"; // 1 = Administrator registered
                user.status = 1;

                // Check if the registered email already exists
                process = CheckEmailNewUser(connection, user);

                if (!process.occurredError)
                {
                    user.password = user.password;
                    RecordUser(user, connection, false);
                    connection.ConfirmTransaction();
                }
            }
            catch (Exception ex)
            {
                process.occurredError = true;
                process.message = "There was an error registering the new customer";
                connection.CancelTransaction();
            }
            finally
            {
                connection.PrivacyPolicy();
            }

            return process;
        }

        public WebError RecordUserTemp(User user)
        {
            WebError process = new WebError();
            process.occurredError = false;

            try
            {
                connection.OpenTransaction();
                user.password = GerarMD5.GenerateHashMd5(user.password);
                RecordUserTemp(user, connection);
                connection.ConfirmTransaction();
            }
            catch (Exception ex)
            {
                process.occurredError = true;
                process.message = "There was an error registering the new customer";
                connection.CancelTransaction();
            }
            finally
            {
                connection.PrivacyPolicy();
            }

            return process;
        }

        public WebError CheckLogin(User user)
        {
            WebError process = new WebError();
            process.occurredError = false;

            try
            {
                connection.OpenTransaction();
                process = CheckLogin(connection, user);      
            }
            catch (Exception ex)
            {
                process.occurredError = true;
                process.message = "There was an error logging in";
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
                    else if (filter == "NOM") // Search by name
                    {
                        command = "where FUN.NAME = '" + key + "'";
                    }
                    else if (filter == "EML") // Search by email
                    {
                        command = "where FUN.EMAIL = '" + key + "'";
                    }
                }

                list = Search(command, connection);
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

        public List<User> SearchUserTemp(string filter, string key)
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
                    else if (filter == "NOM") // Search by name
                    {
                        command = "where FUN.NAME = '" + key + "'";
                    }
                    else if (filter == "EML") // Search by email
                    {
                        command = "where FUN.EMAIL = '" + key + "'";
                    }
                    else if (filter == "TOK") 
                    {
                        command = "where FUN.SINGLE_CODE = '" + key + "'";
                    }
                    else if (filter == "TOV") 
                    {
                        command = "where FUN.SINGLE_CODE = '" + key + "' ";
                        command = command + "and now() < FUN.EXPIRATION_TIME ";
                        command = command + "and FUN.EMAIL_CONFIRMED = 'N' ";
                    }
                    else if (filter == "TVR") 
                    {
                        command = "where FUN.SINGLE_CODE = '" + key + "' ";
                        command = command + "and now() < FUN.EXPIRATION_TIME ";
                    }
                }

                list = SearchUserTemp(command, connection);
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

        public void DeleteUser(string id)
        {
            try
            {
                connection.OpenConnection();
                Delete(id, connection);
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

        public WebError RecoverUserPassword(User user)
        {
            WebError process = new WebError();
            process.occurredError = false;

            try
            {
                connection.OpenConnection();
                user.password = GerarMD5.GenerateHashMd5(user.password);
                WriteRecovery(user, connection);
            }
            catch (Exception ex)
            {
                connection.CancelTransaction();
                process.occurredError = true;
                process.message = "An error occurred while recording password recovery!";
            }
            finally
            {
                connection.CloseConnection();
            }

            return process;
        }

        public WebError RecordConfirmationEmailRegister(string token)
        {
            WebError process = new WebError();
            process.occurredError = false;

            try
            {
                connection.OpenTransaction();

                WriteConfirmationEmail(connection, token);
                connection.ConfirmTransaction();
            }
            catch (Exception ex)
            {
                process.occurredError = true;
                process.message = "There was an error confirming the customer's email";
                connection.CancelTransaction();
            }
            finally
            {
                connection.PrivacyPolicy();
            }

            return process;
        }
    }
}
