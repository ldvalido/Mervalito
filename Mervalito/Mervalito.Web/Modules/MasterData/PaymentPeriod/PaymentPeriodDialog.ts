
namespace Mervalito.MasterData {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class PaymentPeriodDialog extends Serenity.EntityDialog<PaymentPeriodRow, any> {
        protected getFormKey() { return PaymentPeriodForm.formKey; }
        protected getIdProperty() { return PaymentPeriodRow.idProperty; }
        protected getLocalTextPrefix() { return PaymentPeriodRow.localTextPrefix; }
        protected getNameProperty() { return PaymentPeriodRow.nameProperty; }
        protected getService() { return PaymentPeriodService.baseUrl; }

        protected form = new PaymentPeriodForm(this.idPrefix);

    }
}