using System.Data.Entity.Infrastructure;
using System.Data.Entity.ModelConfiguration;
using System.Data.Entity.ModelConfiguration.Conventions;
using Mervalito.Model.Model;

namespace Mervalito.Storage.Mapping
{
    public class TitleMapping : EntityTypeConfiguration<Title>
    {
        public TitleMapping()
        {
            HasKey(t => t.Id).ToTable("Title");
            Property(t => t.Id).HasColumnName("IdTitle");
            Property(t => t.Description).HasColumnName("Name");
            Property(t => t.AmortizationAmount).HasColumnName("AmortizationAmmount");
            Property(t => t.RentAmount).HasColumnName("RentAmmount");

            HasRequired(t => t.BondType).WithRequiredPrincipal().WillCascadeOnDelete(false);
            HasRequired(t => t.Currency).WithRequiredPrincipal();
            HasRequired(t => t.PaymentPeriod).WithRequiredPrincipal();
            HasRequired(t => t.TitleType).WithRequiredPrincipal();
            HasRequired(t => t.RentType).WithRequiredPrincipal();
            
        }
    }
}
