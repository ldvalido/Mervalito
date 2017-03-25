
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace Mervalito.MasterData {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class TitleEditorDialog extends Common.GridEditorDialog<TitleRow> {
        protected getFormKey() { return TitleForm.formKey; }
                protected getLocalTextPrefix() { return TitleRow.localTextPrefix; }
        protected getNameProperty() { return TitleRow.nameProperty; }
        protected form = new TitleForm(this.idPrefix);
    }
}