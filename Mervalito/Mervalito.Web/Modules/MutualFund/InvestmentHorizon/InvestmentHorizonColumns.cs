
namespace Mervalito.MutualFund.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("MutualFund.InvestmentHorizon")]
    [BasedOnRow(typeof(Entities.InvestmentHorizonRow))]
    public class InvestmentHorizonColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 IdInvestmentHorizon { get; set; }
        [EditLink]
        public String Description { get; set; }
    }
}