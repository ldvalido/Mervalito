

namespace Mervalito.MutualFund {
    export class InvestmentHorizonForm extends Serenity.PrefixedContext {
        static formKey = 'MutualFund.InvestmentHorizon';
    }

    export interface InvestmentHorizonForm {
        Description: Serenity.StringEditor;
    }

    [['Description', () => Serenity.StringEditor]].forEach(x => Object.defineProperty(InvestmentHorizonForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}