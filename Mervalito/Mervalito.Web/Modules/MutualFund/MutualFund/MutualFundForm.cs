
namespace Mervalito.MutualFund.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("MutualFund.MutualFund")]
    [BasedOnRow(typeof(Entities.MutualFundRow))]
    public class MutualFundForm
    {
        public String Name { get; set; }
        public Double Portion { get; set; }
        public Double MinimumInvestment { get; set; }
        public Int32 SettlementDeadline { get; set; }
        public Int32 IdCurrency { get; set; }
        public Int32 IdCompanyManager { get; set; }
        public Int32 IdInvestmentHorizon { get; set; }
        public DateTime StartDate { get; set; }
        public Int32 LowerDuration { get; set; }
        public Int32 UpperDuration { get; set; }
    }
}