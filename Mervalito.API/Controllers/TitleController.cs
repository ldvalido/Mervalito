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

        [Route("titles/{id:int}")]
        public Title Get(int id)
        {
            return _titleService.Get(id);
        }
        /// <summary>
        /// Updates the specified title identifier.
        /// </summary>
        /// <param name="title">The title.</param>
        /// <returns></returns>
        [Route("titles")]
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
