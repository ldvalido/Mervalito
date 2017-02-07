
namespace Mervalito.MasterData {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class TitleTypeDialog extends Serenity.EntityDialog<TitleTypeRow, any> {
        protected getFormKey() { return TitleTypeForm.formKey; }
        protected getIdProperty() { return TitleTypeRow.idProperty; }
        protected getLocalTextPrefix() { return TitleTypeRow.localTextPrefix; }
        protected getNameProperty() { return TitleTypeRow.nameProperty; }
        protected getService() { return TitleTypeService.baseUrl; }

        protected form = new TitleTypeForm(this.idPrefix);

    }
}