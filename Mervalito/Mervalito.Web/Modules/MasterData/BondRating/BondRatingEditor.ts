
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace Mervalito.MasterData {
    
    @Serenity.Decorators.registerClass()
    export class BondRatingEditor extends Common.GridEditorBase<BondRatingRow> {
        protected getColumnsKey() { return 'MasterData.BondRating'; }
        protected getDialogType() { return BondRatingEditorDialog; }
                protected getLocalTextPrefix() { return BondRatingRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}