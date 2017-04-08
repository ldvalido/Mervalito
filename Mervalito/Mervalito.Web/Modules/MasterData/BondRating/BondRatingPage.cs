

[assembly:Serenity.Navigation.NavigationLink(int.MaxValue, "MasterData/BondRating", typeof(Mervalito.MasterData.Pages.BondRatingController))]

namespace Mervalito.MasterData.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("MasterData/BondRating"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.BondRatingRow))]
    public class BondRatingController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/MasterData/BondRating/BondRatingIndex.cshtml");
        }
    }
}