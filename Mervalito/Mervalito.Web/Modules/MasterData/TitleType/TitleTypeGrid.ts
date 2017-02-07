
namespace Mervalito.MasterData {
    
    @Serenity.Decorators.registerClass()
    export class TitleTypeGrid extends Serenity.EntityGrid<TitleTypeRow, any> {
        protected getColumnsKey() { return 'MasterData.TitleType'; }
        protected getDialogType() { return TitleTypeDialog; }
        protected getIdProperty() { return TitleTypeRow.idProperty; }
        protected getLocalTextPrefix() { return TitleTypeRow.localTextPrefix; }
        protected getService() { return TitleTypeService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}