
namespace Mervalito.MasterData.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("MasterData.Currency")]
    [BasedOnRow(typeof(Entities.CurrencyRow))]
    public class CurrencyForm
    {
        public String Description { get; set; }
    }
}