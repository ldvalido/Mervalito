
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace Mervalito.MutualFund {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class InvestmentHorizonEditorDialog extends Common.GridEditorDialog<InvestmentHorizonRow> {
        protected getFormKey() { return InvestmentHorizonForm.formKey; }
                protected getLocalTextPrefix() { return InvestmentHorizonRow.localTextPrefix; }
        protected getNameProperty() { return InvestmentHorizonRow.nameProperty; }
        protected form = new InvestmentHorizonForm(this.idPrefix);
    }
}