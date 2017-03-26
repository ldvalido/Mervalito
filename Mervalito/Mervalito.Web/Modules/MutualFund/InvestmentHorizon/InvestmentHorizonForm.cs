
namespace Mervalito.MutualFund.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("MutualFund.InvestmentHorizon")]
    [BasedOnRow(typeof(Entities.InvestmentHorizonRow))]
    public class InvestmentHorizonForm
    {
        public String Description { get; set; }
    }
}