
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace Mervalito.MutualFund {
    
    @Serenity.Decorators.registerClass()
    export class MutualFundEditor extends Common.GridEditorBase<MutualFundRow> {
        protected getColumnsKey() { return 'MutualFund.MutualFund'; }
        protected getDialogType() { return MutualFundEditorDialog; }
                protected getLocalTextPrefix() { return MutualFundRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}