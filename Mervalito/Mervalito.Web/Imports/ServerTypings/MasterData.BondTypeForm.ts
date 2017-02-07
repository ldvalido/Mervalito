

namespace Mervalito.MasterData {
    export class BondTypeForm extends Serenity.PrefixedContext {
        static formKey = 'MasterData.BondType';
    }

    export interface BondTypeForm {
        Description: Serenity.StringEditor;
    }

    [['Description', () => Serenity.StringEditor]].forEach(x => Object.defineProperty(BondTypeForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}