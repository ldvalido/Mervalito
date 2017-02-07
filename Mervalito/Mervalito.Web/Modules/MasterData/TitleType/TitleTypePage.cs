

[assembly:Serenity.Navigation.NavigationLink(int.MaxValue, "MasterData/TitleType", typeof(Mervalito.MasterData.Pages.TitleTypeController))]

namespace Mervalito.MasterData.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("MasterData/TitleType"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.TitleTypeRow))]
    public class TitleTypeController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/MasterData/TitleType/TitleTypeIndex.cshtml");
        }
    }
}