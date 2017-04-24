

namespace Mervalito.MasterData {
    export class CautionForm extends Serenity.PrefixedContext {
        static formKey = 'MasterData.Caution';
    }

    export interface CautionForm {
        Days: Serenity.IntegerEditor;
        IdCurrency: Serenity.IntegerEditor;
        Percentage: Serenity.DecimalEditor;
    }

    [['Days', () => Serenity.IntegerEditor], ['IdCurrency', () => Serenity.IntegerEditor], ['Percentage', () => Serenity.DecimalEditor]].forEach(x => Object.defineProperty(CautionForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}