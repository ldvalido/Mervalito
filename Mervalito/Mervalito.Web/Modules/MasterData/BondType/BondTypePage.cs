

[assembly:Serenity.Navigation.NavigationLink(int.MaxValue, "MasterData/BondType", typeof(Mervalito.MasterData.Pages.BondTypeController))]

namespace Mervalito.MasterData.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("MasterData/BondType"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.BondTypeRow))]
    public class BondTypeController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/MasterData/BondType/BondTypeIndex.cshtml");
        }
    }
}