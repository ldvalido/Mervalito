
namespace Mervalito.MasterData.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("MasterData.BondRating")]
    [BasedOnRow(typeof(Entities.BondRatingRow))]
    public class BondRatingColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 IdBondRating { get; set; }
        [EditLink]
        public String Symbol { get; set; }
        public String Description { get; set; }
    }
}