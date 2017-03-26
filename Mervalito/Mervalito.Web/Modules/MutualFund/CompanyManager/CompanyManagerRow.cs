
namespace Mervalito.MutualFund.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), TableName("[dbo].[CompanyManager]"), DisplayName("Company Manager"), InstanceName("Company Manager"), TwoLevelCached]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript("MutualFund.CompanyManagerRow")]
    public sealed class CompanyManagerRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id Company Manager"), Identity]
        public Int32? IdCompanyManager
        {
            get { return Fields.IdCompanyManager[this]; }
            set { Fields.IdCompanyManager[this] = value; }
        }

        [DisplayName("Description"), Size(50), NotNull, QuickSearch]
        public String Description
        {
            get { return Fields.Description[this]; }
            set { Fields.Description[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.IdCompanyManager; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Description; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public CompanyManagerRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field IdCompanyManager;
            public StringField Description;

            public RowFields()
                : base()
            {
                LocalTextPrefix = "MutualFund.CompanyManager";
            }
        }
    }
}
