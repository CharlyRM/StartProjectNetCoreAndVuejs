using br.com.DAL.br.com.Model.br.com.Management.br.com.Authentication;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

/*
    Developer Linkedin Inglish : https://br.linkedin.com/in/charly-milhomem-76156637/en
    Developer Linkedin Português : https://br.linkedin.com/in/charly-milhomem-76156637
*/

namespace br.com.DAL.br.com.Repository.br.com.Library
{
    public class LibraryGlobal
    {
        private static DateTime currentDate;
        private static string serverAddress;
        private static string emailSMTP;
        private static string passwordSMTP;
        private static List<User> userLogin = new List<User>();

        public static DateTime dateToday
        {
            get { return LibraryGlobal.currentDate = DateTime.Now; }
        }

        public static String addressHostServer
        {
            get { return LibraryGlobal.serverAddress; }
            set { LibraryGlobal.serverAddress = value; }
        }

        public static String addressEmailSMTP
        {
            get { return LibraryGlobal.emailSMTP; }
            set { LibraryGlobal.emailSMTP = value; }
        }

        public static String passwordEmailSMTP
        {
            get { return LibraryGlobal.passwordSMTP; }
            set { LibraryGlobal.passwordSMTP = value; }
        }

        public static List<User> listUserLogin
        {
            get { return LibraryGlobal.userLogin; }
            set { LibraryGlobal.userLogin = value; }
        }
    }
}
