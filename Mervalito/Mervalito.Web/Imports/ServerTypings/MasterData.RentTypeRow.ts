
namespace Mervalito.MasterData {
    export interface RentTypeRow {
        IdRentType?: number;
        Description?: string;
    }

    export namespace RentTypeRow {
        export const idProperty = 'IdRentType';
        export const nameProperty = 'Description';
        export const localTextPrefix = 'MasterData.RentType';

        export namespace Fields {
            export declare const IdRentType;
            export declare const Description;
        }

        ['IdRentType', 'Description'].forEach(x => (<any>Fields)[x] = x);
    }
}

