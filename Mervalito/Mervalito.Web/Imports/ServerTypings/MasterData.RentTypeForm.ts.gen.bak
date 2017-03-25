

namespace Mervalito.MasterData {
    export class RentTypeForm extends Serenity.PrefixedContext {
        static formKey = 'MasterData.RentType';
    }

    export interface RentTypeForm {
        Description: Serenity.StringEditor;
    }

    [['Description', () => Serenity.StringEditor]].forEach(x => Object.defineProperty(RentTypeForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}