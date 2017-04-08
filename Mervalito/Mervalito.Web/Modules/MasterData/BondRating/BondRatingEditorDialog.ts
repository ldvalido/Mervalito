
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace Mervalito.MasterData {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class BondRatingEditorDialog extends Common.GridEditorDialog<BondRatingRow> {
        protected getFormKey() { return BondRatingForm.formKey; }
                protected getLocalTextPrefix() { return BondRatingRow.localTextPrefix; }
        protected getNameProperty() { return BondRatingRow.nameProperty; }
        protected form = new BondRatingForm(this.idPrefix);
    }
}