
namespace Mervalito.MasterData {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class CautionDialog extends Serenity.EntityDialog<CautionRow, any> {
        protected getFormKey() { return CautionForm.formKey; }
        protected getIdProperty() { return CautionRow.idProperty; }
        protected getLocalTextPrefix() { return CautionRow.localTextPrefix; }
        protected getService() { return CautionService.baseUrl; }

        protected form = new CautionForm(this.idPrefix);

    }
}