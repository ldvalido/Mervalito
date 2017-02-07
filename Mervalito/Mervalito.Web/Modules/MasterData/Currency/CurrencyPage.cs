

[assembly:Serenity.Navigation.NavigationLink(int.MaxValue, "MasterData/Currency", typeof(Mervalito.MasterData.Pages.CurrencyController))]

namespace Mervalito.MasterData.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("MasterData/Currency"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.CurrencyRow))]
    public class CurrencyController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/MasterData/Currency/CurrencyIndex.cshtml");
        }
    }
}