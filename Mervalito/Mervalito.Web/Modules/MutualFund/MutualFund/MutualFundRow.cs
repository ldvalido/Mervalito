
using Mervalito.MasterData.Entities;

namespace Mervalito.MutualFund.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), TableName("[dbo].[MutualFund]"), DisplayName("Mutual Fund"), InstanceName("Mutual Fund"), TwoLevelCached]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class MutualFundRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id Mutual Fund"), Identity]
        public Int32? IdMutualFund
        {
            get { return Fields.IdMutualFund[this]; }
            set { Fields.IdMutualFund[this] = value; }
        }

        [DisplayName("Name"), Size(50), NotNull, QuickSearch]
        public String Name
        {
            get { return Fields.Name[this]; }
            set { Fields.Name[this] = value; }
        }

        [DisplayName("Portion"), NotNull,DecimalEditor(Decimals = 6)]
        public Double? Portion
        {
            get { return Fields.Portion[this]; }
            set { Fields.Portion[this] = value; }
        }

        [DisplayName("Minimum Investment"), NotNull]
        public Double? MinimumInvestment
        {
            get { return Fields.MinimumInvestment[this]; }
            set { Fields.MinimumInvestment[this] = value; }
        }

        [DisplayName("Settlement Deadline"), NotNull]
        public Int32? SettlementDeadline
        {
            get { return Fields.SettlementDeadline[this]; }
            set { Fields.SettlementDeadline[this] = value; }
        }

        [DisplayName("Id Currency"), NotNull, ForeignKey("[dbo].[Currency]", "IdCurrency"), LeftJoin("jIdCurrency"), TextualField("IdCurrencyDescription")]
        [LookupEditor(typeof(CurrencyRow))]
        public Int32? IdCurrency
        {
            get { return Fields.IdCurrency[this]; }
            set { Fields.IdCurrency[this] = value; }
        }

        [DisplayName("Id Company Manager"), NotNull, ForeignKey("[dbo].[CompanyManager]", "IdCompanyManager"), LeftJoin("jIdCompanyManager"), TextualField("IdCompanyManagerDescription")]
        [LookupEditor(typeof(CompanyManagerRow))]
        public Int32? IdCompanyManager
        {
            get { return Fields.IdCompanyManager[this]; }
            set { Fields.IdCompanyManager[this] = value; }
        }

        [DisplayName("Id Investment Horizon"), NotNull, ForeignKey("[dbo].[InvestmentHorizon]", "IdInvestmentHorizon"), LeftJoin("jIdInvestmentHorizon"), TextualField("IdInvestmentHorizonDescription")]
        [LookupEditor(typeof(InvestmentHorizonRow))]
        public Int32? IdInvestmentHorizon
        {
            get { return Fields.IdInvestmentHorizon[this]; }
            set { Fields.IdInvestmentHorizon[this] = value; }
        }

        [DisplayName("Start Date"), NotNull]
        public DateTime? StartDate
        {
            get { return Fields.StartDate[this]; }
            set { Fields.StartDate[this] = value; }
        }

        [DisplayName("Lower Duration"), NotNull]
        public Int32? LowerDuration
        {
            get { return Fields.LowerDuration[this]; }
            set { Fields.LowerDuration[this] = value; }
        }

        [DisplayName("Upper Duration"), NotNull]
        public Int32? UpperDuration
        {
            get { return Fields.UpperDuration[this]; }
            set { Fields.UpperDuration[this] = value; }
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

        [DisplayName("Id Company Manager Description"), Expression("jIdCompanyManager.[Description]")]
        public String IdCompanyManagerDescription
        {
            get { return Fields.IdCompanyManagerDescription[this]; }
            set { Fields.IdCompanyManagerDescription[this] = value; }
        }

        [DisplayName("Id Investment Horizon Description"), Expression("jIdInvestmentHorizon.[Description]")]
        public String IdInvestmentHorizonDescription
        {
            get { return Fields.IdInvestmentHorizonDescription[this]; }
            set { Fields.IdInvestmentHorizonDescription[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.IdMutualFund; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Name; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public MutualFundRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field IdMutualFund;
            public StringField Name;
            public DoubleField Portion;
            public DoubleField MinimumInvestment;
            public Int32Field SettlementDeadline;
            public Int32Field IdCurrency;
            public Int32Field IdCompanyManager;
            public Int32Field IdInvestmentHorizon;
            public DateTimeField StartDate;
            public Int32Field LowerDuration;
            public Int32Field UpperDuration;

            public StringField IdCurrencyDescription;
            public StringField IdCurrencySymbol;

            public StringField IdCompanyManagerDescription;

            public StringField IdInvestmentHorizonDescription;

            public RowFields()
                : base()
            {
                LocalTextPrefix = "MutualFund.MutualFund";
            }
        }
    }
}
