
namespace Mervalito.MutualFund {
    
    @Serenity.Decorators.registerClass()
    export class InvestmentHorizonGrid extends Serenity.EntityGrid<InvestmentHorizonRow, any> {
        protected getColumnsKey() { return 'MutualFund.InvestmentHorizon'; }
        protected getDialogType() { return InvestmentHorizonDialog; }
        protected getIdProperty() { return InvestmentHorizonRow.idProperty; }
        protected getLocalTextPrefix() { return InvestmentHorizonRow.localTextPrefix; }
        protected getService() { return InvestmentHorizonService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}