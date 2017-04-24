

[assembly:Serenity.Navigation.NavigationLink(int.MaxValue, "MasterData/Caution", typeof(Mervalito.MasterData.Pages.CautionController))]

namespace Mervalito.MasterData.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("MasterData/Caution"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.CautionRow))]
    public class CautionController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/MasterData/Caution/CautionIndex.cshtml");
        }
    }
}