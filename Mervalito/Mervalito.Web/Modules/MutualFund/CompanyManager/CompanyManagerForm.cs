
namespace Mervalito.MutualFund.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("MutualFund.CompanyManager")]
    [BasedOnRow(typeof(Entities.CompanyManagerRow))]
    public class CompanyManagerForm
    {
        public String Description { get; set; }
        public Int32 ExternalId { get; set; }
    }
}