
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace Mervalito.MutualFund {
    
    @Serenity.Decorators.registerClass()
    export class CompanyManagerEditor extends Common.GridEditorBase<CompanyManagerRow> {
        protected getColumnsKey() { return 'MutualFund.CompanyManager'; }
        protected getDialogType() { return CompanyManagerEditorDialog; }
                protected getLocalTextPrefix() { return CompanyManagerRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}