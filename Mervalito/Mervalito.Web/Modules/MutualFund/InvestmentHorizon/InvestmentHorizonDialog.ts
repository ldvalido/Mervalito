
namespace Mervalito.MutualFund {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class InvestmentHorizonDialog extends Serenity.EntityDialog<InvestmentHorizonRow, any> {
        protected getFormKey() { return InvestmentHorizonForm.formKey; }
        protected getIdProperty() { return InvestmentHorizonRow.idProperty; }
        protected getLocalTextPrefix() { return InvestmentHorizonRow.localTextPrefix; }
        protected getNameProperty() { return InvestmentHorizonRow.nameProperty; }
        protected getService() { return InvestmentHorizonService.baseUrl; }

        protected form = new InvestmentHorizonForm(this.idPrefix);

    }
}