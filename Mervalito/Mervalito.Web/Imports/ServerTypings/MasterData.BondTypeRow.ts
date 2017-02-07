
namespace Mervalito.MasterData {
    export interface BondTypeRow {
        IdBondType?: number;
        Description?: string;
    }

    export namespace BondTypeRow {
        export const idProperty = 'IdBondType';
        export const nameProperty = 'Description';
        export const localTextPrefix = 'MasterData.BondType';

        export namespace Fields {
            export declare const IdBondType;
            export declare const Description;
        }

        ['IdBondType', 'Description'].forEach(x => (<any>Fields)[x] = x);
    }
}

