using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace br.com.Modelo.br.com.Model.br.com.Library
{
    public class LibraryGlobal
    {
        public virtual string emailSMTP { get; set; }
        public virtual string passwordSMTP { get; set; }
        public virtual string tokenAccess { get; set; }
        public virtual string serverAddress { get; set; }
    }
}
