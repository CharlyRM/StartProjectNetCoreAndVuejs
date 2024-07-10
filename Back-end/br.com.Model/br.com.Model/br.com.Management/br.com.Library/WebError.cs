using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace br.com.Model.br.com.Model.br.com.Management.br.com.Library
{
    public class WebError
    {
        public virtual Boolean occurredError { get; set; }
        public virtual string message { get; set; }
        public virtual string parameter { get; set; }

        public static implicit operator Task<object>(WebError v)
        {
            throw new NotImplementedException();
        }
    }
}
