

namespace Mervalito.MutualFund {
    export class MutualFundForm extends Serenity.PrefixedContext {
        static formKey = 'MutualFund.MutualFund';
    }

    export interface MutualFundForm {
        Name: Serenity.StringEditor;
        Portion: Serenity.DecimalEditor;
        MinimumInvestment: Serenity.DecimalEditor;
        SettlementDeadline: Serenity.IntegerEditor;
        IdCurrency: Serenity.IntegerEditor;
        IdCompanyManager: Serenity.IntegerEditor;
        IdInvestmentHorizon: Serenity.IntegerEditor;
        StartDate: Serenity.DateEditor;
        LowerDuration: Serenity.IntegerEditor;
        UpperDuration: Serenity.IntegerEditor;
    }

    [['Name', () => Serenity.StringEditor], ['Portion', () => Serenity.DecimalEditor], ['MinimumInvestment', () => Serenity.DecimalEditor], ['SettlementDeadline', () => Serenity.IntegerEditor], ['IdCurrency', () => Serenity.IntegerEditor], ['IdCompanyManager', () => Serenity.IntegerEditor], ['IdInvestmentHorizon', () => Serenity.IntegerEditor], ['StartDate', () => Serenity.DateEditor], ['LowerDuration', () => Serenity.IntegerEditor], ['UpperDuration', () => Serenity.IntegerEditor]].forEach(x => Object.defineProperty(MutualFundForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}