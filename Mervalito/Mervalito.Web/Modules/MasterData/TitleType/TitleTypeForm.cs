
namespace Mervalito.MasterData.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("MasterData.TitleType")]
    [BasedOnRow(typeof(Entities.TitleTypeRow))]
    public class TitleTypeForm
    {
        public String Description { get; set; }
    }
}