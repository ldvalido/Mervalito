

namespace Mervalito.MasterData {
    export class TitleTypeForm extends Serenity.PrefixedContext {
        static formKey = 'MasterData.TitleType';
    }

    export interface TitleTypeForm {
        Description: Serenity.StringEditor;
    }

    [['Description', () => Serenity.StringEditor]].forEach(x => Object.defineProperty(TitleTypeForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}