
namespace Mervalito.MasterData.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("MasterData.Currency")]
    [BasedOnRow(typeof(Entities.CurrencyRow))]
    public class CurrencyColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 IdCurrency { get; set; }
        [EditLink]
        public String Description { get; set; }
        public String Symbol { get; set; }
        public Double Rate { get; set; }
    }
}