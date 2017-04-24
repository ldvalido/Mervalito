

[assembly:Serenity.Navigation.NavigationLink(int.MaxValue, "Administration/Settings", typeof(Mervalito.Administration.Pages.SettingsController))]

namespace Mervalito.Administration.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Administration/Settings"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.SettingsRow))]
    public class SettingsController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Administration/Settings/SettingsIndex.cshtml");
        }
    }
}