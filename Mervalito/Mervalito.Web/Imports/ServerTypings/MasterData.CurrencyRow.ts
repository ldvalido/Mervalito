﻿
namespace Mervalito.MasterData {
    export interface CurrencyRow {
        IdCurrency?: number;
        Description?: string;
        Symbol?: string;
    }

    export namespace CurrencyRow {
        export const idProperty = 'IdCurrency';
        export const nameProperty = 'Description';
        export const localTextPrefix = 'MasterData.Currency';

        export namespace Fields {
            export declare const IdCurrency;
            export declare const Description;
            export declare const Symbol;
        }

        ['IdCurrency', 'Description', 'Symbol'].forEach(x => (<any>Fields)[x] = x);
    }
}

