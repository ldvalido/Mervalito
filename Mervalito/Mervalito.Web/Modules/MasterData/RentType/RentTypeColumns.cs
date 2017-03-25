
namespace Mervalito.MasterData.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("MasterData.RentType")]
    [BasedOnRow(typeof(Entities.RentTypeRow))]
    public class RentTypeColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 IdRentType { get; set; }
        [EditLink]
        public String Description { get; set; }
    }
}