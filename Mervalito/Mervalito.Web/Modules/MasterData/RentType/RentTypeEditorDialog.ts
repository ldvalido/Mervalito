
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace Mervalito.MasterData {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class RentTypeEditorDialog extends Common.GridEditorDialog<RentTypeRow> {
        protected getFormKey() { return RentTypeForm.formKey; }
                protected getLocalTextPrefix() { return RentTypeRow.localTextPrefix; }
        protected getNameProperty() { return RentTypeRow.nameProperty; }
        protected form = new RentTypeForm(this.idPrefix);
    }
}