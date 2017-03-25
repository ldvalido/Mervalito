using System.Web.Http;

namespace Mervalito.API.Controllers
{
    /// <summary>
    /// 
    /// </summary>
    /// <seealso cref="System.Web.Http.ApiController" />
    [RoutePrefix("")]
    public class TitleController : ApiController
    {
        /// <summary>
        /// Lists this instance.
        /// </summary>
        /// <returns></returns>
        [Route("titles")]
        [HttpGet]
        public string List()
        {
            return "list";
        }
        /// <summary>
        /// Updates the specified title identifier.
        /// </summary>
        /// <param name="titleId">The title identifier.</param>
        /// <returns></returns>
        [Route("titles/{titleId:int}")]
        [HttpPut]
        public string Update(int titleId)
        {
            return "update";
        }
    }
}
