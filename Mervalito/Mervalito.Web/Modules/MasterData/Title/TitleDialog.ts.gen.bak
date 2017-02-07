
namespace Mervalito.MasterData {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    @Serenity.Decorators.maximizable()
    export class TitleDialog extends Serenity.EntityDialog<TitleRow, any> {
        protected getFormKey() { return TitleForm.formKey; }
        protected getIdProperty() { return TitleRow.idProperty; }
        protected getLocalTextPrefix() { return TitleRow.localTextPrefix; }
        protected getNameProperty() { return TitleRow.nameProperty; }
        protected getService() { return TitleService.baseUrl; }

        protected form = new TitleForm(this.idPrefix);

        dialogOpen() {
                    super.dialogOpen();
                   this.element.closest(".ui-dialog").find(".ui-icon-maximize-window").click();
                 }
    }
}