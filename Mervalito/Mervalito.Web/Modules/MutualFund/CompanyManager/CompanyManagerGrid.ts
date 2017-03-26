
namespace Mervalito.MutualFund {
    
    @Serenity.Decorators.registerClass()
    export class CompanyManagerGrid extends Serenity.EntityGrid<CompanyManagerRow, any> {
        protected getColumnsKey() { return 'MutualFund.CompanyManager'; }
        protected getDialogType() { return CompanyManagerDialog; }
        protected getIdProperty() { return CompanyManagerRow.idProperty; }
        protected getLocalTextPrefix() { return CompanyManagerRow.localTextPrefix; }
        protected getService() { return CompanyManagerService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}