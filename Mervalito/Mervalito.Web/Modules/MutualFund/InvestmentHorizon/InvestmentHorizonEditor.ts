
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace Mervalito.MutualFund {
    
    @Serenity.Decorators.registerClass()
    export class InvestmentHorizonEditor extends Common.GridEditorBase<InvestmentHorizonRow> {
        protected getColumnsKey() { return 'MutualFund.InvestmentHorizon'; }
        protected getDialogType() { return InvestmentHorizonEditorDialog; }
                protected getLocalTextPrefix() { return InvestmentHorizonRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}