
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

        [EditLink,Width(75)]
        public String Symbol { get; set; }
        public String Name { get; set; }
        [Width(100)]
        public DateTime AmortizationDate { get; set; }
        public Double AmortizationAmmount { get; set; }
        [Width(100)]
        public DateTime RentDate { get; set; }
        public Double RentAmmount { get; set; }
        public Double Price { get; set; }
        public Double Tir { get; set; }
        [Width(100)]
        public String IdPaymentPeriodDescription { get; set; }
        [Width(100)]
        public DateTime StartDate { get; set; }
        [Width(100)]
        public DateTime EndDate { get; set; }
        public String IdCurrencyDescription { get; set; }
        public String IdTitleTypeDescription { get; set; }
        public String IdBondTypeDescription { get; set; }
        public String IdRentTypeDescription { get; set; }   
        public Int32 MinimumQuantity { get; set; }
        public String IdBondRatingDescription { get; set; }
    }
}