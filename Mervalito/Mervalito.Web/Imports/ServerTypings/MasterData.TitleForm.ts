

namespace Mervalito.MasterData {
    export class TitleForm extends Serenity.PrefixedContext {
        static formKey = 'MasterData.Title';
    }

    export interface TitleForm {
        AmortizationDate: Serenity.DateEditor;
        AmortizationAmmount: Serenity.DecimalEditor;
        RentDate: Serenity.DateEditor;
        RentAmmount: Serenity.DecimalEditor;
        IsLinked: Serenity.BooleanEditor;
        Price: Serenity.DecimalEditor;
        IdPaymentPeriod: Serenity.IntegerEditor;
        StartDate: Serenity.DateEditor;
        EndDate: Serenity.DateEditor;
        IdCurrency: Serenity.IntegerEditor;
        IdTitleType: Serenity.IntegerEditor;
    }

    [['AmortizationDate', () => Serenity.DateEditor], ['AmortizationAmmount', () => Serenity.DecimalEditor], ['RentDate', () => Serenity.DateEditor], ['RentAmmount', () => Serenity.DecimalEditor], ['IsLinked', () => Serenity.BooleanEditor], ['Price', () => Serenity.DecimalEditor], ['IdPaymentPeriod', () => Serenity.IntegerEditor], ['StartDate', () => Serenity.DateEditor], ['EndDate', () => Serenity.DateEditor], ['IdCurrency', () => Serenity.IntegerEditor], ['IdTitleType', () => Serenity.IntegerEditor]].forEach(x => Object.defineProperty(TitleForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}