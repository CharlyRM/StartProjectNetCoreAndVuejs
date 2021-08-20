using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

/*
    Developer Linkedin Inglish : https://br.linkedin.com/in/charly-milhomem-76156637/en
    Developer Linkedin Português : https://br.linkedin.com/in/charly-milhomem-76156637
*/

namespace br.com.Model.br.com.Model.br.com.Management.br.com.Library
{
    public class WebError
    {
        public virtual Boolean occurredError { get; set; }
        public virtual string message { get; set; }
        public virtual string parameter { get; set; }
    }
}
