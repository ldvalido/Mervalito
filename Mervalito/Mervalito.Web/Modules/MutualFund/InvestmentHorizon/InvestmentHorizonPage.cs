

[assembly:Serenity.Navigation.NavigationLink(int.MaxValue, "MutualFund/InvestmentHorizon", typeof(Mervalito.MutualFund.Pages.InvestmentHorizonController))]

namespace Mervalito.MutualFund.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("MutualFund/InvestmentHorizon"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.InvestmentHorizonRow))]
    public class InvestmentHorizonController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/MutualFund/InvestmentHorizon/InvestmentHorizonIndex.cshtml");
        }
    }
}