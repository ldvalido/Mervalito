﻿
namespace Mervalito.MasterData.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), TableName("[dbo].[PaymentPeriod]"), DisplayName("Payment Period"), InstanceName("Payment Period"), TwoLevelCached]
    [ReadPermission("MasterData:PaymentPeriod")]
    [ModifyPermission("MasterData:PaymentPeriod")]
    [LookupScript("MasterData.PaymentPeriodRow")]
    public sealed class PaymentPeriodRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id Payment Period"), Identity]
        public Int32? IdPaymentPeriod
        {
            get { return Fields.IdPaymentPeriod[this]; }
            set { Fields.IdPaymentPeriod[this] = value; }
        }

        [DisplayName("Description"), Size(50), NotNull, QuickSearch]
        public String Description
        {
            get { return Fields.Description[this]; }
            set { Fields.Description[this] = value; }
        }

        [DisplayName("Days"), NotNull]
        public Int32? Days
        {
            get { return Fields.Days[this]; }
            set { Fields.Days[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.IdPaymentPeriod; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Description; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public PaymentPeriodRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field IdPaymentPeriod;
            public StringField Description;
            public Int32Field Days;

            public RowFields()
                : base()
            {
                LocalTextPrefix = "MasterData.PaymentPeriod";
            }
        }
    }
}
