
namespace Mervalito.MasterData {
    
    @Serenity.Decorators.registerClass()
    export class CautionGrid extends Serenity.EntityGrid<CautionRow, any> {
        protected getColumnsKey() { return 'MasterData.Caution'; }
        protected getDialogType() { return CautionDialog; }
        protected getIdProperty() { return CautionRow.idProperty; }
        protected getLocalTextPrefix() { return CautionRow.localTextPrefix; }
        protected getService() { return CautionService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}