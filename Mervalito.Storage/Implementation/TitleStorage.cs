using System.Collections.Generic;
using Mervalito.Model.Model;
using Mervalito.Storage.Base;

namespace Mervalito.Storage.Implementation
{
    /// <summary>
    /// 
    /// </summary>
    public class TitleStorage : StorageBase<Title,int>
    {
        #region Overrides of StorageBase<Title>

        /// <summary>
        /// Gets all.
        /// </summary>
        /// <returns></returns>
        public override IEnumerable<Title> GetAll()
        {
            return this.DbContext.Set<Title>().
                Include("BondType").
                Include("PaymentPeriod").
                Include("Currency").
                Include("RentType").
                Include("TitleType");
        }

        #endregion
    }
}
