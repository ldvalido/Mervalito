

[assembly:Serenity.Navigation.NavigationLink(int.MaxValue, "MutualFund/CompanyManager", typeof(Mervalito.MutualFund.Pages.CompanyManagerController))]

namespace Mervalito.MutualFund.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("MutualFund/CompanyManager"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.CompanyManagerRow))]
    public class CompanyManagerController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/MutualFund/CompanyManager/CompanyManagerIndex.cshtml");
        }
    }
}