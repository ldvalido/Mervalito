﻿
namespace Mervalito.MasterData {
    export interface TitleRow {
        IdTitle?: number;
        AmortizationDate?: string;
        AmortizationAmmount?: number;
        RentDate?: string;
        RentAmmount?: number;
        Price?: number;
        IdPaymentPeriod?: number;
        StartDate?: string;
        EndDate?: string;
        IdCurrency?: number;
        IdTitleType?: number;
        Symbol?: string;
        Name?: string;
        IdBondType?: number;
        IdRentType?: number;
        Tir?: number;
        MinimumQuantity?: number;
        IdBondRating?: number;
        IdPaymentPeriodDescription?: string;
        IdPaymentPeriodDays?: number;
        IdCurrencyDescription?: string;
        IdCurrencySymbol?: string;
        IdCurrencyRate?: number;
        IdTitleTypeDescription?: string;
        IdBondTypeDescription?: string;
        IdRentTypeDescription?: string;
        IdBondRatingSymbol?: string;
        IdBondRatingDescription?: string;
    }

    export namespace TitleRow {
        export const idProperty = 'IdTitle';
        export const nameProperty = 'Symbol';
        export const localTextPrefix = 'MasterData.Title';

        export namespace Fields {
            export declare const IdTitle;
            export declare const AmortizationDate;
            export declare const AmortizationAmmount;
            export declare const RentDate;
            export declare const RentAmmount;
            export declare const Price;
            export declare const IdPaymentPeriod;
            export declare const StartDate;
            export declare const EndDate;
            export declare const IdCurrency;
            export declare const IdTitleType;
            export declare const Symbol;
            export declare const Name;
            export declare const IdBondType;
            export declare const IdRentType;
            export declare const Tir;
            export declare const MinimumQuantity;
            export declare const IdBondRating;
            export declare const IdPaymentPeriodDescription: string;
            export declare const IdPaymentPeriodDays: string;
            export declare const IdCurrencyDescription: string;
            export declare const IdCurrencySymbol: string;
            export declare const IdCurrencyRate: string;
            export declare const IdTitleTypeDescription: string;
            export declare const IdBondTypeDescription: string;
            export declare const IdRentTypeDescription: string;
            export declare const IdBondRatingSymbol: string;
            export declare const IdBondRatingDescription: string;
        }

        ['IdTitle', 'AmortizationDate', 'AmortizationAmmount', 'RentDate', 'RentAmmount', 'Price', 'IdPaymentPeriod', 'StartDate', 'EndDate', 'IdCurrency', 'IdTitleType', 'Symbol', 'Name', 'IdBondType', 'IdRentType', 'Tir', 'MinimumQuantity', 'IdBondRating', 'IdPaymentPeriodDescription', 'IdPaymentPeriodDays', 'IdCurrencyDescription', 'IdCurrencySymbol', 'IdCurrencyRate', 'IdTitleTypeDescription', 'IdBondTypeDescription', 'IdRentTypeDescription', 'IdBondRatingSymbol', 'IdBondRatingDescription'].forEach(x => (<any>Fields)[x] = x);
    }
}

