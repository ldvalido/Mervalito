
namespace Mervalito.MasterData.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("MasterData.Caution")]
    [BasedOnRow(typeof(Entities.CautionRow))]
    public class CautionColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 IdCaution { get; set; }
        public Int32 Days { get; set; }
        public String IdCurrencyDescription { get; set; }
        [DisplayFormat("00.00")]
        public Double Percentage { get; set; }
    }
}