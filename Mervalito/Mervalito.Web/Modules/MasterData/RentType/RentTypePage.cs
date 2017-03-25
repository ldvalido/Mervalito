

[assembly:Serenity.Navigation.NavigationLink(int.MaxValue, "MasterData/RentType", typeof(Mervalito.MasterData.Pages.RentTypeController))]

namespace Mervalito.MasterData.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("MasterData/RentType"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.RentTypeRow))]
    public class RentTypeController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/MasterData/RentType/RentTypeIndex.cshtml");
        }
    }
}