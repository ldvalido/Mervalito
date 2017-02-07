
namespace Mervalito.MasterData {
    export interface TitleTypeRow {
        IdTitleType?: number;
        Description?: string;
    }

    export namespace TitleTypeRow {
        export const idProperty = 'IdTitleType';
        export const nameProperty = 'Description';
        export const localTextPrefix = 'MasterData.TitleType';

        export namespace Fields {
            export declare const IdTitleType;
            export declare const Description;
        }

        ['IdTitleType', 'Description'].forEach(x => (<any>Fields)[x] = x);
    }
}

