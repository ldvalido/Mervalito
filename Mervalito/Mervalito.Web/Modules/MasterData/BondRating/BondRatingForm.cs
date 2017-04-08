
namespace Mervalito.MasterData.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("MasterData.BondRating")]
    [BasedOnRow(typeof(Entities.BondRatingRow))]
    public class BondRatingForm
    {
        public String Symbol { get; set; }
        public String Description { get; set; }
    }
}