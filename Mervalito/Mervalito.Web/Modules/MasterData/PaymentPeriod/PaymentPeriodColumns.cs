﻿
namespace Mervalito.MasterData.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("MasterData.PaymentPeriod")]
    [BasedOnRow(typeof(Entities.PaymentPeriodRow))]
    public class PaymentPeriodColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 IdPaymentPeriod { get; set; }
        [EditLink]
        public String Description { get; set; }
        public Int32 Days { get; set; }
    }
}