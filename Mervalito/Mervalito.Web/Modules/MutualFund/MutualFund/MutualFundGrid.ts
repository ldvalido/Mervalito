
namespace Mervalito.MutualFund {
    
    @Serenity.Decorators.registerClass()
    export class MutualFundGrid extends Serenity.EntityGrid<MutualFundRow, any> {
        protected getColumnsKey() { return 'MutualFund.MutualFund'; }
        protected getDialogType() { return MutualFundDialog; }
        protected getIdProperty() { return MutualFundRow.idProperty; }
        protected getLocalTextPrefix() { return MutualFundRow.localTextPrefix; }
        protected getService() { return MutualFundService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}