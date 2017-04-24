
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace Mervalito.Administration {
    
    @Serenity.Decorators.registerClass()
    export class SettingsEditor extends Common.GridEditorBase<SettingsRow> {
        protected getColumnsKey() { return 'Administration.Settings'; }
        protected getDialogType() { return SettingsEditorDialog; }
                protected getLocalTextPrefix() { return SettingsRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}