
namespace Mervalito.MasterData.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("MasterData.BondType")]
    [BasedOnRow(typeof(Entities.BondTypeRow))]
    public class BondTypeForm
    {
        public String Description { get; set; }
    }
}