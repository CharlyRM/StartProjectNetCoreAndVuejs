using Npgsql;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace br.com.DAL.br.com.Infra
{
    public class Connection
    {
        static string serverName = "localhost";  //localhost
        static string port = "5432";             //port default
        static string userName = "postgres";     //name do administrator
        static string password = "admin";        //password do administrator
        static string databaseName = "DB";   //name of the database
        public string connectionDatabase = null;

        static NpgsqlTransaction transaction;
        NpgsqlConnection connection = new NpgsqlConnection();

        public Connection()
        {
            connectionDatabase = String.Format("Server={0};Port={1};User Id={2};Password={3};Database={4};",
                                          serverName, port, userName, password, databaseName);
        }

        public void OpenConnection()
        {
            connection.ConnectionString = connectionDatabase;
            connection.Open();
        }

        public void CloseConnection()
        {
            connection.Close();
        }

        public void OpenTransaction()
        {
            connection.ConnectionString = connectionDatabase;
            connection.Open();
            transaction = (NpgsqlTransaction)connection.BeginTransaction();
        }

        public void RunsCommand(string CommandSQL)
        {
            using (NpgsqlCommand sqlcomando = new NpgsqlCommand(CommandSQL, connection))
            {
                sqlcomando.ExecuteNonQuery();
            }
        }

        public DataTable ExecuteConsultation(string CommandSQL)
        {
            DataTable Dice = new DataTable();

            using (NpgsqlDataAdapter Result = new NpgsqlDataAdapter(CommandSQL, connection))
            {
                Result.Fill(Dice);
                return Dice;
            }
        }

        public void ConfirmTransaction()
        {
            transaction.Commit();
        }

        public void CancelTransaction()
        {
            transaction.Rollback();
        }

        public void CloseTransaction()
        {
            connection.Close();
            transaction.Dispose();
        }
    }
}
