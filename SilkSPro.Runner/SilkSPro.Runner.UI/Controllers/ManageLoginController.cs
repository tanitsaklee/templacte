using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using SilkSPro.Runner.VM;
using System.Web.Services;
using SilkSPro.Runner.ET;

namespace SilkSPro.Runner.UI.Controllers
{
    public class ManageLoginController : Controller
    {
        //
        // GET: /ManageLogin/

        public ActionResult Index()
        {
            return View();
        }

        [HttpPost]
        public ActionResult Index(ManageVM data)
        {
            return Json(data);
        }

    }
}
