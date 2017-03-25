
namespace Mervalito.MasterData {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class RentTypeDialog extends Serenity.EntityDialog<RentTypeRow, any> {
        protected getFormKey() { return RentTypeForm.formKey; }
        protected getIdProperty() { return RentTypeRow.idProperty; }
        protected getLocalTextPrefix() { return RentTypeRow.localTextPrefix; }
        protected getNameProperty() { return RentTypeRow.nameProperty; }
        protected getService() { return RentTypeService.baseUrl; }

        protected form = new RentTypeForm(this.idPrefix);

    }
}