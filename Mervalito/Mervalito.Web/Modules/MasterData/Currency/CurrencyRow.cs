
namespace Mervalito.MasterData.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), TableName("[dbo].[Currency]"), DisplayName("Currency"), InstanceName("Currency"), TwoLevelCached]
    [ReadPermission("MasterData:Currency")]
    [ModifyPermission("MasterData:Currency")]
    [LookupScript("MasterData.CurrencyRow")]
    public sealed class CurrencyRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id Currency"), Identity]
        public Int32? IdCurrency
        {
            get { return Fields.IdCurrency[this]; }
            set { Fields.IdCurrency[this] = value; }
        }

        [DisplayName("Description"), Size(50), NotNull, QuickSearch]
        public String Description
        {
            get { return Fields.Description[this]; }
            set { Fields.Description[this] = value; }
        }

        [DisplayName("Symbol"), Size(3), NotNull]
        public String Symbol
        {
            get { return Fields.Symbol[this]; }
            set { Fields.Symbol[this] = value; }
        }

        [DisplayName("Rate"), NotNull]
        public Double? Rate
        {
            get { return Fields.Rate[this]; }
            set { Fields.Rate[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.IdCurrency; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Description; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public CurrencyRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field IdCurrency;
            public StringField Description;
            public StringField Symbol;
            public DoubleField Rate;

            public RowFields()
                : base()
            {
                LocalTextPrefix = "MasterData.Currency";
            }
        }
    }
}
