
namespace Mervalito.MasterData.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("MasterData.TitleType")]
    [BasedOnRow(typeof(Entities.TitleTypeRow))]
    public class TitleTypeColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 IdTitleType { get; set; }
        [EditLink]
        public String Description { get; set; }
    }
}