
namespace Mervalito.MasterData.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), TableName("[dbo].[Title]"), DisplayName("Title"), InstanceName("Title"), TwoLevelCached]
    [ReadPermission("MasterData:Title")]
    [ModifyPermission("MasterData:Title")]
    public sealed class TitleRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id Title"), Identity]
        public Int32? IdTitle
        {
            get { return Fields.IdTitle[this]; }
            set { Fields.IdTitle[this] = value; }
        }

        [DisplayName("Name"), Size(50), NotNull]
        public String Name
        {
            get { return Fields.Name[this]; }
            set { Fields.Name[this] = value; }
        }

        [DisplayName("Symbol"), Size(50), NotNull, QuickSearch]
        public String Symbol
        {
            get { return Fields.Symbol[this]; }
            set { Fields.Symbol[this] = value; }
        }


        [DisplayName("Start Date"), NotNull]
        public DateTime? StartDate
        {
            get { return Fields.StartDate[this]; }
            set { Fields.StartDate[this] = value; }
        }

        [DisplayName("End Date"), NotNull]
        public DateTime? EndDate
        {
            get { return Fields.EndDate[this]; }
            set { Fields.EndDate[this] = value; }
        }



        [DisplayName("Amortization Date"), NotNull]
        public DateTime? AmortizationDate
        {
            get { return Fields.AmortizationDate[this]; }
            set { Fields.AmortizationDate[this] = value; }
        }

        [DisplayName("Amortization Ammount"), NotNull]
        public Double? AmortizationAmmount
        {
            get { return Fields.AmortizationAmmount[this]; }
            set { Fields.AmortizationAmmount[this] = value; }
        }

        [DisplayName("Rent Date"), NotNull]
        public DateTime? RentDate
        {
            get { return Fields.RentDate[this]; }
            set { Fields.RentDate[this] = value; }
        }

        [DisplayName("Rent Ammount"), NotNull]
        public Double? RentAmmount
        {
            get { return Fields.RentAmmount[this]; }
            set { Fields.RentAmmount[this] = value; }
        }

        [DisplayName("Price"), NotNull]
        public Double? Price
        {
            get { return Fields.Price[this]; }
            set { Fields.Price[this] = value; }
        }

        [DisplayName("Id Payment Period"), NotNull, ForeignKey("[dbo].[PaymentPeriod]", "IdPaymentPeriod"), LeftJoin("jIdPaymentPeriod"), TextualField("IdPaymentPeriodDescription")]
        [LookupEditor(typeof(PaymentPeriodRow))]
        public Int32? IdPaymentPeriod
        {
            get { return Fields.IdPaymentPeriod[this]; }
            set { Fields.IdPaymentPeriod[this] = value; }
        }

        [DisplayName("Id Currency"), NotNull, ForeignKey("[dbo].[Currency]", "IdCurrency"), LeftJoin("jIdCurrency"), TextualField("IdCurrencyDescription")]
        [LookupEditor(typeof(CurrencyRow))]
        public Int32? IdCurrency
        {
            get { return Fields.IdCurrency[this]; }
            set { Fields.IdCurrency[this] = value; }
        }

        [DisplayName("Id Title Type"), NotNull, ForeignKey("[dbo].[TitleType]", "IdTitleType"), LeftJoin("jIdTitleType"), TextualField("IdTitleTypeDescription")]
        [LookupEditor(typeof(TitleTypeRow))]
        public Int32? IdTitleType
        {
            get { return Fields.IdTitleType[this]; }
            set { Fields.IdTitleType[this] = value; }
        }

        [DisplayName("Id Bond Type"), NotNull, ForeignKey("[dbo].[BondType]", "IdBondType"), LeftJoin("jIdBondType"), TextualField("IdBondTypeDescription")]
        [LookupEditor(typeof(BondTypeRow))]
        public Int32? IdBondType
        {
            get { return Fields.IdBondType[this]; }
            set { Fields.IdBondType[this] = value; }
        }

        [DisplayName("Id Rent Type"), NotNull, ForeignKey("[dbo].[RentType]", "IdRentType"), LeftJoin("jIdRentType"), TextualField("IdRentTypeDescription")]
        [LookupEditor(typeof(RentTypeRow))]
        public Int32? IdRentType
        {
            get { return Fields.IdRentType[this]; }
            set { Fields.IdRentType[this] = value; }
        }

        [DisplayName("Tir"), Column("TIR"), NotNull,ReadOnly(true)]
        public Double? Tir
        {
            get { return Fields.Tir[this]; }
            set { Fields.Tir[this] = value; }
        }

        [DisplayName("Id Payment Period Description"), Expression("jIdPaymentPeriod.[Description]")]
        public String IdPaymentPeriodDescription
        {
            get { return Fields.IdPaymentPeriodDescription[this]; }
            set { Fields.IdPaymentPeriodDescription[this] = value; }
        }

        [DisplayName("Id Payment Period Days"), Expression("jIdPaymentPeriod.[Days]")]
        public Int32? IdPaymentPeriodDays
        {
            get { return Fields.IdPaymentPeriodDays[this]; }
            set { Fields.IdPaymentPeriodDays[this] = value; }
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

        [DisplayName("Id Title Type Description"), Expression("jIdTitleType.[Description]")]
        public String IdTitleTypeDescription
        {
            get { return Fields.IdTitleTypeDescription[this]; }
            set { Fields.IdTitleTypeDescription[this] = value; }
        }

        [DisplayName("Id Bond Type Description"), Expression("jIdBondType.[Description]")]
        public String IdBondTypeDescription
        {
            get { return Fields.IdBondTypeDescription[this]; }
            set { Fields.IdBondTypeDescription[this] = value; }
        }

        [DisplayName("Id Rent Type Description"), Expression("jIdRentType.[Description]")]
        public String IdRentTypeDescription
        {
            get { return Fields.IdRentTypeDescription[this]; }
            set { Fields.IdRentTypeDescription[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.IdTitle; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Symbol; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public TitleRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field IdTitle;
            public DateTimeField AmortizationDate;
            public DoubleField AmortizationAmmount;
            public DateTimeField RentDate;
            public DoubleField RentAmmount;
            public DoubleField Price;
            public Int32Field IdPaymentPeriod;
            public DateTimeField StartDate;
            public DateTimeField EndDate;
            public Int32Field IdCurrency;
            public Int32Field IdTitleType;
            public StringField Symbol;
            public StringField Name;
            public Int32Field IdBondType;
            public Int32Field IdRentType;
            public DoubleField Tir;

            public StringField IdPaymentPeriodDescription;
            public Int32Field IdPaymentPeriodDays;

            public StringField IdCurrencyDescription;
            public StringField IdCurrencySymbol;

            public StringField IdTitleTypeDescription;

            public StringField IdBondTypeDescription;

            public StringField IdRentTypeDescription;

            public RowFields()
                : base()
            {
                LocalTextPrefix = "MasterData.Title";
            }
        }
    }
}
