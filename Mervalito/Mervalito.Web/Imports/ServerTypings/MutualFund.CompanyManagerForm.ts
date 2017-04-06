

namespace Mervalito.MutualFund {
    export class CompanyManagerForm extends Serenity.PrefixedContext {
        static formKey = 'MutualFund.CompanyManager';
    }

    export interface CompanyManagerForm {
        Description: Serenity.StringEditor;
        ExternalId: Serenity.IntegerEditor;
    }

    [['Description', () => Serenity.StringEditor], ['ExternalId', () => Serenity.IntegerEditor]].forEach(x => Object.defineProperty(CompanyManagerForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}