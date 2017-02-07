
namespace Mervalito.MasterData.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), TableName("[dbo].[BondType]"), DisplayName("Bond Type"), InstanceName("Bond Type"), TwoLevelCached]
    [ReadPermission("MasterData:BondType")]
    [ModifyPermission("MasterData:BondType")]
    [LookupScript("MasterData.BondTypeRow")]
    public sealed class BondTypeRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id Bond Type"), Identity]
        public Int32? IdBondType
        {
            get { return Fields.IdBondType[this]; }
            set { Fields.IdBondType[this] = value; }
        }

        [DisplayName("Description"), Size(50), NotNull, QuickSearch]
        public String Description
        {
            get { return Fields.Description[this]; }
            set { Fields.Description[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.IdBondType; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Description; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public BondTypeRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field IdBondType;
            public StringField Description;

            public RowFields()
                : base()
            {
                LocalTextPrefix = "MasterData.BondType";
            }
        }
    }
}
