
namespace Mervalito.MasterData {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class BondRatingDialog extends Serenity.EntityDialog<BondRatingRow, any> {
        protected getFormKey() { return BondRatingForm.formKey; }
        protected getIdProperty() { return BondRatingRow.idProperty; }
        protected getLocalTextPrefix() { return BondRatingRow.localTextPrefix; }
        protected getNameProperty() { return BondRatingRow.nameProperty; }
        protected getService() { return BondRatingService.baseUrl; }

        protected form = new BondRatingForm(this.idPrefix);

    }
}