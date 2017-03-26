
namespace Mervalito.MutualFund.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("MutualFund.MutualFund")]
    [BasedOnRow(typeof(Entities.MutualFundRow))]
    public class MutualFundColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 IdMutualFund { get; set; }
        [EditLink]
        [Width(200)]
        public String Name { get; set; }
        [DisplayFormat("0.######")]
        public Double Portion { get; set; }
        public Double MinimumInvestment { get; set; }
        public Int32 SettlementDeadline { get; set; }
        [Width(50)]
        public String IdCurrencySymbol { get; set; }
        [Width(170)]
        public String IdCompanyManagerDescription { get; set; }
        [Width(100)]
        public String IdInvestmentHorizonDescription { get; set; }
        public DateTime StartDate { get; set; }
        public Int32 LowerDuration { get; set; }
        public Int32 UpperDuration { get; set; }
    }
}