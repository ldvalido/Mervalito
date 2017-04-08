using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Mervalito.API.Base;
using Mervalito.Domain.Base;
using Mervalito.Model.Model;

namespace Mervalito.API.Controllers
{
    /// <summary>
    /// 
    /// </summary>
    /// <seealso cref="System.Web.Http.ApiController" />
    [RoutePrefix("")]
    public class CurrencyController : BaseCRUDApiController<Currency, int>
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="BaseCRUDApiController{T, TS}"/> class.
        /// </summary>
        /// <param name="crudService">The crud service.</param>
        public CurrencyController(ICrudService<Currency, int> crudService) : base(crudService)
        {
        }

        /// <summary>
        /// Lists this instance.
        /// </summary>
        /// <returns></returns>
        [Route("Currency")]
        [HttpGet]
        public List<Currency> List()
        {
            return crudService.List().ToList();
        }
        /// <summary>
        /// Gets the specified identifier for currency.
        /// </summary>
        /// <param name="idCurrency">The identifier for currency.</param>
        /// <returns></returns>
        [Route("Currency/{idCurrency:int}")]
        [HttpGet]
        public Currency Get(int idCurrency)
        {
            return crudService.Get(idCurrency);
        }

        /// <summary>
        /// Updates the specified currency.
        /// </summary>
        /// <param name="currency">The currency.</param>
        /// <returns></returns>
        [Route("Currency")]
        [HttpPut]
        public Currency Update(Currency currency)
        {
            return crudService.Update(currency);
        }
    }
}
