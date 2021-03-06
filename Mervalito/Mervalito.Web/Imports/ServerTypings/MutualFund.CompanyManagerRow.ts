﻿
namespace Mervalito.MutualFund {
    export interface CompanyManagerRow {
        IdCompanyManager?: number;
        Description?: string;
        ExternalId?: number;
    }

    export namespace CompanyManagerRow {
        export const idProperty = 'IdCompanyManager';
        export const nameProperty = 'Description';
        export const localTextPrefix = 'MutualFund.CompanyManager';

        export namespace Fields {
            export declare const IdCompanyManager;
            export declare const Description;
            export declare const ExternalId;
        }

        ['IdCompanyManager', 'Description', 'ExternalId'].forEach(x => (<any>Fields)[x] = x);
    }
}

