
namespace Mervalito.MasterData.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), TableName("[dbo].[Caution]"), DisplayName("Caution"), InstanceName("Caution"), TwoLevelCached]
    [ReadPermission("MasterData:Caution")]
    [ModifyPermission("MasterData:Caution")]
    public sealed class CautionRow : Row, IIdRow
    {
        [DisplayName("Id Caution"), Identity]
        public Int32? IdCaution
        {
            get { return Fields.IdCaution[this]; }
            set { Fields.IdCaution[this] = value; }
        }

        [DisplayName("Days"), NotNull]
        public Int32? Days
        {
            get { return Fields.Days[this]; }
            set { Fields.Days[this] = value; }
        }

        [DisplayName("Id Currency"), NotNull, ForeignKey("[dbo].[Currency]", "IdCurrency"), LeftJoin("jIdCurrency"), TextualField("IdCurrencyDescription")]
        [LookupEditor(typeof(CurrencyRow))]
        public Int32? IdCurrency
        {
            get { return Fields.IdCurrency[this]; }
            set { Fields.IdCurrency[this] = value; }
        }

        [DisplayName("Percentage"), NotNull]
        public Double? Percentage
        {
            get { return Fields.Percentage[this]; }
            set { Fields.Percentage[this] = value; }
        }

        [DisplayName("Id Currency Description"), Expression("jIdCurrency.[Description]")]
        public String IdCurrencyDescription
        {
            get { return Fields.IdCurrencyDescription[this]; }
            set { Fields.IdCurrencyDescription[this] = value; }
        }

        [DisplayName("Id Currency Symbol"), Expression("jIdCurrency.[Symbol]")]
        public String IdCurrencySymbol
        {
            get { return Fields.IdCurrencySymbol[this]; }
            set { Fields.IdCurrencySymbol[this] = value; }
        }

        [DisplayName("Id Currency Rate"), Expression("jIdCurrency.[Rate]")]
        public Double? IdCurrencyRate
        {
            get { return Fields.IdCurrencyRate[this]; }
            set { Fields.IdCurrencyRate[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.IdCaution; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public CautionRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field IdCaution;
            public Int32Field Days;
            public Int32Field IdCurrency;
            public DoubleField Percentage;

            public StringField IdCurrencyDescription;
            public StringField IdCurrencySymbol;
            public DoubleField IdCurrencyRate;

            public RowFields()
                : base()
            {
                LocalTextPrefix = "MasterData.Caution";
            }
        }
    }
}
