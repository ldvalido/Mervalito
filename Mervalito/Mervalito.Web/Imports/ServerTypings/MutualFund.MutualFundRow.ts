
namespace Mervalito.MutualFund {
    export interface MutualFundRow {
        IdMutualFund?: number;
        Name?: string;
        Portion?: number;
        MinimumInvestment?: number;
        SettlementDeadline?: number;
        IdCurrency?: number;
        IdCompanyManager?: number;
        IdInvestmentHorizon?: number;
        StartDate?: string;
        LowerDuration?: number;
        UpperDuration?: number;
        IdCurrencyDescription?: string;
        IdCurrencySymbol?: string;
        IdCompanyManagerDescription?: string;
        IdInvestmentHorizonDescription?: string;
    }

    export namespace MutualFundRow {
        export const idProperty = 'IdMutualFund';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'MutualFund.MutualFund';

        export namespace Fields {
            export declare const IdMutualFund;
            export declare const Name;
            export declare const Portion;
            export declare const MinimumInvestment;
            export declare const SettlementDeadline;
            export declare const IdCurrency;
            export declare const IdCompanyManager;
            export declare const IdInvestmentHorizon;
            export declare const StartDate;
            export declare const LowerDuration;
            export declare const UpperDuration;
            export declare const IdCurrencyDescription: string;
            export declare const IdCurrencySymbol: string;
            export declare const IdCompanyManagerDescription: string;
            export declare const IdInvestmentHorizonDescription: string;
        }

        ['IdMutualFund', 'Name', 'Portion', 'MinimumInvestment', 'SettlementDeadline', 'IdCurrency', 'IdCompanyManager', 'IdInvestmentHorizon', 'StartDate', 'LowerDuration', 'UpperDuration', 'IdCurrencyDescription', 'IdCurrencySymbol', 'IdCompanyManagerDescription', 'IdInvestmentHorizonDescription'].forEach(x => (<any>Fields)[x] = x);
    }
}

