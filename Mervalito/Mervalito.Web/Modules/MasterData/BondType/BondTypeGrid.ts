
namespace Mervalito.MasterData {
    
    @Serenity.Decorators.registerClass()
    export class BondTypeGrid extends Serenity.EntityGrid<BondTypeRow, any> {
        protected getColumnsKey() { return 'MasterData.BondType'; }
        protected getDialogType() { return BondTypeDialog; }
        protected getIdProperty() { return BondTypeRow.idProperty; }
        protected getLocalTextPrefix() { return BondTypeRow.localTextPrefix; }
        protected getService() { return BondTypeService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}