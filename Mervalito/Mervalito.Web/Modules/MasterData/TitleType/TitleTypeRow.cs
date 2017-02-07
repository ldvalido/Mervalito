
namespace Mervalito.MasterData.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), TableName("[dbo].[TitleType]"), DisplayName("Title Type"), InstanceName("Title Type"), TwoLevelCached]
    [ReadPermission("MasterData:TitleType")]
    [ModifyPermission("MasterData:TitleType")]

    [LookupScript("MasterData.TitleTypeRow")]
    public sealed class TitleTypeRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id Title Type"), Identity]
        public Int32? IdTitleType
        {
            get { return Fields.IdTitleType[this]; }
            set { Fields.IdTitleType[this] = value; }
        }

        [DisplayName("Description"), Size(50), NotNull, QuickSearch]
        public String Description
        {
            get { return Fields.Description[this]; }
            set { Fields.Description[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.IdTitleType; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Description; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public TitleTypeRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field IdTitleType;
            public StringField Description;

            public RowFields()
                : base()
            {
                LocalTextPrefix = "MasterData.TitleType";
            }
        }
    }
}
