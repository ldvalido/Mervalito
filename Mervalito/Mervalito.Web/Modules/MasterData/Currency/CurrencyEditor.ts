
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace Mervalito.MasterData {
    
    @Serenity.Decorators.registerClass()
    export class CurrencyEditor extends Common.GridEditorBase<CurrencyRow> {
        protected getColumnsKey() { return 'MasterData.Currency'; }
        protected getDialogType() { return CurrencyEditorDialog; }
                protected getLocalTextPrefix() { return CurrencyRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}