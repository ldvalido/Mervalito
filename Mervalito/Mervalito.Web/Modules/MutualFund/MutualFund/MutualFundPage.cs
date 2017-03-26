

[assembly:Serenity.Navigation.NavigationLink(int.MaxValue, "MutualFund/MutualFund", typeof(Mervalito.MutualFund.Pages.MutualFundController))]

namespace Mervalito.MutualFund.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("MutualFund/MutualFund"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.MutualFundRow))]
    public class MutualFundController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/MutualFund/MutualFund/MutualFundIndex.cshtml");
        }
    }
}