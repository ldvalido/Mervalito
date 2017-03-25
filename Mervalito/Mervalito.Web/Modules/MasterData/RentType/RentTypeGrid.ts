
namespace Mervalito.MasterData {
    
    @Serenity.Decorators.registerClass()
    export class RentTypeGrid extends Serenity.EntityGrid<RentTypeRow, any> {
        protected getColumnsKey() { return 'MasterData.RentType'; }
        protected getDialogType() { return RentTypeDialog; }
        protected getIdProperty() { return RentTypeRow.idProperty; }
        protected getLocalTextPrefix() { return RentTypeRow.localTextPrefix; }
        protected getService() { return RentTypeService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}