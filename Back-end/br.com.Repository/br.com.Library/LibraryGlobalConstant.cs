using br.com.DAL.br.com.Model.br.com.Management.br.com.Authentication;
using br.com.Modelo.br.com.Model.br.com.Library;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace br.com.DAL.br.com.Repository.br.com.Library
{
    public class LibraryGlobalConstant
    {
        private static DateTime currentDate;
        private static string emailSMTP;
        private static string passwordSMTP;
        private static string tokenAccessSearchAPI;
        private static string serverAddress;

        public static DateTime dateToday
        {
            get { return LibraryGlobalConstant.currentDate = DateTime.Now; }
        }

        public static String tokenAccessAPISearch
        {
            get { return LibraryGlobalConstant.tokenAccessSearchAPI; }
            set { LibraryGlobalConstant.tokenAccessSearchAPI = value; }
        }

        public static String addressHostServer
        {
            get { return LibraryGlobalConstant.serverAddress; }
            set { LibraryGlobalConstant.serverAddress = value; }
        }

        public static String addressEmailSMTP
        {
            get { return LibraryGlobalConstant.emailSMTP; }
            set { LibraryGlobalConstant.emailSMTP = value; }
        }

        public static String passwordEmailSMTP
        {
            get { return LibraryGlobalConstant.passwordSMTP; }
            set { LibraryGlobalConstant.passwordSMTP = value; }
        }
    }
}
