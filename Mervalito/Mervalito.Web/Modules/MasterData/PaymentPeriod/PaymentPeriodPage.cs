

[assembly:Serenity.Navigation.NavigationLink(int.MaxValue, "MasterData/PaymentPeriod", typeof(Mervalito.MasterData.Pages.PaymentPeriodController))]

namespace Mervalito.MasterData.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("MasterData/PaymentPeriod"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.PaymentPeriodRow))]
    public class PaymentPeriodController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/MasterData/PaymentPeriod/PaymentPeriodIndex.cshtml");
        }
    }
}