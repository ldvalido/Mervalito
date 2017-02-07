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

    [ColumnsScript("MasterData.Title")]
    [BasedOnRow(typeof(Entities.TitleRow))]
    public class TitleColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 IdTitle { get; set; }
        public DateTime AmortizationDate { get; set; }
        public Double AmortizationAmmount { get; set; }
        public DateTime RentDate { get; set; }
        public Double RentAmmount { get; set; }
        public Boolean IsLinked { get; set; }
        public Double Price { get; set; }
        public String IdPaymentPeriodDescription { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public String IdCurrencyDescription { get; set; }
        public String IdTitleTypeDescription { get; set; }
    }
}