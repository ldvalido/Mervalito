
namespace Mervalito.MasterData.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("MasterData.Caution")]
    [BasedOnRow(typeof(Entities.CautionRow))]
    public class CautionForm
    {
        public Int32 Days { get; set; }
        public Int32 IdCurrency { get; set; }
        public Double Percentage { get; set; }
    }
}