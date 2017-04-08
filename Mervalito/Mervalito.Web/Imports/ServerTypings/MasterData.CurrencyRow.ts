
namespace Mervalito.MasterData {
    export interface CurrencyRow {
        IdCurrency?: number;
        Description?: string;
        Symbol?: string;
        Rate?: number;
    }

    export namespace CurrencyRow {
        export const idProperty = 'IdCurrency';
        export const nameProperty = 'Description';
        export const localTextPrefix = 'MasterData.Currency';

        export namespace Fields {
            export declare const IdCurrency;
            export declare const Description;
            export declare const Symbol;
            export declare const Rate;
        }

        ['IdCurrency', 'Description', 'Symbol', 'Rate'].forEach(x => (<any>Fields)[x] = x);
    }
}

