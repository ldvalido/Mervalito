
namespace Mervalito.MutualFund {
    export interface InvestmentHorizonRow {
        IdInvestmentHorizon?: number;
        Description?: string;
    }

    export namespace InvestmentHorizonRow {
        export const idProperty = 'IdInvestmentHorizon';
        export const nameProperty = 'Description';
        export const localTextPrefix = 'MutualFund.InvestmentHorizon';

        export namespace Fields {
            export declare const IdInvestmentHorizon;
            export declare const Description;
        }

        ['IdInvestmentHorizon', 'Description'].forEach(x => (<any>Fields)[x] = x);
    }
}

