using Swashbuckle.Application;
using System.Web.Http;

namespace Mervalito.API
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            // Web API configuration and services

            //config.EnableCors();

            // Web API routes
            config.MapHttpAttributeRoutes();
            
            config.Formatters.Remove(config.Formatters.XmlFormatter);

            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{id}",
                defaults: new { id = RouteParameter.Optional }
            );
            config.Routes.MapHttpRoute(
           name: "swagger_root",
           routeTemplate: "",
           defaults: null,
           constraints: null,
           handler: new RedirectHandler((message => message.RequestUri.ToString()), "swagger"));
        }
    }
}
