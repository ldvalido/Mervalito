

namespace Mervalito.MasterData {
    export class CurrencyForm extends Serenity.PrefixedContext {
        static formKey = 'MasterData.Currency';
    }

    export interface CurrencyForm {
        Description: Serenity.StringEditor;
    }

    [['Description', () => Serenity.StringEditor]].forEach(x => Object.defineProperty(CurrencyForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}