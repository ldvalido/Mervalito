

[assembly:Serenity.Navigation.NavigationLink(int.MaxValue, "MasterData/Title", typeof(Mervalito.MasterData.Pages.TitleController))]

namespace Mervalito.MasterData.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("MasterData/Title"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.TitleRow))]
    public class TitleController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/MasterData/Title/TitleIndex.cshtml");
        }
    }
}