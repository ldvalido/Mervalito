
namespace Mervalito.MutualFund {
    export interface CompanyManagerRow {
        IdCompanyManager?: number;
        Description?: string;
    }

    export namespace CompanyManagerRow {
        export const idProperty = 'IdCompanyManager';
        export const nameProperty = 'Description';
        export const localTextPrefix = 'MutualFund.CompanyManager';

        export namespace Fields {
            export declare const IdCompanyManager;
            export declare const Description;
        }

        ['IdCompanyManager', 'Description'].forEach(x => (<any>Fields)[x] = x);
    }
}

