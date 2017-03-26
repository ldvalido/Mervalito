
namespace Mervalito.MutualFund.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), TableName("[dbo].[InvestmentHorizon]"), DisplayName("Investment Horizon"), InstanceName("Investment Horizon"), TwoLevelCached]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript("MutualFund.InvestmentHorizonRow")]
    public sealed class InvestmentHorizonRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id Investment Horizon"), Identity]
        public Int32? IdInvestmentHorizon
        {
            get { return Fields.IdInvestmentHorizon[this]; }
            set { Fields.IdInvestmentHorizon[this] = value; }
        }

        [DisplayName("Description"), Size(50), NotNull, QuickSearch]
        public String Description
        {
            get { return Fields.Description[this]; }
            set { Fields.Description[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.IdInvestmentHorizon; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Description; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public InvestmentHorizonRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field IdInvestmentHorizon;
            public StringField Description;

            public RowFields()
                : base()
            {
                LocalTextPrefix = "MutualFund.InvestmentHorizon";
            }
        }
    }
}
