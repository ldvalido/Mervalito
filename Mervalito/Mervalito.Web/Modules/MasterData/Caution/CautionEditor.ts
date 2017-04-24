
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace Mervalito.MasterData {
    
    @Serenity.Decorators.registerClass()
    export class CautionEditor extends Common.GridEditorBase<CautionRow> {
        protected getColumnsKey() { return 'MasterData.Caution'; }
        protected getDialogType() { return CautionEditorDialog; }
                protected getLocalTextPrefix() { return CautionRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}