
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace Mervalito.MutualFund {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class CompanyManagerEditorDialog extends Common.GridEditorDialog<CompanyManagerRow> {
        protected getFormKey() { return CompanyManagerForm.formKey; }
                protected getLocalTextPrefix() { return CompanyManagerRow.localTextPrefix; }
        protected getNameProperty() { return CompanyManagerRow.nameProperty; }
        protected form = new CompanyManagerForm(this.idPrefix);
    }
}