using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using Mervalito.Domain.Contract;
using Mervalito.Model.Model;

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
        /// The weather condition service
        /// </summary>
        private readonly ITitleService _titleService;
        /// <summary>
        /// Lists this instance.
        /// </summary>
        /// <returns></returns>
        [Route("titles")]
        [HttpGet]
        public List<Title> List()
        {
            return _titleService.List().ToList();
        }
        /// <summary>
        /// Updates the specified title identifier.
        /// </summary>
        /// <param name="titleId">The title identifier.</param>
        /// <returns></returns>
        [Route("titles/{titleId:int}")]
        [HttpPut]
        public Title Update(Title title)
        {
            return _titleService.Update(title);
        }

        #region C...tor
        public TitleController(ITitleService titleService)
        {
            _titleService = titleService;
        }
        #endregion
    }
}
