

namespace Mervalito.MasterData {
    export class BondRatingForm extends Serenity.PrefixedContext {
        static formKey = 'MasterData.BondRating';
    }

    export interface BondRatingForm {
        Symbol: Serenity.StringEditor;
        Description: Serenity.StringEditor;
    }

    [['Symbol', () => Serenity.StringEditor], ['Description', () => Serenity.StringEditor]].forEach(x => Object.defineProperty(BondRatingForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}