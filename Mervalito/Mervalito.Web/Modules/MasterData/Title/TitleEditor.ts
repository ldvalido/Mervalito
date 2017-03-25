
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace Mervalito.MasterData {
    
    @Serenity.Decorators.registerClass()
    export class TitleEditor extends Common.GridEditorBase<TitleRow> {
        protected getColumnsKey() { return 'MasterData.Title'; }
        protected getDialogType() { return TitleEditorDialog; }
                protected getLocalTextPrefix() { return TitleRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}