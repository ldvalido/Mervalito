
namespace Mervalito.MasterData {
    export interface BondRatingRow {
        IdBondRating?: number;
        Symbol?: string;
        Description?: string;
    }

    export namespace BondRatingRow {
        export const idProperty = 'IdBondRating';
        export const nameProperty = 'Symbol';
        export const localTextPrefix = 'MasterData.BondRating';

        export namespace Fields {
            export declare const IdBondRating;
            export declare const Symbol;
            export declare const Description;
        }

        ['IdBondRating', 'Symbol', 'Description'].forEach(x => (<any>Fields)[x] = x);
    }
}

