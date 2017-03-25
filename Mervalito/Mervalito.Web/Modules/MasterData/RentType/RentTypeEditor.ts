
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace Mervalito.MasterData {
    
    @Serenity.Decorators.registerClass()
    export class RentTypeEditor extends Common.GridEditorBase<RentTypeRow> {
        protected getColumnsKey() { return 'MasterData.RentType'; }
        protected getDialogType() { return RentTypeEditorDialog; }
                protected getLocalTextPrefix() { return RentTypeRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}