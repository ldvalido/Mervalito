﻿

namespace Mervalito.MasterData {
    export class PaymentPeriodForm extends Serenity.PrefixedContext {
        static formKey = 'MasterData.PaymentPeriod';
    }

    export interface PaymentPeriodForm {
        Description: Serenity.StringEditor;
        Days: Serenity.IntegerEditor;
    }

    [['Description', () => Serenity.StringEditor], ['Days', () => Serenity.IntegerEditor]].forEach(x => Object.defineProperty(PaymentPeriodForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}