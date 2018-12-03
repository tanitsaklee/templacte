using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Configuration;


namespace SilkSPro.Runner.DC
{
    public static class ConstDC
    {
        public static string ADO_CONNECTIONSTRING()
        {
            var str = ConfigurationManager.ConnectionStrings["dbServ02"].ConnectionString;
            return str;
        }
    }
}
