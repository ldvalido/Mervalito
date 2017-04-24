
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace Mervalito.MasterData {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class CautionEditorDialog extends Common.GridEditorDialog<CautionRow> {
        protected getFormKey() { return CautionForm.formKey; }
                protected getLocalTextPrefix() { return CautionRow.localTextPrefix; }
        protected form = new CautionForm(this.idPrefix);
    }
}