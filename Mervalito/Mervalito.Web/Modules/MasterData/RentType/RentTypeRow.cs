
namespace Mervalito.MasterData.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), TableName("[dbo].[RentType]"), DisplayName("Rent Type"), InstanceName("Rent Type"), TwoLevelCached]
    [ReadPermission("MasterData:RentType")]
    [ModifyPermission("MasterData:RentType")]
    [LookupScript("MasterData.RentTypeRow")]
    public sealed class RentTypeRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id Rent Type"), Identity]
        public Int32? IdRentType
        {
            get { return Fields.IdRentType[this]; }
            set { Fields.IdRentType[this] = value; }
        }

        [DisplayName("Description"), Size(50), NotNull, QuickSearch]
        public String Description
        {
            get { return Fields.Description[this]; }
            set { Fields.Description[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.IdRentType; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Description; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public RentTypeRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field IdRentType;
            public StringField Description;

            public RowFields()
                : base()
            {
                LocalTextPrefix = "MasterData.RentType";
            }
        }
    }
}
