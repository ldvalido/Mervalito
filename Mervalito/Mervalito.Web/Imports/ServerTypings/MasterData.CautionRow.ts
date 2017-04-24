
namespace Mervalito.MasterData {
    export interface CautionRow {
        IdCaution?: number;
        Days?: number;
        IdCurrency?: number;
        Percentage?: number;
        IdCurrencyDescription?: string;
        IdCurrencySymbol?: string;
        IdCurrencyRate?: number;
    }

    export namespace CautionRow {
        export const idProperty = 'IdCaution';
        export const localTextPrefix = 'MasterData.Caution';

        export namespace Fields {
            export declare const IdCaution;
            export declare const Days;
            export declare const IdCurrency;
            export declare const Percentage;
            export declare const IdCurrencyDescription: string;
            export declare const IdCurrencySymbol: string;
            export declare const IdCurrencyRate: string;
        }

        ['IdCaution', 'Days', 'IdCurrency', 'Percentage', 'IdCurrencyDescription', 'IdCurrencySymbol', 'IdCurrencyRate'].forEach(x => (<any>Fields)[x] = x);
    }
}

