
namespace Mervalito.MutualFund.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("MutualFund.CompanyManager")]
    [BasedOnRow(typeof(Entities.CompanyManagerRow))]
    public class CompanyManagerColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 IdCompanyManager { get; set; }
        [EditLink]
        public String Description { get; set; }
    }
}