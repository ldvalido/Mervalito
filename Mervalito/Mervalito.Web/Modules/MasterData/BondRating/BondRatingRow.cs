
namespace Mervalito.MasterData.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), TableName("[dbo].[BondRating]"), DisplayName("Bond Rating"), InstanceName("Bond Rating"), TwoLevelCached]
    [ReadPermission("MasterData:BondType")]
    [ModifyPermission("MasterData:BondType")]
    [LookupScript("MasterData.BondRatingRow")]
    public sealed class BondRatingRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id Bond Rating"), Identity]
        public Int32? IdBondRating
        {
            get { return Fields.IdBondRating[this]; }
            set { Fields.IdBondRating[this] = value; }
        }

        [DisplayName("Symbol"), Size(50), NotNull, QuickSearch]
        public String Symbol
        {
            get { return Fields.Symbol[this]; }
            set { Fields.Symbol[this] = value; }
        }

        [DisplayName("Description"), Size(50), NotNull]
        public String Description
        {
            get { return Fields.Description[this]; }
            set { Fields.Description[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.IdBondRating; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Symbol; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public BondRatingRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field IdBondRating;
            public StringField Symbol;
            public StringField Description;

            public RowFields()
                : base()
            {
                LocalTextPrefix = "MasterData.BondRating";
            }
        }
    }
}
