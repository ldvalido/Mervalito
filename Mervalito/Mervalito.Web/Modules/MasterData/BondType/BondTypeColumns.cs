
namespace Mervalito.MasterData.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("MasterData.BondType")]
    [BasedOnRow(typeof(Entities.BondTypeRow))]
    public class BondTypeColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 IdBondType { get; set; }
        [EditLink]
        public String Description { get; set; }
    }
}