
namespace Mervalito.MasterData {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class BondTypeDialog extends Serenity.EntityDialog<BondTypeRow, any> {
        protected getFormKey() { return BondTypeForm.formKey; }
        protected getIdProperty() { return BondTypeRow.idProperty; }
        protected getLocalTextPrefix() { return BondTypeRow.localTextPrefix; }
        protected getNameProperty() { return BondTypeRow.nameProperty; }
        protected getService() { return BondTypeService.baseUrl; }

        protected form = new BondTypeForm(this.idPrefix);

    }
}