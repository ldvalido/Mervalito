﻿
namespace Mervalito.MasterData.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("MasterData.Title")]
    [BasedOnRow(typeof(Entities.TitleRow))]
    public class TitleForm
    {
        public DateTime AmortizationDate { get; set; }
        public Double AmortizationAmmount { get; set; }
        public DateTime RentDate { get; set; }
        public Double RentAmmount { get; set; }
        public Boolean IsLinked { get; set; }
        public Double Price { get; set; }
        public Int32 IdPaymentPeriod { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public Int32 IdCurrency { get; set; }
        public Int32 IdTitleType { get; set; }
    }
}