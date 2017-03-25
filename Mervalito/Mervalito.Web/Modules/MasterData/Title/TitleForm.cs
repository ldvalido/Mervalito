
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
        public String Name { get; set; }
        public String Symbol { get; set; }
        public Int32 IdCurrency { get; set; }
        public Int32 IdTitleType { get; set; }
        public Int32 IdBondType { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public DateTime AmortizationDate { get; set; }
        public Double AmortizationAmmount { get; set; }
        public Int32 IdRentType { get; set; }
        public DateTime RentDate { get; set; }
        public Double RentAmmount { get; set; }
        public Double Price { get; set; }
        public Int32 IdPaymentPeriod { get; set; }
    }
}