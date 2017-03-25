
namespace Mervalito.MasterData.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("MasterData.RentType")]
    [BasedOnRow(typeof(Entities.RentTypeRow))]
    public class RentTypeForm
    {
        public String Description { get; set; }
    }
}