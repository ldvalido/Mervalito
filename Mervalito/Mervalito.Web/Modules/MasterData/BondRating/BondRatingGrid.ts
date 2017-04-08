
namespace Mervalito.MasterData {
    
    @Serenity.Decorators.registerClass()
    export class BondRatingGrid extends Serenity.EntityGrid<BondRatingRow, any> {
        protected getColumnsKey() { return 'MasterData.BondRating'; }
        protected getDialogType() { return BondRatingDialog; }
        protected getIdProperty() { return BondRatingRow.idProperty; }
        protected getLocalTextPrefix() { return BondRatingRow.localTextPrefix; }
        protected getService() { return BondRatingService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}