
namespace Mervalito.MasterData {
    
    @Serenity.Decorators.registerClass()
    export class TitleGrid extends Serenity.EntityGrid<TitleRow, any> {
        protected getColumnsKey() { return 'MasterData.Title'; }
        protected getDialogType() { return TitleDialog; }
        protected getIdProperty() { return TitleRow.idProperty; }
        protected getLocalTextPrefix() { return TitleRow.localTextPrefix; }
        protected getService() { return TitleService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}