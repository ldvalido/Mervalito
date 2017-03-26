
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace Mervalito.MutualFund {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class MutualFundEditorDialog extends Common.GridEditorDialog<MutualFundRow> {
        protected getFormKey() { return MutualFundForm.formKey; }
                protected getLocalTextPrefix() { return MutualFundRow.localTextPrefix; }
        protected getNameProperty() { return MutualFundRow.nameProperty; }
        protected form = new MutualFundForm(this.idPrefix);
    }
}