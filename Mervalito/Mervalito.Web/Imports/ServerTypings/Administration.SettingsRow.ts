
namespace Mervalito.Administration {
    export interface SettingsRow {
        IdSetting?: number;
        SettingName?: string;
        SettingValue?: string;
    }

    export namespace SettingsRow {
        export const idProperty = 'IdSetting';
        export const nameProperty = 'SettingName';
        export const localTextPrefix = 'Administration.Settings';

        export namespace Fields {
            export declare const IdSetting;
            export declare const SettingName;
            export declare const SettingValue;
        }

        ['IdSetting', 'SettingName', 'SettingValue'].forEach(x => (<any>Fields)[x] = x);
    }
}

