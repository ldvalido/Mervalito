
namespace Mervalito.MasterData {
    
    @Serenity.Decorators.registerClass()
    export class PaymentPeriodGrid extends Serenity.EntityGrid<PaymentPeriodRow, any> {
        protected getColumnsKey() { return 'MasterData.PaymentPeriod'; }
        protected getDialogType() { return PaymentPeriodDialog; }
        protected getIdProperty() { return PaymentPeriodRow.idProperty; }
        protected getLocalTextPrefix() { return PaymentPeriodRow.localTextPrefix; }
        protected getService() { return PaymentPeriodService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}