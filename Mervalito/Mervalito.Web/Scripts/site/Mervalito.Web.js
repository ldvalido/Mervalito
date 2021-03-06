﻿var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var Mervalito;
(function (Mervalito) {
    var Administration;
    (function (Administration) {
        var LanguageForm = (function (_super) {
            __extends(LanguageForm, _super);
            function LanguageForm() {
                return _super.apply(this, arguments) || this;
            }
            return LanguageForm;
        }(Serenity.PrefixedContext));
        LanguageForm.formKey = 'Administration.Language';
        Administration.LanguageForm = LanguageForm;
        [['LanguageId', function () { return Serenity.StringEditor; }], ['LanguageName', function () { return Serenity.StringEditor; }]].forEach(function (x) { return Object.defineProperty(LanguageForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Administration = Mervalito.Administration || (Mervalito.Administration = {}));
})(Mervalito || (Mervalito = {}));
var Mervalito;
(function (Mervalito) {
    var Administration;
    (function (Administration) {
        var LanguageRow;
        (function (LanguageRow) {
            LanguageRow.idProperty = 'Id';
            LanguageRow.nameProperty = 'LanguageName';
            LanguageRow.localTextPrefix = 'Administration.Language';
            LanguageRow.lookupKey = 'Administration.Language';
            function getLookup() {
                return Q.getLookup('Administration.Language');
            }
            LanguageRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = LanguageRow.Fields || (LanguageRow.Fields = {}));
            ['Id', 'LanguageId', 'LanguageName'].forEach(function (x) { return Fields[x] = x; });
        })(LanguageRow = Administration.LanguageRow || (Administration.LanguageRow = {}));
    })(Administration = Mervalito.Administration || (Mervalito.Administration = {}));
})(Mervalito || (Mervalito = {}));
var Mervalito;
(function (Mervalito) {
    var Administration;
    (function (Administration) {
        var LanguageService;
        (function (LanguageService) {
            LanguageService.baseUrl = 'Administration/Language';
            var Methods;
            (function (Methods) {
            })(Methods = LanguageService.Methods || (LanguageService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                LanguageService[x] = function (r, s, o) { return Q.serviceRequest(LanguageService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = LanguageService.baseUrl + '/' + x;
            });
        })(LanguageService = Administration.LanguageService || (Administration.LanguageService = {}));
    })(Administration = Mervalito.Administration || (Mervalito.Administration = {}));
})(Mervalito || (Mervalito = {}));
var Mervalito;
(function (Mervalito) {
    var Administration;
    (function (Administration) {
        var RoleForm = (function (_super) {
            __extends(RoleForm, _super);
            function RoleForm() {
                return _super.apply(this, arguments) || this;
            }
            return RoleForm;
        }(Serenity.PrefixedContext));
        RoleForm.formKey = 'Administration.Role';
        Administration.RoleForm = RoleForm;
        [['RoleName', function () { return Serenity.StringEditor; }]].forEach(function (x) { return Object.defineProperty(RoleForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Administration = Mervalito.Administration || (Mervalito.Administration = {}));
})(Mervalito || (Mervalito = {}));
var Mervalito;
(function (Mervalito) {
    var Administration;
    (function (Administration) {
        var RolePermissionRow;
        (function (RolePermissionRow) {
            RolePermissionRow.idProperty = 'RolePermissionId';
            RolePermissionRow.nameProperty = 'PermissionKey';
            RolePermissionRow.localTextPrefix = 'Administration.RolePermission';
            var Fields;
            (function (Fields) {
            })(Fields = RolePermissionRow.Fields || (RolePermissionRow.Fields = {}));
            ['RolePermissionId', 'RoleId', 'PermissionKey', 'RoleRoleName'].forEach(function (x) { return Fields[x] = x; });
        })(RolePermissionRow = Administration.RolePermissionRow || (Administration.RolePermissionRow = {}));
    })(Administration = Mervalito.Administration || (Mervalito.Administration = {}));
})(Mervalito || (Mervalito = {}));
var Mervalito;
(function (Mervalito) {
    var Administration;
    (function (Administration) {
        var RolePermissionService;
        (function (RolePermissionService) {
            RolePermissionService.baseUrl = 'Administration/RolePermission';
            var Methods;
            (function (Methods) {
            })(Methods = RolePermissionService.Methods || (RolePermissionService.Methods = {}));
            ['Update', 'List'].forEach(function (x) {
                RolePermissionService[x] = function (r, s, o) { return Q.serviceRequest(RolePermissionService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = RolePermissionService.baseUrl + '/' + x;
            });
        })(RolePermissionService = Administration.RolePermissionService || (Administration.RolePermissionService = {}));
    })(Administration = Mervalito.Administration || (Mervalito.Administration = {}));
})(Mervalito || (Mervalito = {}));
var Mervalito;
(function (Mervalito) {
    var Administration;
    (function (Administration) {
        var RoleRow;
        (function (RoleRow) {
            RoleRow.idProperty = 'RoleId';
            RoleRow.nameProperty = 'RoleName';
            RoleRow.localTextPrefix = 'Administration.Role';
            RoleRow.lookupKey = 'Administration.Role';
            function getLookup() {
                return Q.getLookup('Administration.Role');
            }
            RoleRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = RoleRow.Fields || (RoleRow.Fields = {}));
            ['RoleId', 'RoleName'].forEach(function (x) { return Fields[x] = x; });
        })(RoleRow = Administration.RoleRow || (Administration.RoleRow = {}));
    })(Administration = Mervalito.Administration || (Mervalito.Administration = {}));
})(Mervalito || (Mervalito = {}));
var Mervalito;
(function (Mervalito) {
    var Administration;
    (function (Administration) {
        var RoleService;
        (function (RoleService) {
            RoleService.baseUrl = 'Administration/Role';
            var Methods;
            (function (Methods) {
            })(Methods = RoleService.Methods || (RoleService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                RoleService[x] = function (r, s, o) { return Q.serviceRequest(RoleService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = RoleService.baseUrl + '/' + x;
            });
        })(RoleService = Administration.RoleService || (Administration.RoleService = {}));
    })(Administration = Mervalito.Administration || (Mervalito.Administration = {}));
})(Mervalito || (Mervalito = {}));
var Mervalito;
(function (Mervalito) {
    var Administration;
    (function (Administration) {
        var SettingsForm = (function (_super) {
            __extends(SettingsForm, _super);
            function SettingsForm() {
                return _super.apply(this, arguments) || this;
            }
            return SettingsForm;
        }(Serenity.PrefixedContext));
        SettingsForm.formKey = 'Administration.Settings';
        Administration.SettingsForm = SettingsForm;
        [['SettingName', function () { return Serenity.StringEditor; }], ['SettingValue', function () { return Serenity.StringEditor; }]].forEach(function (x) { return Object.defineProperty(SettingsForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Administration = Mervalito.Administration || (Mervalito.Administration = {}));
})(Mervalito || (Mervalito = {}));
var Mervalito;
(function (Mervalito) {
    var Administration;
    (function (Administration) {
        var SettingsRow;
        (function (SettingsRow) {
            SettingsRow.idProperty = 'IdSetting';
            SettingsRow.nameProperty = 'SettingName';
            SettingsRow.localTextPrefix = 'Administration.Settings';
            var Fields;
            (function (Fields) {
            })(Fields = SettingsRow.Fields || (SettingsRow.Fields = {}));
            ['IdSetting', 'SettingName', 'SettingValue'].forEach(function (x) { return Fields[x] = x; });
        })(SettingsRow = Administration.SettingsRow || (Administration.SettingsRow = {}));
    })(Administration = Mervalito.Administration || (Mervalito.Administration = {}));
})(Mervalito || (Mervalito = {}));
var Mervalito;
(function (Mervalito) {
    var Administration;
    (function (Administration) {
        var SettingsService;
        (function (SettingsService) {
            SettingsService.baseUrl = 'Administration/Settings';
            var Methods;
            (function (Methods) {
            })(Methods = SettingsService.Methods || (SettingsService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                SettingsService[x] = function (r, s, o) { return Q.serviceRequest(SettingsService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = SettingsService.baseUrl + '/' + x;
            });
        })(SettingsService = Administration.SettingsService || (Administration.SettingsService = {}));
    })(Administration = Mervalito.Administration || (Mervalito.Administration = {}));
})(Mervalito || (Mervalito = {}));
var Mervalito;
(function (Mervalito) {
    var Administration;
    (function (Administration) {
        var TranslationService;
        (function (TranslationService) {
            TranslationService.baseUrl = 'Administration/Translation';
            var Methods;
            (function (Methods) {
            })(Methods = TranslationService.Methods || (TranslationService.Methods = {}));
            ['List', 'Update'].forEach(function (x) {
                TranslationService[x] = function (r, s, o) { return Q.serviceRequest(TranslationService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = TranslationService.baseUrl + '/' + x;
            });
        })(TranslationService = Administration.TranslationService || (Administration.TranslationService = {}));
    })(Administration = Mervalito.Administration || (Mervalito.Administration = {}));
})(Mervalito || (Mervalito = {}));
var Mervalito;
(function (Mervalito) {
    var Administration;
    (function (Administration) {
        var UserForm = (function (_super) {
            __extends(UserForm, _super);
            function UserForm() {
                return _super.apply(this, arguments) || this;
            }
            return UserForm;
        }(Serenity.PrefixedContext));
        UserForm.formKey = 'Administration.User';
        Administration.UserForm = UserForm;
        [['Username', function () { return Serenity.StringEditor; }], ['DisplayName', function () { return Serenity.StringEditor; }], ['Email', function () { return Serenity.EmailEditor; }], ['UserImage', function () { return Serenity.ImageUploadEditor; }], ['Password', function () { return Serenity.PasswordEditor; }], ['PasswordConfirm', function () { return Serenity.PasswordEditor; }], ['Source', function () { return Serenity.StringEditor; }]].forEach(function (x) { return Object.defineProperty(UserForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Administration = Mervalito.Administration || (Mervalito.Administration = {}));
})(Mervalito || (Mervalito = {}));
var Mervalito;
(function (Mervalito) {
    var Administration;
    (function (Administration) {
        var UserPermissionRow;
        (function (UserPermissionRow) {
            UserPermissionRow.idProperty = 'UserPermissionId';
            UserPermissionRow.nameProperty = 'PermissionKey';
            UserPermissionRow.localTextPrefix = 'Administration.UserPermission';
            var Fields;
            (function (Fields) {
            })(Fields = UserPermissionRow.Fields || (UserPermissionRow.Fields = {}));
            ['UserPermissionId', 'UserId', 'PermissionKey', 'Granted', 'Username', 'User'].forEach(function (x) { return Fields[x] = x; });
        })(UserPermissionRow = Administration.UserPermissionRow || (Administration.UserPermissionRow = {}));
    })(Administration = Mervalito.Administration || (Mervalito.Administration = {}));
})(Mervalito || (Mervalito = {}));
var Mervalito;
(function (Mervalito) {
    var Administration;
    (function (Administration) {
        var UserPermissionService;
        (function (UserPermissionService) {
            UserPermissionService.baseUrl = 'Administration/UserPermission';
            var Methods;
            (function (Methods) {
            })(Methods = UserPermissionService.Methods || (UserPermissionService.Methods = {}));
            ['Update', 'List', 'ListRolePermissions', 'ListPermissionKeys'].forEach(function (x) {
                UserPermissionService[x] = function (r, s, o) { return Q.serviceRequest(UserPermissionService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = UserPermissionService.baseUrl + '/' + x;
            });
        })(UserPermissionService = Administration.UserPermissionService || (Administration.UserPermissionService = {}));
    })(Administration = Mervalito.Administration || (Mervalito.Administration = {}));
})(Mervalito || (Mervalito = {}));
var Mervalito;
(function (Mervalito) {
    var Administration;
    (function (Administration) {
        var UserRoleRow;
        (function (UserRoleRow) {
            UserRoleRow.idProperty = 'UserRoleId';
            UserRoleRow.localTextPrefix = 'Administration.UserRole';
            var Fields;
            (function (Fields) {
            })(Fields = UserRoleRow.Fields || (UserRoleRow.Fields = {}));
            ['UserRoleId', 'UserId', 'RoleId', 'Username', 'User'].forEach(function (x) { return Fields[x] = x; });
        })(UserRoleRow = Administration.UserRoleRow || (Administration.UserRoleRow = {}));
    })(Administration = Mervalito.Administration || (Mervalito.Administration = {}));
})(Mervalito || (Mervalito = {}));
var Mervalito;
(function (Mervalito) {
    var Administration;
    (function (Administration) {
        var UserRoleService;
        (function (UserRoleService) {
            UserRoleService.baseUrl = 'Administration/UserRole';
            var Methods;
            (function (Methods) {
            })(Methods = UserRoleService.Methods || (UserRoleService.Methods = {}));
            ['Update', 'List'].forEach(function (x) {
                UserRoleService[x] = function (r, s, o) { return Q.serviceRequest(UserRoleService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = UserRoleService.baseUrl + '/' + x;
            });
        })(UserRoleService = Administration.UserRoleService || (Administration.UserRoleService = {}));
    })(Administration = Mervalito.Administration || (Mervalito.Administration = {}));
})(Mervalito || (Mervalito = {}));
var Mervalito;
(function (Mervalito) {
    var Administration;
    (function (Administration) {
        var UserRow;
        (function (UserRow) {
            UserRow.idProperty = 'UserId';
            UserRow.isActiveProperty = 'IsActive';
            UserRow.nameProperty = 'Username';
            UserRow.localTextPrefix = 'Administration.User';
            UserRow.lookupKey = 'Administration.User';
            function getLookup() {
                return Q.getLookup('Administration.User');
            }
            UserRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = UserRow.Fields || (UserRow.Fields = {}));
            ['UserId', 'Username', 'Source', 'PasswordHash', 'PasswordSalt', 'DisplayName', 'Email', 'UserImage', 'LastDirectoryUpdate', 'IsActive', 'Password', 'PasswordConfirm', 'InsertUserId', 'InsertDate', 'UpdateUserId', 'UpdateDate'].forEach(function (x) { return Fields[x] = x; });
        })(UserRow = Administration.UserRow || (Administration.UserRow = {}));
    })(Administration = Mervalito.Administration || (Mervalito.Administration = {}));
})(Mervalito || (Mervalito = {}));
var Mervalito;
(function (Mervalito) {
    var Administration;
    (function (Administration) {
        var UserService;
        (function (UserService) {
            UserService.baseUrl = 'Administration/User';
            var Methods;
            (function (Methods) {
            })(Methods = UserService.Methods || (UserService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Undelete', 'Retrieve', 'List'].forEach(function (x) {
                UserService[x] = function (r, s, o) { return Q.serviceRequest(UserService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = UserService.baseUrl + '/' + x;
            });
        })(UserService = Administration.UserService || (Administration.UserService = {}));
    })(Administration = Mervalito.Administration || (Mervalito.Administration = {}));
})(Mervalito || (Mervalito = {}));
var Mervalito;
(function (Mervalito) {
    var Common;
    (function (Common) {
        var UserPreferenceRow;
        (function (UserPreferenceRow) {
            UserPreferenceRow.idProperty = 'UserPreferenceId';
            UserPreferenceRow.nameProperty = 'Name';
            UserPreferenceRow.localTextPrefix = 'Common.UserPreference';
            var Fields;
            (function (Fields) {
            })(Fields = UserPreferenceRow.Fields || (UserPreferenceRow.Fields = {}));
            ['UserPreferenceId', 'UserId', 'PreferenceType', 'Name', 'Value'].forEach(function (x) { return Fields[x] = x; });
        })(UserPreferenceRow = Common.UserPreferenceRow || (Common.UserPreferenceRow = {}));
    })(Common = Mervalito.Common || (Mervalito.Common = {}));
})(Mervalito || (Mervalito = {}));
var Mervalito;
(function (Mervalito) {
    var Common;
    (function (Common) {
        var UserPreferenceService;
        (function (UserPreferenceService) {
            UserPreferenceService.baseUrl = 'Common/UserPreference';
            var Methods;
            (function (Methods) {
            })(Methods = UserPreferenceService.Methods || (UserPreferenceService.Methods = {}));
            ['Update', 'Retrieve'].forEach(function (x) {
                UserPreferenceService[x] = function (r, s, o) { return Q.serviceRequest(UserPreferenceService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = UserPreferenceService.baseUrl + '/' + x;
            });
        })(UserPreferenceService = Common.UserPreferenceService || (Common.UserPreferenceService = {}));
    })(Common = Mervalito.Common || (Mervalito.Common = {}));
})(Mervalito || (Mervalito = {}));
var Mervalito;
(function (Mervalito) {
    var MasterData;
    (function (MasterData) {
        var BondRatingForm = (function (_super) {
            __extends(BondRatingForm, _super);
            function BondRatingForm() {
                return _super.apply(this, arguments) || this;
            }
            return BondRatingForm;
        }(Serenity.PrefixedContext));
        BondRatingForm.formKey = 'MasterData.BondRating';
        MasterData.BondRatingForm = BondRatingForm;
        [['Symbol', function () { return Serenity.StringEditor; }], ['Description', function () { return Serenity.StringEditor; }]].forEach(function (x) { return Object.defineProperty(BondRatingForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(MasterData = Mervalito.MasterData || (Mervalito.MasterData = {}));
})(Mervalito || (Mervalito = {}));
var Mervalito;
(function (Mervalito) {
    var MasterData;
    (function (MasterData) {
        var BondRatingRow;
        (function (BondRatingRow) {
            BondRatingRow.idProperty = 'IdBondRating';
            BondRatingRow.nameProperty = 'Symbol';
            BondRatingRow.localTextPrefix = 'MasterData.BondRating';
            var Fields;
            (function (Fields) {
            })(Fields = BondRatingRow.Fields || (BondRatingRow.Fields = {}));
            ['IdBondRating', 'Symbol', 'Description'].forEach(function (x) { return Fields[x] = x; });
        })(BondRatingRow = MasterData.BondRatingRow || (MasterData.BondRatingRow = {}));
    })(MasterData = Mervalito.MasterData || (Mervalito.MasterData = {}));
})(Mervalito || (Mervalito = {}));
var Mervalito;
(function (Mervalito) {
    var MasterData;
    (function (MasterData) {
        var BondRatingService;
        (function (BondRatingService) {
            BondRatingService.baseUrl = 'MasterData/BondRating';
            var Methods;
            (function (Methods) {
            })(Methods = BondRatingService.Methods || (BondRatingService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                BondRatingService[x] = function (r, s, o) { return Q.serviceRequest(BondRatingService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = BondRatingService.baseUrl + '/' + x;
            });
        })(BondRatingService = MasterData.BondRatingService || (MasterData.BondRatingService = {}));
    })(MasterData = Mervalito.MasterData || (Mervalito.MasterData = {}));
})(Mervalito || (Mervalito = {}));
var Mervalito;
(function (Mervalito) {
    var MasterData;
    (function (MasterData) {
        var BondTypeForm = (function (_super) {
            __extends(BondTypeForm, _super);
            function BondTypeForm() {
                return _super.apply(this, arguments) || this;
            }
            return BondTypeForm;
        }(Serenity.PrefixedContext));
        BondTypeForm.formKey = 'MasterData.BondType';
        MasterData.BondTypeForm = BondTypeForm;
        [['Description', function () { return Serenity.StringEditor; }]].forEach(function (x) { return Object.defineProperty(BondTypeForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(MasterData = Mervalito.MasterData || (Mervalito.MasterData = {}));
})(Mervalito || (Mervalito = {}));
var Mervalito;
(function (Mervalito) {
    var MasterData;
    (function (MasterData) {
        var BondTypeRow;
        (function (BondTypeRow) {
            BondTypeRow.idProperty = 'IdBondType';
            BondTypeRow.nameProperty = 'Description';
            BondTypeRow.localTextPrefix = 'MasterData.BondType';
            var Fields;
            (function (Fields) {
            })(Fields = BondTypeRow.Fields || (BondTypeRow.Fields = {}));
            ['IdBondType', 'Description'].forEach(function (x) { return Fields[x] = x; });
        })(BondTypeRow = MasterData.BondTypeRow || (MasterData.BondTypeRow = {}));
    })(MasterData = Mervalito.MasterData || (Mervalito.MasterData = {}));
})(Mervalito || (Mervalito = {}));
var Mervalito;
(function (Mervalito) {
    var MasterData;
    (function (MasterData) {
        var BondTypeService;
        (function (BondTypeService) {
            BondTypeService.baseUrl = 'MasterData/BondType';
            var Methods;
            (function (Methods) {
            })(Methods = BondTypeService.Methods || (BondTypeService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                BondTypeService[x] = function (r, s, o) { return Q.serviceRequest(BondTypeService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = BondTypeService.baseUrl + '/' + x;
            });
        })(BondTypeService = MasterData.BondTypeService || (MasterData.BondTypeService = {}));
    })(MasterData = Mervalito.MasterData || (Mervalito.MasterData = {}));
})(Mervalito || (Mervalito = {}));
var Mervalito;
(function (Mervalito) {
    var MasterData;
    (function (MasterData) {
        var CautionForm = (function (_super) {
            __extends(CautionForm, _super);
            function CautionForm() {
                return _super.apply(this, arguments) || this;
            }
            return CautionForm;
        }(Serenity.PrefixedContext));
        CautionForm.formKey = 'MasterData.Caution';
        MasterData.CautionForm = CautionForm;
        [['Days', function () { return Serenity.IntegerEditor; }], ['IdCurrency', function () { return Serenity.IntegerEditor; }], ['Percentage', function () { return Serenity.DecimalEditor; }]].forEach(function (x) { return Object.defineProperty(CautionForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(MasterData = Mervalito.MasterData || (Mervalito.MasterData = {}));
})(Mervalito || (Mervalito = {}));
var Mervalito;
(function (Mervalito) {
    var MasterData;
    (function (MasterData) {
        var CautionRow;
        (function (CautionRow) {
            CautionRow.idProperty = 'IdCaution';
            CautionRow.localTextPrefix = 'MasterData.Caution';
            var Fields;
            (function (Fields) {
            })(Fields = CautionRow.Fields || (CautionRow.Fields = {}));
            ['IdCaution', 'Days', 'IdCurrency', 'Percentage', 'IdCurrencyDescription', 'IdCurrencySymbol', 'IdCurrencyRate'].forEach(function (x) { return Fields[x] = x; });
        })(CautionRow = MasterData.CautionRow || (MasterData.CautionRow = {}));
    })(MasterData = Mervalito.MasterData || (Mervalito.MasterData = {}));
})(Mervalito || (Mervalito = {}));
var Mervalito;
(function (Mervalito) {
    var MasterData;
    (function (MasterData) {
        var CautionService;
        (function (CautionService) {
            CautionService.baseUrl = 'MasterData/Caution';
            var Methods;
            (function (Methods) {
            })(Methods = CautionService.Methods || (CautionService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                CautionService[x] = function (r, s, o) { return Q.serviceRequest(CautionService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = CautionService.baseUrl + '/' + x;
            });
        })(CautionService = MasterData.CautionService || (MasterData.CautionService = {}));
    })(MasterData = Mervalito.MasterData || (Mervalito.MasterData = {}));
})(Mervalito || (Mervalito = {}));
var Mervalito;
(function (Mervalito) {
    var MasterData;
    (function (MasterData) {
        var CurrencyForm = (function (_super) {
            __extends(CurrencyForm, _super);
            function CurrencyForm() {
                return _super.apply(this, arguments) || this;
            }
            return CurrencyForm;
        }(Serenity.PrefixedContext));
        CurrencyForm.formKey = 'MasterData.Currency';
        MasterData.CurrencyForm = CurrencyForm;
        [['Description', function () { return Serenity.StringEditor; }], ['Symbol', function () { return Serenity.StringEditor; }], ['Rate', function () { return Serenity.DecimalEditor; }]].forEach(function (x) { return Object.defineProperty(CurrencyForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(MasterData = Mervalito.MasterData || (Mervalito.MasterData = {}));
})(Mervalito || (Mervalito = {}));
var Mervalito;
(function (Mervalito) {
    var MasterData;
    (function (MasterData) {
        var CurrencyRow;
        (function (CurrencyRow) {
            CurrencyRow.idProperty = 'IdCurrency';
            CurrencyRow.nameProperty = 'Description';
            CurrencyRow.localTextPrefix = 'MasterData.Currency';
            var Fields;
            (function (Fields) {
            })(Fields = CurrencyRow.Fields || (CurrencyRow.Fields = {}));
            ['IdCurrency', 'Description', 'Symbol', 'Rate'].forEach(function (x) { return Fields[x] = x; });
        })(CurrencyRow = MasterData.CurrencyRow || (MasterData.CurrencyRow = {}));
    })(MasterData = Mervalito.MasterData || (Mervalito.MasterData = {}));
})(Mervalito || (Mervalito = {}));
var Mervalito;
(function (Mervalito) {
    var MasterData;
    (function (MasterData) {
        var CurrencyService;
        (function (CurrencyService) {
            CurrencyService.baseUrl = 'MasterData/Currency';
            var Methods;
            (function (Methods) {
            })(Methods = CurrencyService.Methods || (CurrencyService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                CurrencyService[x] = function (r, s, o) { return Q.serviceRequest(CurrencyService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = CurrencyService.baseUrl + '/' + x;
            });
        })(CurrencyService = MasterData.CurrencyService || (MasterData.CurrencyService = {}));
    })(MasterData = Mervalito.MasterData || (Mervalito.MasterData = {}));
})(Mervalito || (Mervalito = {}));
var Mervalito;
(function (Mervalito) {
    var MasterData;
    (function (MasterData) {
        var PaymentPeriodForm = (function (_super) {
            __extends(PaymentPeriodForm, _super);
            function PaymentPeriodForm() {
                return _super.apply(this, arguments) || this;
            }
            return PaymentPeriodForm;
        }(Serenity.PrefixedContext));
        PaymentPeriodForm.formKey = 'MasterData.PaymentPeriod';
        MasterData.PaymentPeriodForm = PaymentPeriodForm;
        [['Description', function () { return Serenity.StringEditor; }], ['Days', function () { return Serenity.IntegerEditor; }]].forEach(function (x) { return Object.defineProperty(PaymentPeriodForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(MasterData = Mervalito.MasterData || (Mervalito.MasterData = {}));
})(Mervalito || (Mervalito = {}));
var Mervalito;
(function (Mervalito) {
    var MasterData;
    (function (MasterData) {
        var PaymentPeriodRow;
        (function (PaymentPeriodRow) {
            PaymentPeriodRow.idProperty = 'IdPaymentPeriod';
            PaymentPeriodRow.nameProperty = 'Description';
            PaymentPeriodRow.localTextPrefix = 'MasterData.PaymentPeriod';
            var Fields;
            (function (Fields) {
            })(Fields = PaymentPeriodRow.Fields || (PaymentPeriodRow.Fields = {}));
            ['IdPaymentPeriod', 'Description', 'Days'].forEach(function (x) { return Fields[x] = x; });
        })(PaymentPeriodRow = MasterData.PaymentPeriodRow || (MasterData.PaymentPeriodRow = {}));
    })(MasterData = Mervalito.MasterData || (Mervalito.MasterData = {}));
})(Mervalito || (Mervalito = {}));
var Mervalito;
(function (Mervalito) {
    var MasterData;
    (function (MasterData) {
        var PaymentPeriodService;
        (function (PaymentPeriodService) {
            PaymentPeriodService.baseUrl = 'MasterData/PaymentPeriod';
            var Methods;
            (function (Methods) {
            })(Methods = PaymentPeriodService.Methods || (PaymentPeriodService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                PaymentPeriodService[x] = function (r, s, o) { return Q.serviceRequest(PaymentPeriodService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = PaymentPeriodService.baseUrl + '/' + x;
            });
        })(PaymentPeriodService = MasterData.PaymentPeriodService || (MasterData.PaymentPeriodService = {}));
    })(MasterData = Mervalito.MasterData || (Mervalito.MasterData = {}));
})(Mervalito || (Mervalito = {}));
var Mervalito;
(function (Mervalito) {
    var MasterData;
    (function (MasterData) {
        var RentTypeForm = (function (_super) {
            __extends(RentTypeForm, _super);
            function RentTypeForm() {
                return _super.apply(this, arguments) || this;
            }
            return RentTypeForm;
        }(Serenity.PrefixedContext));
        RentTypeForm.formKey = 'MasterData.RentType';
        MasterData.RentTypeForm = RentTypeForm;
        [['Description', function () { return Serenity.StringEditor; }]].forEach(function (x) { return Object.defineProperty(RentTypeForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(MasterData = Mervalito.MasterData || (Mervalito.MasterData = {}));
})(Mervalito || (Mervalito = {}));
var Mervalito;
(function (Mervalito) {
    var MasterData;
    (function (MasterData) {
        var RentTypeRow;
        (function (RentTypeRow) {
            RentTypeRow.idProperty = 'IdRentType';
            RentTypeRow.nameProperty = 'Description';
            RentTypeRow.localTextPrefix = 'MasterData.RentType';
            var Fields;
            (function (Fields) {
            })(Fields = RentTypeRow.Fields || (RentTypeRow.Fields = {}));
            ['IdRentType', 'Description'].forEach(function (x) { return Fields[x] = x; });
        })(RentTypeRow = MasterData.RentTypeRow || (MasterData.RentTypeRow = {}));
    })(MasterData = Mervalito.MasterData || (Mervalito.MasterData = {}));
})(Mervalito || (Mervalito = {}));
var Mervalito;
(function (Mervalito) {
    var MasterData;
    (function (MasterData) {
        var RentTypeService;
        (function (RentTypeService) {
            RentTypeService.baseUrl = 'MasterData/RentType';
            var Methods;
            (function (Methods) {
            })(Methods = RentTypeService.Methods || (RentTypeService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                RentTypeService[x] = function (r, s, o) { return Q.serviceRequest(RentTypeService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = RentTypeService.baseUrl + '/' + x;
            });
        })(RentTypeService = MasterData.RentTypeService || (MasterData.RentTypeService = {}));
    })(MasterData = Mervalito.MasterData || (Mervalito.MasterData = {}));
})(Mervalito || (Mervalito = {}));
var Mervalito;
(function (Mervalito) {
    var MasterData;
    (function (MasterData) {
        var TitleForm = (function (_super) {
            __extends(TitleForm, _super);
            function TitleForm() {
                return _super.apply(this, arguments) || this;
            }
            return TitleForm;
        }(Serenity.PrefixedContext));
        TitleForm.formKey = 'MasterData.Title';
        MasterData.TitleForm = TitleForm;
        [['AmortizationDate', function () { return Serenity.DateEditor; }], ['AmortizationAmmount', function () { return Serenity.DecimalEditor; }], ['RentDate', function () { return Serenity.DateEditor; }], ['RentAmmount', function () { return Serenity.DecimalEditor; }], ['Price', function () { return Serenity.DecimalEditor; }], ['IdPaymentPeriod', function () { return Serenity.IntegerEditor; }], ['StartDate', function () { return Serenity.DateEditor; }], ['EndDate', function () { return Serenity.DateEditor; }], ['IdCurrency', function () { return Serenity.IntegerEditor; }], ['IdTitleType', function () { return Serenity.IntegerEditor; }], ['Symbol', function () { return Serenity.StringEditor; }], ['Name', function () { return Serenity.StringEditor; }], ['IdBondType', function () { return Serenity.IntegerEditor; }], ['IdRentType', function () { return Serenity.IntegerEditor; }], ['Tir', function () { return Serenity.DecimalEditor; }], ['MinimumQuantity', function () { return Serenity.IntegerEditor; }], ['IdBondRating', function () { return Serenity.IntegerEditor; }]].forEach(function (x) { return Object.defineProperty(TitleForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(MasterData = Mervalito.MasterData || (Mervalito.MasterData = {}));
})(Mervalito || (Mervalito = {}));
var Mervalito;
(function (Mervalito) {
    var MasterData;
    (function (MasterData) {
        var TitleRow;
        (function (TitleRow) {
            TitleRow.idProperty = 'IdTitle';
            TitleRow.nameProperty = 'Symbol';
            TitleRow.localTextPrefix = 'MasterData.Title';
            var Fields;
            (function (Fields) {
            })(Fields = TitleRow.Fields || (TitleRow.Fields = {}));
            ['IdTitle', 'AmortizationDate', 'AmortizationAmmount', 'RentDate', 'RentAmmount', 'Price', 'IdPaymentPeriod', 'StartDate', 'EndDate', 'IdCurrency', 'IdTitleType', 'Symbol', 'Name', 'IdBondType', 'IdRentType', 'Tir', 'MinimumQuantity', 'IdBondRating', 'IdPaymentPeriodDescription', 'IdPaymentPeriodDays', 'IdCurrencyDescription', 'IdCurrencySymbol', 'IdCurrencyRate', 'IdTitleTypeDescription', 'IdBondTypeDescription', 'IdRentTypeDescription', 'IdBondRatingSymbol', 'IdBondRatingDescription'].forEach(function (x) { return Fields[x] = x; });
        })(TitleRow = MasterData.TitleRow || (MasterData.TitleRow = {}));
    })(MasterData = Mervalito.MasterData || (Mervalito.MasterData = {}));
})(Mervalito || (Mervalito = {}));
var Mervalito;
(function (Mervalito) {
    var MasterData;
    (function (MasterData) {
        var TitleService;
        (function (TitleService) {
            TitleService.baseUrl = 'MasterData/Title';
            var Methods;
            (function (Methods) {
            })(Methods = TitleService.Methods || (TitleService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                TitleService[x] = function (r, s, o) { return Q.serviceRequest(TitleService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = TitleService.baseUrl + '/' + x;
            });
        })(TitleService = MasterData.TitleService || (MasterData.TitleService = {}));
    })(MasterData = Mervalito.MasterData || (Mervalito.MasterData = {}));
})(Mervalito || (Mervalito = {}));
var Mervalito;
(function (Mervalito) {
    var MasterData;
    (function (MasterData) {
        var TitleTypeForm = (function (_super) {
            __extends(TitleTypeForm, _super);
            function TitleTypeForm() {
                return _super.apply(this, arguments) || this;
            }
            return TitleTypeForm;
        }(Serenity.PrefixedContext));
        TitleTypeForm.formKey = 'MasterData.TitleType';
        MasterData.TitleTypeForm = TitleTypeForm;
        [['Description', function () { return Serenity.StringEditor; }]].forEach(function (x) { return Object.defineProperty(TitleTypeForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(MasterData = Mervalito.MasterData || (Mervalito.MasterData = {}));
})(Mervalito || (Mervalito = {}));
var Mervalito;
(function (Mervalito) {
    var MasterData;
    (function (MasterData) {
        var TitleTypeRow;
        (function (TitleTypeRow) {
            TitleTypeRow.idProperty = 'IdTitleType';
            TitleTypeRow.nameProperty = 'Description';
            TitleTypeRow.localTextPrefix = 'MasterData.TitleType';
            var Fields;
            (function (Fields) {
            })(Fields = TitleTypeRow.Fields || (TitleTypeRow.Fields = {}));
            ['IdTitleType', 'Description'].forEach(function (x) { return Fields[x] = x; });
        })(TitleTypeRow = MasterData.TitleTypeRow || (MasterData.TitleTypeRow = {}));
    })(MasterData = Mervalito.MasterData || (Mervalito.MasterData = {}));
})(Mervalito || (Mervalito = {}));
var Mervalito;
(function (Mervalito) {
    var MasterData;
    (function (MasterData) {
        var TitleTypeService;
        (function (TitleTypeService) {
            TitleTypeService.baseUrl = 'MasterData/TitleType';
            var Methods;
            (function (Methods) {
            })(Methods = TitleTypeService.Methods || (TitleTypeService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                TitleTypeService[x] = function (r, s, o) { return Q.serviceRequest(TitleTypeService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = TitleTypeService.baseUrl + '/' + x;
            });
        })(TitleTypeService = MasterData.TitleTypeService || (MasterData.TitleTypeService = {}));
    })(MasterData = Mervalito.MasterData || (Mervalito.MasterData = {}));
})(Mervalito || (Mervalito = {}));
var Mervalito;
(function (Mervalito) {
    var Membership;
    (function (Membership) {
        var ChangePasswordForm = (function (_super) {
            __extends(ChangePasswordForm, _super);
            function ChangePasswordForm() {
                return _super.apply(this, arguments) || this;
            }
            return ChangePasswordForm;
        }(Serenity.PrefixedContext));
        ChangePasswordForm.formKey = 'Membership.ChangePassword';
        Membership.ChangePasswordForm = ChangePasswordForm;
        [['OldPassword', function () { return Serenity.PasswordEditor; }], ['NewPassword', function () { return Serenity.PasswordEditor; }], ['ConfirmPassword', function () { return Serenity.PasswordEditor; }]].forEach(function (x) { return Object.defineProperty(ChangePasswordForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Membership = Mervalito.Membership || (Mervalito.Membership = {}));
})(Mervalito || (Mervalito = {}));
var Mervalito;
(function (Mervalito) {
    var Membership;
    (function (Membership) {
        var ForgotPasswordForm = (function (_super) {
            __extends(ForgotPasswordForm, _super);
            function ForgotPasswordForm() {
                return _super.apply(this, arguments) || this;
            }
            return ForgotPasswordForm;
        }(Serenity.PrefixedContext));
        ForgotPasswordForm.formKey = 'Membership.ForgotPassword';
        Membership.ForgotPasswordForm = ForgotPasswordForm;
        [['Email', function () { return Serenity.EmailEditor; }]].forEach(function (x) { return Object.defineProperty(ForgotPasswordForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Membership = Mervalito.Membership || (Mervalito.Membership = {}));
})(Mervalito || (Mervalito = {}));
var Mervalito;
(function (Mervalito) {
    var Membership;
    (function (Membership) {
        var LoginForm = (function (_super) {
            __extends(LoginForm, _super);
            function LoginForm() {
                return _super.apply(this, arguments) || this;
            }
            return LoginForm;
        }(Serenity.PrefixedContext));
        LoginForm.formKey = 'Membership.Login';
        Membership.LoginForm = LoginForm;
        [['Username', function () { return Serenity.StringEditor; }], ['Password', function () { return Serenity.PasswordEditor; }]].forEach(function (x) { return Object.defineProperty(LoginForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Membership = Mervalito.Membership || (Mervalito.Membership = {}));
})(Mervalito || (Mervalito = {}));
var Mervalito;
(function (Mervalito) {
    var Membership;
    (function (Membership) {
        var ResetPasswordForm = (function (_super) {
            __extends(ResetPasswordForm, _super);
            function ResetPasswordForm() {
                return _super.apply(this, arguments) || this;
            }
            return ResetPasswordForm;
        }(Serenity.PrefixedContext));
        ResetPasswordForm.formKey = 'Membership.ResetPassword';
        Membership.ResetPasswordForm = ResetPasswordForm;
        [['NewPassword', function () { return Serenity.PasswordEditor; }], ['ConfirmPassword', function () { return Serenity.PasswordEditor; }]].forEach(function (x) { return Object.defineProperty(ResetPasswordForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Membership = Mervalito.Membership || (Mervalito.Membership = {}));
})(Mervalito || (Mervalito = {}));
var Mervalito;
(function (Mervalito) {
    var Membership;
    (function (Membership) {
        var SignUpForm = (function (_super) {
            __extends(SignUpForm, _super);
            function SignUpForm() {
                return _super.apply(this, arguments) || this;
            }
            return SignUpForm;
        }(Serenity.PrefixedContext));
        SignUpForm.formKey = 'Membership.SignUp';
        Membership.SignUpForm = SignUpForm;
        [['DisplayName', function () { return Serenity.StringEditor; }], ['Email', function () { return Serenity.EmailEditor; }], ['ConfirmEmail', function () { return Serenity.EmailEditor; }], ['Password', function () { return Serenity.PasswordEditor; }], ['ConfirmPassword', function () { return Serenity.PasswordEditor; }]].forEach(function (x) { return Object.defineProperty(SignUpForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Membership = Mervalito.Membership || (Mervalito.Membership = {}));
})(Mervalito || (Mervalito = {}));
var Mervalito;
(function (Mervalito) {
    var MutualFund;
    (function (MutualFund) {
        var CompanyManagerForm = (function (_super) {
            __extends(CompanyManagerForm, _super);
            function CompanyManagerForm() {
                return _super.apply(this, arguments) || this;
            }
            return CompanyManagerForm;
        }(Serenity.PrefixedContext));
        CompanyManagerForm.formKey = 'MutualFund.CompanyManager';
        MutualFund.CompanyManagerForm = CompanyManagerForm;
        [['Description', function () { return Serenity.StringEditor; }], ['ExternalId', function () { return Serenity.IntegerEditor; }]].forEach(function (x) { return Object.defineProperty(CompanyManagerForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(MutualFund = Mervalito.MutualFund || (Mervalito.MutualFund = {}));
})(Mervalito || (Mervalito = {}));
var Mervalito;
(function (Mervalito) {
    var MutualFund;
    (function (MutualFund) {
        var CompanyManagerRow;
        (function (CompanyManagerRow) {
            CompanyManagerRow.idProperty = 'IdCompanyManager';
            CompanyManagerRow.nameProperty = 'Description';
            CompanyManagerRow.localTextPrefix = 'MutualFund.CompanyManager';
            var Fields;
            (function (Fields) {
            })(Fields = CompanyManagerRow.Fields || (CompanyManagerRow.Fields = {}));
            ['IdCompanyManager', 'Description', 'ExternalId'].forEach(function (x) { return Fields[x] = x; });
        })(CompanyManagerRow = MutualFund.CompanyManagerRow || (MutualFund.CompanyManagerRow = {}));
    })(MutualFund = Mervalito.MutualFund || (Mervalito.MutualFund = {}));
})(Mervalito || (Mervalito = {}));
var Mervalito;
(function (Mervalito) {
    var MutualFund;
    (function (MutualFund) {
        var CompanyManagerService;
        (function (CompanyManagerService) {
            CompanyManagerService.baseUrl = 'MutualFund/CompanyManager';
            var Methods;
            (function (Methods) {
            })(Methods = CompanyManagerService.Methods || (CompanyManagerService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                CompanyManagerService[x] = function (r, s, o) { return Q.serviceRequest(CompanyManagerService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = CompanyManagerService.baseUrl + '/' + x;
            });
        })(CompanyManagerService = MutualFund.CompanyManagerService || (MutualFund.CompanyManagerService = {}));
    })(MutualFund = Mervalito.MutualFund || (Mervalito.MutualFund = {}));
})(Mervalito || (Mervalito = {}));
var Mervalito;
(function (Mervalito) {
    var MutualFund;
    (function (MutualFund) {
        var InvestmentHorizonForm = (function (_super) {
            __extends(InvestmentHorizonForm, _super);
            function InvestmentHorizonForm() {
                return _super.apply(this, arguments) || this;
            }
            return InvestmentHorizonForm;
        }(Serenity.PrefixedContext));
        InvestmentHorizonForm.formKey = 'MutualFund.InvestmentHorizon';
        MutualFund.InvestmentHorizonForm = InvestmentHorizonForm;
        [['Description', function () { return Serenity.StringEditor; }]].forEach(function (x) { return Object.defineProperty(InvestmentHorizonForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(MutualFund = Mervalito.MutualFund || (Mervalito.MutualFund = {}));
})(Mervalito || (Mervalito = {}));
var Mervalito;
(function (Mervalito) {
    var MutualFund;
    (function (MutualFund) {
        var InvestmentHorizonRow;
        (function (InvestmentHorizonRow) {
            InvestmentHorizonRow.idProperty = 'IdInvestmentHorizon';
            InvestmentHorizonRow.nameProperty = 'Description';
            InvestmentHorizonRow.localTextPrefix = 'MutualFund.InvestmentHorizon';
            var Fields;
            (function (Fields) {
            })(Fields = InvestmentHorizonRow.Fields || (InvestmentHorizonRow.Fields = {}));
            ['IdInvestmentHorizon', 'Description'].forEach(function (x) { return Fields[x] = x; });
        })(InvestmentHorizonRow = MutualFund.InvestmentHorizonRow || (MutualFund.InvestmentHorizonRow = {}));
    })(MutualFund = Mervalito.MutualFund || (Mervalito.MutualFund = {}));
})(Mervalito || (Mervalito = {}));
var Mervalito;
(function (Mervalito) {
    var MutualFund;
    (function (MutualFund) {
        var InvestmentHorizonService;
        (function (InvestmentHorizonService) {
            InvestmentHorizonService.baseUrl = 'MutualFund/InvestmentHorizon';
            var Methods;
            (function (Methods) {
            })(Methods = InvestmentHorizonService.Methods || (InvestmentHorizonService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                InvestmentHorizonService[x] = function (r, s, o) { return Q.serviceRequest(InvestmentHorizonService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = InvestmentHorizonService.baseUrl + '/' + x;
            });
        })(InvestmentHorizonService = MutualFund.InvestmentHorizonService || (MutualFund.InvestmentHorizonService = {}));
    })(MutualFund = Mervalito.MutualFund || (Mervalito.MutualFund = {}));
})(Mervalito || (Mervalito = {}));
var Mervalito;
(function (Mervalito) {
    var MutualFund;
    (function (MutualFund) {
        var MutualFundForm = (function (_super) {
            __extends(MutualFundForm, _super);
            function MutualFundForm() {
                return _super.apply(this, arguments) || this;
            }
            return MutualFundForm;
        }(Serenity.PrefixedContext));
        MutualFundForm.formKey = 'MutualFund.MutualFund';
        MutualFund.MutualFundForm = MutualFundForm;
        [['Name', function () { return Serenity.StringEditor; }], ['Portion', function () { return Serenity.DecimalEditor; }], ['MinimumInvestment', function () { return Serenity.DecimalEditor; }], ['SettlementDeadline', function () { return Serenity.IntegerEditor; }], ['IdCurrency', function () { return Serenity.IntegerEditor; }], ['IdCompanyManager', function () { return Serenity.IntegerEditor; }], ['IdInvestmentHorizon', function () { return Serenity.IntegerEditor; }], ['StartDate', function () { return Serenity.DateEditor; }], ['LowerDuration', function () { return Serenity.IntegerEditor; }], ['UpperDuration', function () { return Serenity.IntegerEditor; }]].forEach(function (x) { return Object.defineProperty(MutualFundForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(MutualFund = Mervalito.MutualFund || (Mervalito.MutualFund = {}));
})(Mervalito || (Mervalito = {}));
var Mervalito;
(function (Mervalito) {
    var MutualFund;
    (function (MutualFund) {
        var MutualFundRow;
        (function (MutualFundRow) {
            MutualFundRow.idProperty = 'IdMutualFund';
            MutualFundRow.nameProperty = 'Name';
            MutualFundRow.localTextPrefix = 'MutualFund.MutualFund';
            var Fields;
            (function (Fields) {
            })(Fields = MutualFundRow.Fields || (MutualFundRow.Fields = {}));
            ['IdMutualFund', 'Name', 'Portion', 'MinimumInvestment', 'SettlementDeadline', 'IdCurrency', 'IdCompanyManager', 'IdInvestmentHorizon', 'StartDate', 'LowerDuration', 'UpperDuration', 'IdCurrencyDescription', 'IdCurrencySymbol', 'IdCompanyManagerDescription', 'IdInvestmentHorizonDescription'].forEach(function (x) { return Fields[x] = x; });
        })(MutualFundRow = MutualFund.MutualFundRow || (MutualFund.MutualFundRow = {}));
    })(MutualFund = Mervalito.MutualFund || (Mervalito.MutualFund = {}));
})(Mervalito || (Mervalito = {}));
var Mervalito;
(function (Mervalito) {
    var MutualFund;
    (function (MutualFund) {
        var MutualFundService;
        (function (MutualFundService) {
            MutualFundService.baseUrl = 'MutualFund/MutualFund';
            var Methods;
            (function (Methods) {
            })(Methods = MutualFundService.Methods || (MutualFundService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                MutualFundService[x] = function (r, s, o) { return Q.serviceRequest(MutualFundService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = MutualFundService.baseUrl + '/' + x;
            });
        })(MutualFundService = MutualFund.MutualFundService || (MutualFund.MutualFundService = {}));
    })(MutualFund = Mervalito.MutualFund || (Mervalito.MutualFund = {}));
})(Mervalito || (Mervalito = {}));
var Mervalito;
(function (Mervalito) {
    var Administration;
    (function (Administration) {
        var LanguageDialog = (function (_super) {
            __extends(LanguageDialog, _super);
            function LanguageDialog() {
                var _this = _super.apply(this, arguments) || this;
                _this.form = new Administration.LanguageForm(_this.idPrefix);
                return _this;
            }
            LanguageDialog.prototype.getFormKey = function () { return Administration.LanguageForm.formKey; };
            LanguageDialog.prototype.getIdProperty = function () { return Administration.LanguageRow.idProperty; };
            LanguageDialog.prototype.getLocalTextPrefix = function () { return Administration.LanguageRow.localTextPrefix; };
            LanguageDialog.prototype.getNameProperty = function () { return Administration.LanguageRow.nameProperty; };
            LanguageDialog.prototype.getService = function () { return Administration.LanguageService.baseUrl; };
            return LanguageDialog;
        }(Serenity.EntityDialog));
        LanguageDialog = __decorate([
            Serenity.Decorators.registerClass()
        ], LanguageDialog);
        Administration.LanguageDialog = LanguageDialog;
    })(Administration = Mervalito.Administration || (Mervalito.Administration = {}));
})(Mervalito || (Mervalito = {}));
var Mervalito;
(function (Mervalito) {
    var Administration;
    (function (Administration) {
        var LanguageGrid = (function (_super) {
            __extends(LanguageGrid, _super);
            function LanguageGrid(container) {
                return _super.call(this, container) || this;
            }
            LanguageGrid.prototype.getColumnsKey = function () { return "Administration.Language"; };
            LanguageGrid.prototype.getDialogType = function () { return Administration.LanguageDialog; };
            LanguageGrid.prototype.getIdProperty = function () { return Administration.LanguageRow.idProperty; };
            LanguageGrid.prototype.getLocalTextPrefix = function () { return Administration.LanguageRow.localTextPrefix; };
            LanguageGrid.prototype.getService = function () { return Administration.LanguageService.baseUrl; };
            LanguageGrid.prototype.getDefaultSortBy = function () {
                return [Administration.LanguageRow.Fields.LanguageName];
            };
            return LanguageGrid;
        }(Serenity.EntityGrid));
        LanguageGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], LanguageGrid);
        Administration.LanguageGrid = LanguageGrid;
    })(Administration = Mervalito.Administration || (Mervalito.Administration = {}));
})(Mervalito || (Mervalito = {}));
var Mervalito;
(function (Mervalito) {
    var Administration;
    (function (Administration) {
        var RoleDialog = (function (_super) {
            __extends(RoleDialog, _super);
            function RoleDialog() {
                var _this = _super.apply(this, arguments) || this;
                _this.form = new Administration.RoleForm(_this.idPrefix);
                return _this;
            }
            RoleDialog.prototype.getFormKey = function () { return Administration.RoleForm.formKey; };
            RoleDialog.prototype.getIdProperty = function () { return Administration.RoleRow.idProperty; };
            RoleDialog.prototype.getLocalTextPrefix = function () { return Administration.RoleRow.localTextPrefix; };
            RoleDialog.prototype.getNameProperty = function () { return Administration.RoleRow.nameProperty; };
            RoleDialog.prototype.getService = function () { return Administration.RoleService.baseUrl; };
            RoleDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getToolbarButtons.call(this);
                buttons.push({
                    title: Q.text('Site.RolePermissionDialog.EditButton'),
                    cssClass: 'edit-permissions-button',
                    icon: 'icon-lock-open text-green',
                    onClick: function () {
                        new Administration.RolePermissionDialog({
                            roleID: _this.entity.RoleId,
                            title: _this.entity.RoleName
                        }).dialogOpen();
                    }
                });
                return buttons;
            };
            RoleDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                this.toolbar.findButton("edit-permissions-button").toggleClass("disabled", this.isNewOrDeleted());
            };
            return RoleDialog;
        }(Serenity.EntityDialog));
        RoleDialog = __decorate([
            Serenity.Decorators.registerClass()
        ], RoleDialog);
        Administration.RoleDialog = RoleDialog;
    })(Administration = Mervalito.Administration || (Mervalito.Administration = {}));
})(Mervalito || (Mervalito = {}));
var Mervalito;
(function (Mervalito) {
    var Administration;
    (function (Administration) {
        var RoleGrid = (function (_super) {
            __extends(RoleGrid, _super);
            function RoleGrid(container) {
                return _super.call(this, container) || this;
            }
            RoleGrid.prototype.getColumnsKey = function () { return "Administration.Role"; };
            RoleGrid.prototype.getDialogType = function () { return Administration.RoleDialog; };
            RoleGrid.prototype.getIdProperty = function () { return Administration.RoleRow.idProperty; };
            RoleGrid.prototype.getLocalTextPrefix = function () { return Administration.RoleRow.localTextPrefix; };
            RoleGrid.prototype.getService = function () { return Administration.RoleService.baseUrl; };
            RoleGrid.prototype.getDefaultSortBy = function () {
                return [Administration.RoleRow.Fields.RoleName];
            };
            return RoleGrid;
        }(Serenity.EntityGrid));
        RoleGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], RoleGrid);
        Administration.RoleGrid = RoleGrid;
    })(Administration = Mervalito.Administration || (Mervalito.Administration = {}));
})(Mervalito || (Mervalito = {}));
var Mervalito;
(function (Mervalito) {
    var Administration;
    (function (Administration) {
        var RolePermissionDialog = (function (_super) {
            __extends(RolePermissionDialog, _super);
            function RolePermissionDialog(opt) {
                var _this = _super.call(this, opt) || this;
                _this.permissions = new Administration.PermissionCheckEditor(_this.byId('Permissions'), {
                    showRevoke: false
                });
                Administration.RolePermissionService.List({
                    RoleID: _this.options.roleID,
                    Module: null,
                    Submodule: null
                }, function (response) {
                    _this.permissions.set_value(response.Entities.map(function (x) { return ({ PermissionKey: x }); }));
                });
                return _this;
            }
            RolePermissionDialog.prototype.getDialogOptions = function () {
                var _this = this;
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.buttons = [
                    {
                        text: Q.text('Dialogs.OkButton'),
                        click: function (e) {
                            Administration.RolePermissionService.Update({
                                RoleID: _this.options.roleID,
                                Permissions: _this.permissions.get_value().map(function (x) { return x.PermissionKey; }),
                                Module: null,
                                Submodule: null
                            }, function (response) {
                                _this.dialogClose();
                                window.setTimeout(function () { return Q.notifySuccess(Q.text('Site.RolePermissionDialog.SaveSuccess')); }, 0);
                            });
                        }
                    }, {
                        text: Q.text('Dialogs.CancelButton'),
                        click: function () { return _this.dialogClose(); }
                    }
                ];
                opt.title = Q.format(Q.text('Site.RolePermissionDialog.DialogTitle'), this.options.title);
                return opt;
            };
            RolePermissionDialog.prototype.getTemplate = function () {
                return '<div id="~_Permissions"></div>';
            };
            return RolePermissionDialog;
        }(Serenity.TemplatedDialog));
        RolePermissionDialog = __decorate([
            Serenity.Decorators.registerClass()
        ], RolePermissionDialog);
        Administration.RolePermissionDialog = RolePermissionDialog;
    })(Administration = Mervalito.Administration || (Mervalito.Administration = {}));
})(Mervalito || (Mervalito = {}));
var Mervalito;
(function (Mervalito) {
    var Administration;
    (function (Administration) {
        var SettingsDialog = (function (_super) {
            __extends(SettingsDialog, _super);
            function SettingsDialog() {
                var _this = _super.apply(this, arguments) || this;
                _this.form = new Administration.SettingsForm(_this.idPrefix);
                return _this;
            }
            SettingsDialog.prototype.getFormKey = function () { return Administration.SettingsForm.formKey; };
            SettingsDialog.prototype.getIdProperty = function () { return Administration.SettingsRow.idProperty; };
            SettingsDialog.prototype.getLocalTextPrefix = function () { return Administration.SettingsRow.localTextPrefix; };
            SettingsDialog.prototype.getNameProperty = function () { return Administration.SettingsRow.nameProperty; };
            SettingsDialog.prototype.getService = function () { return Administration.SettingsService.baseUrl; };
            SettingsDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                this.deleteButton.remove();
            };
            return SettingsDialog;
        }(Serenity.EntityDialog));
        SettingsDialog = __decorate([
            Serenity.Decorators.registerClass(),
            Serenity.Decorators.responsive()
        ], SettingsDialog);
        Administration.SettingsDialog = SettingsDialog;
    })(Administration = Mervalito.Administration || (Mervalito.Administration = {}));
})(Mervalito || (Mervalito = {}));
var Mervalito;
(function (Mervalito) {
    var Common;
    (function (Common) {
        var GridEditorBase = (function (_super) {
            __extends(GridEditorBase, _super);
            function GridEditorBase(container) {
                var _this = _super.call(this, container) || this;
                _this.nextId = 1;
                return _this;
            }
            GridEditorBase.prototype.getIdProperty = function () { return "__id"; };
            GridEditorBase.prototype.id = function (entity) {
                return entity[this.getIdProperty()];
            };
            GridEditorBase.prototype.getNextId = function () {
                return "`" + this.nextId++;
            };
            GridEditorBase.prototype.setNewId = function (entity) {
                entity[this.getIdProperty()] = this.getNextId();
            };
            GridEditorBase.prototype.save = function (opt, callback) {
                var _this = this;
                var request = opt.request;
                var row = Q.deepClone(request.Entity);
                var id = this.id(row);
                if (id == null) {
                    row[this.getIdProperty()] = this.getNextId();
                }
                if (!this.validateEntity(row, id)) {
                    return;
                }
                var items = this.view.getItems().slice();
                if (id == null) {
                    items.push(row);
                }
                else {
                    var index = Q.indexOf(items, function (x) { return _this.id(x) === id; });
                    items[index] = Q.deepClone({}, items[index], row);
                }
                this.setEntities(items);
                callback({});
            };
            GridEditorBase.prototype.deleteEntity = function (id) {
                this.view.deleteItem(id);
                return true;
            };
            GridEditorBase.prototype.validateEntity = function (row, id) {
                return true;
            };
            GridEditorBase.prototype.setEntities = function (items) {
                this.view.setItems(items, true);
            };
            GridEditorBase.prototype.getNewEntity = function () {
                return {};
            };
            GridEditorBase.prototype.getButtons = function () {
                var _this = this;
                return [{
                        title: this.getAddButtonCaption(),
                        cssClass: 'add-button',
                        onClick: function () {
                            _this.createEntityDialog(_this.getItemType(), function (dlg) {
                                var dialog = dlg;
                                dialog.onSave = function (opt, callback) { return _this.save(opt, callback); };
                                dialog.loadEntityAndOpenDialog(_this.getNewEntity());
                            });
                        }
                    }];
            };
            GridEditorBase.prototype.editItem = function (entityOrId) {
                var _this = this;
                var id = entityOrId;
                var item = this.view.getItemById(id);
                this.createEntityDialog(this.getItemType(), function (dlg) {
                    var dialog = dlg;
                    dialog.onDelete = function (opt, callback) {
                        if (!_this.deleteEntity(id)) {
                            return;
                        }
                        callback({});
                    };
                    dialog.onSave = function (opt, callback) { return _this.save(opt, callback); };
                    dialog.loadEntityAndOpenDialog(item);
                });
                ;
            };
            GridEditorBase.prototype.getEditValue = function (property, target) {
                target[property.name] = this.value;
            };
            GridEditorBase.prototype.setEditValue = function (source, property) {
                this.value = source[property.name];
            };
            Object.defineProperty(GridEditorBase.prototype, "value", {
                get: function () {
                    var p = this.getIdProperty();
                    return this.view.getItems().map(function (x) {
                        var y = Q.deepClone(x);
                        var id = y[p];
                        if (id && id.toString().charAt(0) == '`')
                            delete y[p];
                        return y;
                    });
                },
                set: function (value) {
                    var _this = this;
                    var p = this.getIdProperty();
                    this.view.setItems((value || []).map(function (x) {
                        var y = Q.deepClone(x);
                        if (y[p] == null)
                            y[p] = "`" + _this.getNextId();
                        return y;
                    }), true);
                },
                enumerable: true,
                configurable: true
            });
            GridEditorBase.prototype.getGridCanLoad = function () {
                return false;
            };
            GridEditorBase.prototype.usePager = function () {
                return false;
            };
            GridEditorBase.prototype.getInitialTitle = function () {
                return null;
            };
            GridEditorBase.prototype.createQuickSearchInput = function () {
            };
            return GridEditorBase;
        }(Serenity.EntityGrid));
        GridEditorBase = __decorate([
            Serenity.Decorators.registerClass([Serenity.IGetEditValue, Serenity.ISetEditValue]),
            Serenity.Decorators.editor(),
            Serenity.Decorators.element("<div/>")
        ], GridEditorBase);
        Common.GridEditorBase = GridEditorBase;
    })(Common = Mervalito.Common || (Mervalito.Common = {}));
})(Mervalito || (Mervalito = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var Mervalito;
(function (Mervalito) {
    var Administration;
    (function (Administration) {
        var SettingsEditor = (function (_super) {
            __extends(SettingsEditor, _super);
            function SettingsEditor(container) {
                return _super.call(this, container) || this;
            }
            SettingsEditor.prototype.getColumnsKey = function () { return 'Administration.Settings'; };
            SettingsEditor.prototype.getDialogType = function () { return Administration.SettingsEditorDialog; };
            SettingsEditor.prototype.getLocalTextPrefix = function () { return Administration.SettingsRow.localTextPrefix; };
            return SettingsEditor;
        }(Mervalito.Common.GridEditorBase));
        SettingsEditor = __decorate([
            Serenity.Decorators.registerClass()
        ], SettingsEditor);
        Administration.SettingsEditor = SettingsEditor;
    })(Administration = Mervalito.Administration || (Mervalito.Administration = {}));
})(Mervalito || (Mervalito = {}));
var Mervalito;
(function (Mervalito) {
    var Common;
    (function (Common) {
        var GridEditorDialog = (function (_super) {
            __extends(GridEditorDialog, _super);
            function GridEditorDialog() {
                return _super.apply(this, arguments) || this;
            }
            GridEditorDialog.prototype.getIdProperty = function () { return "__id"; };
            GridEditorDialog.prototype.destroy = function () {
                this.onSave = null;
                this.onDelete = null;
                _super.prototype.destroy.call(this);
            };
            GridEditorDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                // apply changes button doesn't work properly with in-memory grids yet
                if (this.applyChangesButton) {
                    this.applyChangesButton.hide();
                }
            };
            GridEditorDialog.prototype.saveHandler = function (options, callback) {
                this.onSave && this.onSave(options, callback);
            };
            GridEditorDialog.prototype.deleteHandler = function (options, callback) {
                this.onDelete && this.onDelete(options, callback);
            };
            return GridEditorDialog;
        }(Serenity.EntityDialog));
        GridEditorDialog = __decorate([
            Serenity.Decorators.registerClass()
        ], GridEditorDialog);
        Common.GridEditorDialog = GridEditorDialog;
    })(Common = Mervalito.Common || (Mervalito.Common = {}));
})(Mervalito || (Mervalito = {}));
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
var Mervalito;
(function (Mervalito) {
    var Administration;
    (function (Administration) {
        var SettingsEditorDialog = (function (_super) {
            __extends(SettingsEditorDialog, _super);
            function SettingsEditorDialog() {
                var _this = _super.apply(this, arguments) || this;
                _this.form = new Administration.SettingsForm(_this.idPrefix);
                return _this;
            }
            SettingsEditorDialog.prototype.getFormKey = function () { return Administration.SettingsForm.formKey; };
            SettingsEditorDialog.prototype.getLocalTextPrefix = function () { return Administration.SettingsRow.localTextPrefix; };
            SettingsEditorDialog.prototype.getNameProperty = function () { return Administration.SettingsRow.nameProperty; };
            return SettingsEditorDialog;
        }(Mervalito.Common.GridEditorDialog));
        SettingsEditorDialog = __decorate([
            Serenity.Decorators.registerClass(),
            Serenity.Decorators.responsive()
        ], SettingsEditorDialog);
        Administration.SettingsEditorDialog = SettingsEditorDialog;
    })(Administration = Mervalito.Administration || (Mervalito.Administration = {}));
})(Mervalito || (Mervalito = {}));
var Mervalito;
(function (Mervalito) {
    var Administration;
    (function (Administration) {
        var SettingsGrid = (function (_super) {
            __extends(SettingsGrid, _super);
            function SettingsGrid(container) {
                return _super.call(this, container) || this;
            }
            SettingsGrid.prototype.getColumnsKey = function () { return 'Administration.Settings'; };
            SettingsGrid.prototype.getDialogType = function () { return Administration.SettingsDialog; };
            SettingsGrid.prototype.getIdProperty = function () { return Administration.SettingsRow.idProperty; };
            SettingsGrid.prototype.getLocalTextPrefix = function () { return Administration.SettingsRow.localTextPrefix; };
            SettingsGrid.prototype.getService = function () { return Administration.SettingsService.baseUrl; };
            SettingsGrid.prototype.getButtons = function () {
                return [];
            };
            return SettingsGrid;
        }(Serenity.EntityGrid));
        SettingsGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], SettingsGrid);
        Administration.SettingsGrid = SettingsGrid;
    })(Administration = Mervalito.Administration || (Mervalito.Administration = {}));
})(Mervalito || (Mervalito = {}));
var Mervalito;
(function (Mervalito) {
    var Administration;
    (function (Administration) {
        var TranslationGrid = (function (_super) {
            __extends(TranslationGrid, _super);
            function TranslationGrid(container) {
                var _this = _super.call(this, container) || this;
                _this.element.on('keyup.' + _this.uniqueName + ' change.' + _this.uniqueName, 'input.custom-text', function (e) {
                    var value = Q.trimToNull($(e.target).val());
                    if (value === '') {
                        value = null;
                    }
                    _this.view.getItemById($(e.target).data('key')).CustomText = value;
                    _this.hasChanges = true;
                });
                return _this;
            }
            TranslationGrid.prototype.getIdProperty = function () { return "Key"; };
            TranslationGrid.prototype.getLocalTextPrefix = function () { return "Administration.Translation"; };
            TranslationGrid.prototype.getService = function () { return Administration.TranslationService.baseUrl; };
            TranslationGrid.prototype.onClick = function (e, row, cell) {
                var _this = this;
                _super.prototype.onClick.call(this, e, row, cell);
                if (e.isDefaultPrevented()) {
                    return;
                }
                var item = this.itemAt(row);
                var done;
                if ($(e.target).hasClass('source-text')) {
                    e.preventDefault();
                    done = function () {
                        item.CustomText = item.SourceText;
                        _this.view.updateItem(item.Key, item);
                        _this.hasChanges = true;
                    };
                    if (Q.isTrimmedEmpty(item.CustomText) ||
                        (Q.trimToEmpty(item.CustomText) === Q.trimToEmpty(item.SourceText))) {
                        done();
                        return;
                    }
                    Q.confirm(Q.text('Db.Administration.Translation.OverrideConfirmation'), done);
                    return;
                }
                if ($(e.target).hasClass('target-text')) {
                    e.preventDefault();
                    done = function () {
                        item.CustomText = item.TargetText;
                        _this.view.updateItem(item.Key, item);
                        _this.hasChanges = true;
                    };
                    if (Q.isTrimmedEmpty(item.CustomText) ||
                        (Q.trimToEmpty(item.CustomText) === Q.trimToEmpty(item.TargetText))) {
                        done();
                        return;
                    }
                    Q.confirm(Q.text('Db.Administration.Translation.OverrideConfirmation'), done);
                    return;
                }
            };
            TranslationGrid.prototype.getColumns = function () {
                var columns = [];
                columns.push({ field: 'Key', width: 300, sortable: false });
                columns.push({
                    field: 'SourceText',
                    width: 300,
                    sortable: false,
                    format: function (ctx) {
                        return Q.outerHtml($('<a/>')
                            .addClass('source-text')
                            .text(ctx.value || ''));
                    }
                });
                columns.push({
                    field: 'CustomText',
                    width: 300,
                    sortable: false,
                    format: function (ctx) { return Q.outerHtml($('<input/>')
                        .addClass('custom-text')
                        .attr('value', ctx.value)
                        .attr('type', 'text')
                        .attr('data-key', ctx.item.Key)); }
                });
                columns.push({
                    field: 'TargetText',
                    width: 300,
                    sortable: false,
                    format: function (ctx) { return Q.outerHtml($('<a/>')
                        .addClass('target-text')
                        .text(ctx.value || '')); }
                });
                return columns;
            };
            TranslationGrid.prototype.createToolbarExtensions = function () {
                var _this = this;
                _super.prototype.createToolbarExtensions.call(this);
                var opt = {
                    lookupKey: 'Administration.Language'
                };
                this.sourceLanguage = Serenity.Widget.create({
                    type: Serenity.LookupEditor,
                    element: function (el) { return el.appendTo(_this.toolbar.element).attr('placeholder', '--- ' +
                        Q.text('Db.Administration.Translation.SourceLanguage') + ' ---'); },
                    options: opt
                });
                this.sourceLanguage.changeSelect2(function (e) {
                    if (_this.hasChanges) {
                        _this.saveChanges(_this.targetLanguageKey).then(function () { return _this.refresh(); });
                    }
                    else {
                        _this.refresh();
                    }
                });
                this.targetLanguage = Serenity.Widget.create({
                    type: Serenity.LookupEditor,
                    element: function (el) { return el.appendTo(_this.toolbar.element).attr('placeholder', '--- ' +
                        Q.text('Db.Administration.Translation.TargetLanguage') + ' ---'); },
                    options: opt
                });
                this.targetLanguage.changeSelect2(function (e) {
                    if (_this.hasChanges) {
                        _this.saveChanges(_this.targetLanguageKey).then(function () { return _this.refresh(); });
                    }
                    else {
                        _this.refresh();
                    }
                });
            };
            TranslationGrid.prototype.saveChanges = function (language) {
                var _this = this;
                var translations = {};
                for (var _i = 0, _a = this.getItems(); _i < _a.length; _i++) {
                    var item = _a[_i];
                    translations[item.Key] = item.CustomText;
                }
                return RSVP.resolve(Administration.TranslationService.Update({
                    TargetLanguageID: language,
                    Translations: translations
                })).then(function () {
                    _this.hasChanges = false;
                    language = Q.trimToNull(language) || 'invariant';
                    Q.notifySuccess('User translations in "' + language +
                        '" language are saved to "user.texts.' +
                        language + '.json" ' + 'file under "~/App_Data/texts/"', '');
                });
            };
            TranslationGrid.prototype.onViewSubmit = function () {
                var request = this.view.params;
                request.SourceLanguageID = this.sourceLanguage.value;
                this.targetLanguageKey = this.targetLanguage.value || '';
                request.TargetLanguageID = this.targetLanguageKey;
                this.hasChanges = false;
                return _super.prototype.onViewSubmit.call(this);
            };
            TranslationGrid.prototype.getButtons = function () {
                var _this = this;
                return [{
                        title: Q.text('Db.Administration.Translation.SaveChangesButton'),
                        onClick: function (e) { return _this.saveChanges(_this.targetLanguageKey).then(function () { return _this.refresh(); }); },
                        cssClass: 'apply-changes-button'
                    }];
            };
            TranslationGrid.prototype.createQuickSearchInput = function () {
                var _this = this;
                Serenity.GridUtils.addQuickSearchInputCustom(this.toolbar.element, function (field, searchText) {
                    _this.searchText = searchText;
                    _this.view.setItems(_this.view.getItems(), true);
                });
            };
            TranslationGrid.prototype.onViewFilter = function (item) {
                if (!_super.prototype.onViewFilter.call(this, item)) {
                    return false;
                }
                if (!this.searchText) {
                    return true;
                }
                var sd = Select2.util.stripDiacritics;
                var searching = sd(this.searchText).toLowerCase();
                function match(str) {
                    if (!str)
                        return false;
                    return str.toLowerCase().indexOf(searching) >= 0;
                }
                return Q.isEmptyOrNull(searching) || match(item.Key) || match(item.SourceText) ||
                    match(item.TargetText) || match(item.CustomText);
            };
            TranslationGrid.prototype.usePager = function () {
                return false;
            };
            return TranslationGrid;
        }(Serenity.EntityGrid));
        TranslationGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], TranslationGrid);
        Administration.TranslationGrid = TranslationGrid;
    })(Administration = Mervalito.Administration || (Mervalito.Administration = {}));
})(Mervalito || (Mervalito = {}));
var Mervalito;
(function (Mervalito) {
    var Authorization;
    (function (Authorization) {
        Object.defineProperty(Authorization, 'userDefinition', {
            get: function () {
                return Q.getRemoteData('UserData');
            }
        });
        function hasPermission(permissionKey) {
            var ud = Authorization.userDefinition;
            return ud.Username === 'admin' || !!ud.Permissions[permissionKey];
        }
        Authorization.hasPermission = hasPermission;
    })(Authorization = Mervalito.Authorization || (Mervalito.Authorization = {}));
})(Mervalito || (Mervalito = {}));
var Mervalito;
(function (Mervalito) {
    var Administration;
    (function (Administration) {
        var UserDialog = (function (_super) {
            __extends(UserDialog, _super);
            function UserDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Administration.UserForm(_this.idPrefix);
                _this.form.Password.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.Password.value.length < 7)
                        return "Password must be at least 7 characters!";
                });
                _this.form.PasswordConfirm.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.Password.value != _this.form.PasswordConfirm.value)
                        return "The passwords entered doesn't match!";
                });
                return _this;
            }
            UserDialog.prototype.getFormKey = function () { return Administration.UserForm.formKey; };
            UserDialog.prototype.getIdProperty = function () { return Administration.UserRow.idProperty; };
            UserDialog.prototype.getIsActiveProperty = function () { return Administration.UserRow.isActiveProperty; };
            UserDialog.prototype.getLocalTextPrefix = function () { return Administration.UserRow.localTextPrefix; };
            UserDialog.prototype.getNameProperty = function () { return Administration.UserRow.nameProperty; };
            UserDialog.prototype.getService = function () { return Administration.UserService.baseUrl; };
            UserDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getToolbarButtons.call(this);
                buttons.push({
                    title: Q.text('Site.UserDialog.EditRolesButton'),
                    cssClass: 'edit-roles-button',
                    icon: 'icon-people text-blue',
                    onClick: function () {
                        new Administration.UserRoleDialog({
                            userID: _this.entity.UserId,
                            username: _this.entity.Username
                        }).dialogOpen();
                    }
                });
                buttons.push({
                    title: Q.text('Site.UserDialog.EditPermissionsButton'),
                    cssClass: 'edit-permissions-button',
                    icon: 'icon-lock-open text-green',
                    onClick: function () {
                        new Administration.UserPermissionDialog({
                            userID: _this.entity.UserId,
                            username: _this.entity.Username
                        }).dialogOpen();
                    }
                });
                return buttons;
            };
            UserDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                this.toolbar.findButton('edit-roles-button').toggleClass('disabled', this.isNewOrDeleted());
                this.toolbar.findButton("edit-permissions-button").toggleClass("disabled", this.isNewOrDeleted());
            };
            UserDialog.prototype.afterLoadEntity = function () {
                _super.prototype.afterLoadEntity.call(this);
                // these fields are only required in new record mode
                this.form.Password.element.toggleClass('required', this.isNew())
                    .closest('.field').find('sup').toggle(this.isNew());
                this.form.PasswordConfirm.element.toggleClass('required', this.isNew())
                    .closest('.field').find('sup').toggle(this.isNew());
            };
            return UserDialog;
        }(Serenity.EntityDialog));
        UserDialog = __decorate([
            Serenity.Decorators.registerClass()
        ], UserDialog);
        Administration.UserDialog = UserDialog;
    })(Administration = Mervalito.Administration || (Mervalito.Administration = {}));
})(Mervalito || (Mervalito = {}));
var Mervalito;
(function (Mervalito) {
    var Administration;
    (function (Administration) {
        var UserGrid = (function (_super) {
            __extends(UserGrid, _super);
            function UserGrid(container) {
                return _super.call(this, container) || this;
            }
            UserGrid.prototype.getColumnsKey = function () { return "Administration.User"; };
            UserGrid.prototype.getDialogType = function () { return Administration.UserDialog; };
            UserGrid.prototype.getIdProperty = function () { return Administration.UserRow.idProperty; };
            UserGrid.prototype.getIsActiveProperty = function () { return Administration.UserRow.isActiveProperty; };
            UserGrid.prototype.getLocalTextPrefix = function () { return Administration.UserRow.localTextPrefix; };
            UserGrid.prototype.getService = function () { return Administration.UserService.baseUrl; };
            UserGrid.prototype.getDefaultSortBy = function () {
                return [Administration.UserRow.Fields.Username];
            };
            return UserGrid;
        }(Serenity.EntityGrid));
        UserGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], UserGrid);
        Administration.UserGrid = UserGrid;
    })(Administration = Mervalito.Administration || (Mervalito.Administration = {}));
})(Mervalito || (Mervalito = {}));
var Mervalito;
(function (Mervalito) {
    var Administration;
    (function (Administration) {
        var PermissionCheckEditor = (function (_super) {
            __extends(PermissionCheckEditor, _super);
            function PermissionCheckEditor(container, opt) {
                var _this = _super.call(this, container, opt) || this;
                _this.rolePermissions = {};
                var titleByKey = {};
                var permissionKeys = _this.getSortedGroupAndPermissionKeys(titleByKey);
                var items = permissionKeys.map(function (key) { return ({
                    Key: key,
                    ParentKey: _this.getParentKey(key),
                    Title: titleByKey[key],
                    GrantRevoke: null,
                    IsGroup: key.charAt(key.length - 1) === ':'
                }); });
                _this.byParentKey = Q.toGrouping(items, function (x) { return x.ParentKey; });
                _this.setItems(items);
                return _this;
            }
            PermissionCheckEditor.prototype.getIdProperty = function () { return "Key"; };
            PermissionCheckEditor.prototype.getItemGrantRevokeClass = function (item, grant) {
                if (!item.IsGroup) {
                    return ((item.GrantRevoke === grant) ? ' checked' : '');
                }
                var desc = this.getDescendants(item, true);
                var granted = desc.filter(function (x) { return x.GrantRevoke === grant; });
                if (!granted.length) {
                    return '';
                }
                if (desc.length === granted.length) {
                    return 'checked';
                }
                return 'checked partial';
            };
            PermissionCheckEditor.prototype.getItemEffectiveClass = function (item) {
                var _this = this;
                if (item.IsGroup) {
                    var desc = this.getDescendants(item, true);
                    var grantCount = Q.count(desc, function (x) { return x.GrantRevoke === true ||
                        (x.GrantRevoke == null && _this.rolePermissions[x.Key]); });
                    if (grantCount === desc.length || desc.length === 0) {
                        return 'allow';
                    }
                    if (grantCount === 0) {
                        return 'deny';
                    }
                    return 'partial';
                }
                var granted = item.GrantRevoke === true ||
                    (item.GrantRevoke == null && this.rolePermissions[item.Key]);
                return (granted ? ' allow' : ' deny');
            };
            PermissionCheckEditor.prototype.getColumns = function () {
                var _this = this;
                var columns = [{
                        name: Q.text('Site.UserPermissionDialog.Permission'),
                        field: 'Title',
                        format: Serenity.SlickFormatting.treeToggle(function () { return _this.view; }, function (x) { return x.Key; }, function (ctx) {
                            var item = ctx.item;
                            var klass = _this.getItemEffectiveClass(item);
                            return '<span class="effective-permission ' + klass + '">' + Q.htmlEncode(ctx.value) + '</span>';
                        }),
                        width: 495,
                        sortable: false
                    }, {
                        name: Q.text('Site.UserPermissionDialog.Grant'), field: 'Grant',
                        format: function (ctx) {
                            var item1 = ctx.item;
                            var klass1 = _this.getItemGrantRevokeClass(item1, true);
                            return "<span class='check-box grant no-float " + klass1 + "'></span>";
                        },
                        width: 65,
                        sortable: false,
                        headerCssClass: 'align-center',
                        cssClass: 'align-center'
                    }];
                if (this.options.showRevoke) {
                    columns.push({
                        name: Q.text('Site.UserPermissionDialog.Revoke'), field: 'Revoke',
                        format: function (ctx) {
                            var item2 = ctx.item;
                            var klass2 = _this.getItemGrantRevokeClass(item2, false);
                            return '<span class="check-box revoke no-float ' + klass2 + '"></span>';
                        },
                        width: 65,
                        sortable: false,
                        headerCssClass: 'align-center',
                        cssClass: 'align-center'
                    });
                }
                return columns;
            };
            PermissionCheckEditor.prototype.setItems = function (items) {
                Serenity.SlickTreeHelper.setIndents(items, function (x) { return x.Key; }, function (x) { return x.ParentKey; }, false);
                this.view.setItems(items, true);
            };
            PermissionCheckEditor.prototype.onViewSubmit = function () {
                return false;
            };
            PermissionCheckEditor.prototype.onViewFilter = function (item) {
                var _this = this;
                if (!_super.prototype.onViewFilter.call(this, item)) {
                    return false;
                }
                if (!Serenity.SlickTreeHelper.filterById(item, this.view, function (x) { return x.ParentKey; }))
                    return false;
                if (this.searchText) {
                    return this.matchContains(item) || item.IsGroup && Q.any(this.getDescendants(item, false), function (x) { return _this.matchContains(x); });
                }
                return true;
            };
            PermissionCheckEditor.prototype.matchContains = function (item) {
                return Select2.util.stripDiacritics(item.Title || '').toLowerCase().indexOf(this.searchText) >= 0;
            };
            PermissionCheckEditor.prototype.getDescendants = function (item, excludeGroups) {
                var result = [];
                var stack = [item];
                while (stack.length > 0) {
                    var i = stack.pop();
                    var children = this.byParentKey[i.Key];
                    if (!children)
                        continue;
                    for (var _i = 0, children_1 = children; _i < children_1.length; _i++) {
                        var child = children_1[_i];
                        if (!excludeGroups || !child.IsGroup) {
                            result.push(child);
                        }
                        stack.push(child);
                    }
                }
                return result;
            };
            PermissionCheckEditor.prototype.onClick = function (e, row, cell) {
                _super.prototype.onClick.call(this, e, row, cell);
                if (!e.isDefaultPrevented()) {
                    Serenity.SlickTreeHelper.toggleClick(e, row, cell, this.view, function (x) { return x.Key; });
                }
                if (e.isDefaultPrevented()) {
                    return;
                }
                var target = $(e.target);
                var grant = target.hasClass('grant');
                if (grant || target.hasClass('revoke')) {
                    e.preventDefault();
                    var item = this.itemAt(row);
                    var checkedOrPartial = target.hasClass('checked') || target.hasClass('partial');
                    if (checkedOrPartial) {
                        grant = null;
                    }
                    else {
                        grant = grant !== checkedOrPartial;
                    }
                    if (item.IsGroup) {
                        for (var _i = 0, _a = this.getDescendants(item, true); _i < _a.length; _i++) {
                            var d = _a[_i];
                            d.GrantRevoke = grant;
                        }
                    }
                    else
                        item.GrantRevoke = grant;
                    this.slickGrid.invalidate();
                }
            };
            PermissionCheckEditor.prototype.getParentKey = function (key) {
                if (key.charAt(key.length - 1) === ':') {
                    key = key.substr(0, key.length - 1);
                }
                var idx = key.lastIndexOf(':');
                if (idx >= 0) {
                    return key.substr(0, idx + 1);
                }
                return null;
            };
            PermissionCheckEditor.prototype.getButtons = function () {
                return [];
            };
            PermissionCheckEditor.prototype.createToolbarExtensions = function () {
                var _this = this;
                _super.prototype.createToolbarExtensions.call(this);
                Serenity.GridUtils.addQuickSearchInputCustom(this.toolbar.element, function (field, text) {
                    _this.searchText = Select2.util.stripDiacritics(Q.trimToNull(text) || '').toLowerCase();
                    _this.view.setItems(_this.view.getItems(), true);
                });
            };
            PermissionCheckEditor.prototype.getSortedGroupAndPermissionKeys = function (titleByKey) {
                var keys = Q.getRemoteData('Administration.PermissionKeys').Entities;
                var titleWithGroup = {};
                for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
                    var k = keys_1[_i];
                    var s = k;
                    if (!s) {
                        continue;
                    }
                    if (s.charAt(s.length - 1) == ':') {
                        s = s.substr(0, s.length - 1);
                        if (s.length === 0) {
                            continue;
                        }
                    }
                    if (titleByKey[s]) {
                        continue;
                    }
                    titleByKey[s] = Q.coalesce(Q.tryGetText('Permission.' + s), s);
                    var parts = s.split(':');
                    var group = '';
                    var groupTitle = '';
                    for (var i = 0; i < parts.length - 1; i++) {
                        group = group + parts[i] + ':';
                        var txt = Q.tryGetText('Permission.' + group);
                        if (txt == null) {
                            txt = parts[i];
                        }
                        titleByKey[group] = txt;
                        groupTitle = groupTitle + titleByKey[group] + ':';
                        titleWithGroup[group] = groupTitle;
                    }
                    titleWithGroup[s] = groupTitle + titleByKey[s];
                }
                keys = Object.keys(titleByKey);
                keys = keys.sort(function (x, y) { return Q.turkishLocaleCompare(titleWithGroup[x], titleWithGroup[y]); });
                return keys;
            };
            PermissionCheckEditor.prototype.get_value = function () {
                var result = [];
                for (var _i = 0, _a = this.view.getItems(); _i < _a.length; _i++) {
                    var item = _a[_i];
                    if (item.GrantRevoke != null && item.Key.charAt(item.Key.length - 1) != ':') {
                        result.push({ PermissionKey: item.Key, Granted: item.GrantRevoke });
                    }
                }
                return result;
            };
            PermissionCheckEditor.prototype.set_value = function (value) {
                for (var _i = 0, _a = this.view.getItems(); _i < _a.length; _i++) {
                    var item = _a[_i];
                    item.GrantRevoke = null;
                }
                if (value != null) {
                    for (var _b = 0, value_1 = value; _b < value_1.length; _b++) {
                        var row = value_1[_b];
                        var r = this.view.getItemById(row.PermissionKey);
                        if (r) {
                            r.GrantRevoke = Q.coalesce(row.Granted, true);
                        }
                    }
                }
                this.setItems(this.getItems());
            };
            PermissionCheckEditor.prototype.get_rolePermissions = function () {
                return Object.keys(this.rolePermissions);
            };
            PermissionCheckEditor.prototype.set_rolePermissions = function (value) {
                this.rolePermissions = {};
                if (value) {
                    for (var _i = 0, value_2 = value; _i < value_2.length; _i++) {
                        var k = value_2[_i];
                        this.rolePermissions[k] = true;
                    }
                }
                this.setItems(this.getItems());
            };
            return PermissionCheckEditor;
        }(Serenity.DataGrid));
        PermissionCheckEditor = __decorate([
            Serenity.Decorators.registerEditor([Serenity.IGetEditValue, Serenity.ISetEditValue])
        ], PermissionCheckEditor);
        Administration.PermissionCheckEditor = PermissionCheckEditor;
    })(Administration = Mervalito.Administration || (Mervalito.Administration = {}));
})(Mervalito || (Mervalito = {}));
var Mervalito;
(function (Mervalito) {
    var Administration;
    (function (Administration) {
        var UserPermissionDialog = (function (_super) {
            __extends(UserPermissionDialog, _super);
            function UserPermissionDialog(opt) {
                var _this = _super.call(this, opt) || this;
                _this.permissions = new Administration.PermissionCheckEditor(_this.byId('Permissions'), {
                    showRevoke: true
                });
                Administration.UserPermissionService.List({
                    UserID: _this.options.userID,
                    Module: null,
                    Submodule: null
                }, function (response) {
                    _this.permissions.set_value(response.Entities);
                });
                Administration.UserPermissionService.ListRolePermissions({
                    UserID: _this.options.userID,
                    Module: null,
                    Submodule: null,
                }, function (response) {
                    _this.permissions.set_rolePermissions(response.Entities);
                });
                return _this;
            }
            UserPermissionDialog.prototype.getDialogOptions = function () {
                var _this = this;
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.buttons = [
                    {
                        text: Q.text('Dialogs.OkButton'),
                        click: function (e) {
                            Administration.UserPermissionService.Update({
                                UserID: _this.options.userID,
                                Permissions: _this.permissions.get_value(),
                                Module: null,
                                Submodule: null
                            }, function (response) {
                                _this.dialogClose();
                                window.setTimeout(function () { return Q.notifySuccess(Q.text('Site.UserPermissionDialog.SaveSuccess')); }, 0);
                            });
                        }
                    }, {
                        text: Q.text('Dialogs.CancelButton'),
                        click: function () { return _this.dialogClose(); }
                    }
                ];
                opt.title = Q.format(Q.text('Site.UserPermissionDialog.DialogTitle'), this.options.username);
                return opt;
            };
            UserPermissionDialog.prototype.getTemplate = function () {
                return '<div id="~_Permissions"></div>';
            };
            return UserPermissionDialog;
        }(Serenity.TemplatedDialog));
        UserPermissionDialog = __decorate([
            Serenity.Decorators.registerClass()
        ], UserPermissionDialog);
        Administration.UserPermissionDialog = UserPermissionDialog;
    })(Administration = Mervalito.Administration || (Mervalito.Administration = {}));
})(Mervalito || (Mervalito = {}));
var Mervalito;
(function (Mervalito) {
    var Administration;
    (function (Administration) {
        var RoleCheckEditor = (function (_super) {
            __extends(RoleCheckEditor, _super);
            function RoleCheckEditor(div) {
                return _super.call(this, div) || this;
            }
            RoleCheckEditor.prototype.createToolbarExtensions = function () {
                var _this = this;
                _super.prototype.createToolbarExtensions.call(this);
                Serenity.GridUtils.addQuickSearchInputCustom(this.toolbar.element, function (field, text) {
                    _this.searchText = Select2.util.stripDiacritics(text || '').toUpperCase();
                    _this.view.setItems(_this.view.getItems(), true);
                });
            };
            RoleCheckEditor.prototype.getButtons = function () {
                return [];
            };
            RoleCheckEditor.prototype.getTreeItems = function () {
                return Administration.RoleRow.getLookup().items.map(function (role) { return ({
                    id: role.RoleId.toString(),
                    text: role.RoleName
                }); });
            };
            RoleCheckEditor.prototype.onViewFilter = function (item) {
                return _super.prototype.onViewFilter.call(this, item) &&
                    (Q.isEmptyOrNull(this.searchText) ||
                        Select2.util.stripDiacritics(item.text || '')
                            .toUpperCase().indexOf(this.searchText) >= 0);
            };
            return RoleCheckEditor;
        }(Serenity.CheckTreeEditor));
        RoleCheckEditor = __decorate([
            Serenity.Decorators.registerEditor()
        ], RoleCheckEditor);
        Administration.RoleCheckEditor = RoleCheckEditor;
    })(Administration = Mervalito.Administration || (Mervalito.Administration = {}));
})(Mervalito || (Mervalito = {}));
var Mervalito;
(function (Mervalito) {
    var Administration;
    (function (Administration) {
        var UserRoleDialog = (function (_super) {
            __extends(UserRoleDialog, _super);
            function UserRoleDialog(opt) {
                var _this = _super.call(this, opt) || this;
                _this.permissions = new Administration.RoleCheckEditor(_this.byId('Roles'));
                Administration.UserRoleService.List({
                    UserID: _this.options.userID
                }, function (response) {
                    _this.permissions.value = response.Entities.map(function (x) { return x.toString(); });
                });
                return _this;
            }
            UserRoleDialog.prototype.getDialogOptions = function () {
                var _this = this;
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.buttons = [{
                        text: Q.text('Dialogs.OkButton'),
                        click: function () {
                            Q.serviceRequest('Administration/UserRole/Update', {
                                UserID: _this.options.userID,
                                Roles: _this.permissions.value.map(function (x) { return parseInt(x, 10); })
                            }, function (response) {
                                _this.dialogClose();
                                Q.notifySuccess(Q.text('Site.UserRoleDialog.SaveSuccess'));
                            });
                        }
                    }, {
                        text: Q.text('Dialogs.CancelButton'),
                        click: function () { return _this.dialogClose(); }
                    }];
                opt.title = Q.format(Q.text('Site.UserRoleDialog.DialogTitle'), this.options.username);
                return opt;
            };
            UserRoleDialog.prototype.getTemplate = function () {
                return "<div id='~_Roles'></div>";
            };
            return UserRoleDialog;
        }(Serenity.TemplatedDialog));
        UserRoleDialog = __decorate([
            Serenity.Decorators.registerClass()
        ], UserRoleDialog);
        Administration.UserRoleDialog = UserRoleDialog;
    })(Administration = Mervalito.Administration || (Mervalito.Administration = {}));
})(Mervalito || (Mervalito = {}));
var Mervalito;
(function (Mervalito) {
    var BasicProgressDialog = (function (_super) {
        __extends(BasicProgressDialog, _super);
        function BasicProgressDialog() {
            var _this = _super.call(this) || this;
            _this.byId('ProgressBar').progressbar({
                max: 100,
                value: 0,
                change: function (e, v) {
                    _this.byId('ProgressLabel').text(_this.value + ' / ' + _this.max);
                }
            });
            return _this;
        }
        Object.defineProperty(BasicProgressDialog.prototype, "max", {
            get: function () {
                return this.byId('ProgressBar').progressbar().progressbar('option', 'max');
            },
            set: function (value) {
                this.byId('ProgressBar').progressbar().progressbar('option', 'max', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BasicProgressDialog.prototype, "value", {
            get: function () {
                return this.byId('ProgressBar').progressbar('value');
            },
            set: function (value) {
                this.byId('ProgressBar').progressbar().progressbar('value', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BasicProgressDialog.prototype, "title", {
            get: function () {
                return this.element.dialog().dialog('option', 'title');
            },
            set: function (value) {
                this.element.dialog().dialog('option', 'title', value);
            },
            enumerable: true,
            configurable: true
        });
        BasicProgressDialog.prototype.getDialogOptions = function () {
            var _this = this;
            var opt = _super.prototype.getDialogOptions.call(this);
            opt.title = Q.text('Site.BasicProgressDialog.PleaseWait');
            opt.width = 600;
            opt.buttons = [{
                    text: Q.text('Dialogs.CancelButton'),
                    click: function () {
                        _this.cancelled = true;
                        _this.element.closest('.ui-dialog')
                            .find('.ui-dialog-buttonpane .ui-button')
                            .attr('disabled', 'disabled')
                            .css('opacity', '0.5');
                        _this.element.dialog('option', 'title', Q.trimToNull(_this.cancelTitle) ||
                            Q.text('Site.BasicProgressDialog.CancelTitle'));
                    }
                }];
            return opt;
        };
        BasicProgressDialog.prototype.initDialog = function () {
            _super.prototype.initDialog.call(this);
            this.element.closest('.ui-dialog').find('.ui-dialog-titlebar-close').hide();
        };
        BasicProgressDialog.prototype.getTemplate = function () {
            return ("<div class='s-DialogContent s-BasicProgressDialogContent'>" +
                "<div id='~_StatusText' class='status-text' ></div>" +
                "<div id='~_ProgressBar' class='progress-bar'>" +
                "<div id='~_ProgressLabel' class='progress-label' ></div>" +
                "</div>" +
                "</div>");
        };
        return BasicProgressDialog;
    }(Serenity.TemplatedDialog));
    Mervalito.BasicProgressDialog = BasicProgressDialog;
})(Mervalito || (Mervalito = {}));
var Mervalito;
(function (Mervalito) {
    var Common;
    (function (Common) {
        var BulkServiceAction = (function () {
            function BulkServiceAction() {
            }
            BulkServiceAction.prototype.createProgressDialog = function () {
                this.progressDialog = new Mervalito.BasicProgressDialog();
                this.progressDialog.dialogOpen();
                this.progressDialog.max = this.keys.length;
                this.progressDialog.value = 0;
            };
            BulkServiceAction.prototype.getConfirmationFormat = function () {
                return Q.text('Site.BulkServiceAction.ConfirmationFormat');
            };
            BulkServiceAction.prototype.getConfirmationMessage = function (targetCount) {
                return Q.format(this.getConfirmationFormat(), targetCount);
            };
            BulkServiceAction.prototype.confirm = function (targetCount, action) {
                Q.confirm(this.getConfirmationMessage(targetCount), action);
            };
            BulkServiceAction.prototype.getNothingToProcessMessage = function () {
                return Q.text('Site.BulkServiceAction.NothingToProcess');
            };
            BulkServiceAction.prototype.nothingToProcess = function () {
                Q.notifyError(this.getNothingToProcessMessage());
            };
            BulkServiceAction.prototype.getParallelRequests = function () {
                return 1;
            };
            BulkServiceAction.prototype.getBatchSize = function () {
                return 1;
            };
            BulkServiceAction.prototype.startParallelExecution = function () {
                this.createProgressDialog();
                this.successCount = 0;
                this.errorCount = 0;
                this.pendingRequests = 0;
                this.completedRequests = 0;
                this.errorCount = 0;
                this.errorByKey = {};
                this.queue = this.keys.slice();
                this.queueIndex = 0;
                var parallelRequests = this.getParallelRequests();
                while (parallelRequests-- > 0) {
                    this.executeNextBatch();
                }
            };
            BulkServiceAction.prototype.serviceCallCleanup = function () {
                this.pendingRequests--;
                this.completedRequests++;
                var title = Q.text((this.progressDialog.cancelled ?
                    'Site.BasicProgressDialog.CancelTitle' : 'Site.BasicProgressDialog.PleaseWait'));
                title += ' (';
                if (this.successCount > 0) {
                    title += Q.format(Q.text('Site.BulkServiceAction.SuccessCount'), this.successCount);
                }
                if (this.errorCount > 0) {
                    if (this.successCount > 0) {
                        title += ', ';
                    }
                    title += Q.format(Q.text('Site.BulkServiceAction.ErrorCount'), this.errorCount);
                }
                this.progressDialog.title = title + ')';
                this.progressDialog.value = this.successCount + this.errorCount;
                if (!this.progressDialog.cancelled && this.progressDialog.value < this.keys.length) {
                    this.executeNextBatch();
                }
                else if (this.pendingRequests === 0) {
                    this.progressDialog.dialogClose();
                    this.showResults();
                    if (this.done) {
                        this.done();
                        this.done = null;
                    }
                }
            };
            BulkServiceAction.prototype.executeForBatch = function (batch) {
            };
            BulkServiceAction.prototype.executeNextBatch = function () {
                var batchSize = this.getBatchSize();
                var batch = [];
                while (true) {
                    if (batch.length >= batchSize) {
                        break;
                    }
                    if (this.queueIndex >= this.queue.length) {
                        break;
                    }
                    batch.push(this.queue[this.queueIndex++]);
                }
                if (batch.length > 0) {
                    this.pendingRequests++;
                    this.executeForBatch(batch);
                }
            };
            BulkServiceAction.prototype.getAllHadErrorsFormat = function () {
                return Q.text('Site.BulkServiceAction.AllHadErrorsFormat');
            };
            BulkServiceAction.prototype.showAllHadErrors = function () {
                Q.notifyError(Q.format(this.getAllHadErrorsFormat(), this.errorCount));
            };
            BulkServiceAction.prototype.getSomeHadErrorsFormat = function () {
                return Q.text('Site.BulkServiceAction.SomeHadErrorsFormat');
            };
            BulkServiceAction.prototype.showSomeHadErrors = function () {
                Q.notifyWarning(Q.format(this.getSomeHadErrorsFormat(), this.successCount, this.errorCount));
            };
            BulkServiceAction.prototype.getAllSuccessFormat = function () {
                return Q.text('Site.BulkServiceAction.AllSuccessFormat');
            };
            BulkServiceAction.prototype.showAllSuccess = function () {
                Q.notifySuccess(Q.format(this.getAllSuccessFormat(), this.successCount));
            };
            BulkServiceAction.prototype.showResults = function () {
                if (this.errorCount === 0 && this.successCount === 0) {
                    this.nothingToProcess();
                    return;
                }
                if (this.errorCount > 0 && this.successCount === 0) {
                    this.showAllHadErrors();
                    return;
                }
                if (this.errorCount > 0) {
                    this.showSomeHadErrors();
                    return;
                }
                this.showAllSuccess();
            };
            BulkServiceAction.prototype.execute = function (keys) {
                var _this = this;
                this.keys = keys;
                if (this.keys.length === 0) {
                    this.nothingToProcess();
                    return;
                }
                this.confirm(this.keys.length, function () { return _this.startParallelExecution(); });
            };
            BulkServiceAction.prototype.get_successCount = function () {
                return this.successCount;
            };
            BulkServiceAction.prototype.set_successCount = function (value) {
                this.successCount = value;
            };
            BulkServiceAction.prototype.get_errorCount = function () {
                return this.errorCount;
            };
            BulkServiceAction.prototype.set_errorCount = function (value) {
                this.errorCount = value;
            };
            return BulkServiceAction;
        }());
        Common.BulkServiceAction = BulkServiceAction;
    })(Common = Mervalito.Common || (Mervalito.Common = {}));
})(Mervalito || (Mervalito = {}));
var Mervalito;
(function (Mervalito) {
    var DialogUtils;
    (function (DialogUtils) {
        function pendingChangesConfirmation(element, hasPendingChanges) {
            element.bind('dialogbeforeclose', function (e) {
                if (!Serenity.WX.hasOriginalEvent(e) || !hasPendingChanges()) {
                    return;
                }
                e.preventDefault();
                Q.confirm('You have pending changes. Save them?', function () { return element.find('div.save-and-close-button').click(); }, {
                    onNo: function () {
                        element.dialog().dialog('close');
                    }
                });
            });
        }
        DialogUtils.pendingChangesConfirmation = pendingChangesConfirmation;
    })(DialogUtils = Mervalito.DialogUtils || (Mervalito.DialogUtils = {}));
})(Mervalito || (Mervalito = {}));
var Mervalito;
(function (Mervalito) {
    var Common;
    (function (Common) {
        var EnumSelectFormatter = (function () {
            function EnumSelectFormatter() {
                this.allowClear = true;
            }
            EnumSelectFormatter.prototype.format = function (ctx) {
                var enumType = Serenity.EnumTypeRegistry.get(this.enumKey);
                var sb = "<select>";
                if (this.allowClear) {
                    sb += '<option value="">';
                    sb += Q.htmlEncode(this.emptyItemText || Q.text("Controls.SelectEditor.EmptyItemText"));
                    sb += '</option>';
                }
                for (var _i = 0, _a = Object.keys(enumType).filter(function (v) { return !isNaN(parseInt(v, 10)); }); _i < _a.length; _i++) {
                    var x = _a[_i];
                    sb += '<option value="' + x + '"';
                    if (x == ctx.value)
                        sb += " selected";
                    var name = enumType[x];
                    sb += ">";
                    sb += Q.htmlEncode(Q.tryGetText("Enums." + this.enumKey + "." + name) || name);
                    sb += "</option>";
                }
                sb += "</select>";
                return sb;
            };
            return EnumSelectFormatter;
        }());
        __decorate([
            Serenity.Decorators.option()
        ], EnumSelectFormatter.prototype, "enumKey", void 0);
        __decorate([
            Serenity.Decorators.option()
        ], EnumSelectFormatter.prototype, "allowClear", void 0);
        __decorate([
            Serenity.Decorators.option()
        ], EnumSelectFormatter.prototype, "emptyItemText", void 0);
        EnumSelectFormatter = __decorate([
            Serenity.Decorators.registerFormatter()
        ], EnumSelectFormatter);
        Common.EnumSelectFormatter = EnumSelectFormatter;
    })(Common = Mervalito.Common || (Mervalito.Common = {}));
})(Mervalito || (Mervalito = {}));
var Mervalito;
(function (Mervalito) {
    var Common;
    (function (Common) {
        var ExcelExportHelper;
        (function (ExcelExportHelper) {
            function createToolButton(options) {
                return {
                    hint: Q.coalesce(options.title, 'Excel'),
                    title: Q.coalesce(options.hint, ''),
                    cssClass: 'export-xlsx-button',
                    onClick: function () {
                        if (!options.onViewSubmit()) {
                            return;
                        }
                        var grid = options.grid;
                        var request = Q.deepClone(grid.getView().params);
                        request.Take = 0;
                        request.Skip = 0;
                        var sortBy = grid.getView().sortBy;
                        if (sortBy) {
                            request.Sort = sortBy;
                        }
                        request.IncludeColumns = [];
                        var columns = grid.getGrid().getColumns();
                        for (var _i = 0, columns_1 = columns; _i < columns_1.length; _i++) {
                            var column = columns_1[_i];
                            request.IncludeColumns.push(column.id || column.field);
                        }
                        Q.postToService({ service: options.service, request: request, target: '_blank' });
                    },
                    separator: options.separator
                };
            }
            ExcelExportHelper.createToolButton = createToolButton;
        })(ExcelExportHelper = Common.ExcelExportHelper || (Common.ExcelExportHelper = {}));
    })(Common = Mervalito.Common || (Mervalito.Common = {}));
})(Mervalito || (Mervalito = {}));
var Mervalito;
(function (Mervalito) {
    var LanguageList;
    (function (LanguageList) {
        function getValue() {
            var result = [];
            for (var _i = 0, _a = Mervalito.Administration.LanguageRow.getLookup().items; _i < _a.length; _i++) {
                var k = _a[_i];
                if (k.LanguageId !== 'en') {
                    result.push([k.Id.toString(), k.LanguageName]);
                }
            }
            return result;
        }
        LanguageList.getValue = getValue;
    })(LanguageList = Mervalito.LanguageList || (Mervalito.LanguageList = {}));
})(Mervalito || (Mervalito = {}));
var Mervalito;
(function (Mervalito) {
    var Common;
    (function (Common) {
        var LanguageSelection = (function (_super) {
            __extends(LanguageSelection, _super);
            function LanguageSelection(select, currentLanguage) {
                var _this = _super.call(this, select) || this;
                currentLanguage = Q.coalesce(currentLanguage, 'en');
                _this.change(function (e) {
                    $.cookie('LanguagePreference', select.val(), {
                        path: Q.Config.applicationPath,
                        expires: 365
                    });
                    window.location.reload(true);
                });
                Q.getLookupAsync('Administration.Language').then(function (x) {
                    if (!Q.any(x.items, function (z) { return z.LanguageId === currentLanguage; })) {
                        var idx = currentLanguage.lastIndexOf('-');
                        if (idx >= 0) {
                            currentLanguage = currentLanguage.substr(0, idx);
                            if (!Q.any(x.items, function (y) { return y.LanguageId === currentLanguage; })) {
                                currentLanguage = 'en';
                            }
                        }
                        else {
                            currentLanguage = 'en';
                        }
                    }
                    for (var _i = 0, _a = x.items; _i < _a.length; _i++) {
                        var l = _a[_i];
                        Q.addOption(select, l.LanguageId, l.LanguageName);
                    }
                    select.val(currentLanguage);
                });
                return _this;
            }
            return LanguageSelection;
        }(Serenity.Widget));
        Common.LanguageSelection = LanguageSelection;
    })(Common = Mervalito.Common || (Mervalito.Common = {}));
})(Mervalito || (Mervalito = {}));
var Mervalito;
(function (Mervalito) {
    var Common;
    (function (Common) {
        var SidebarSearch = (function (_super) {
            __extends(SidebarSearch, _super);
            function SidebarSearch(input, menuUL) {
                var _this = _super.call(this, input) || this;
                new Serenity.QuickSearchInput(input, {
                    onSearch: function (field, text, success) {
                        _this.updateMatchFlags(text);
                        success(true);
                    }
                });
                _this.menuUL = menuUL;
                return _this;
            }
            SidebarSearch.prototype.updateMatchFlags = function (text) {
                var liList = this.menuUL.find('li').removeClass('non-match');
                text = Q.trimToNull(text);
                if (text == null) {
                    liList.show();
                    liList.removeClass('expanded');
                    return;
                }
                var parts = text.replace(',', ' ').split(' ').filter(function (x) { return !Q.isTrimmedEmpty(x); });
                for (var i = 0; i < parts.length; i++) {
                    parts[i] = Q.trimToNull(Select2.util.stripDiacritics(parts[i]).toUpperCase());
                }
                var items = liList;
                items.each(function (idx, e) {
                    var x = $(e);
                    var title = Select2.util.stripDiacritics(Q.coalesce(x.text(), '').toUpperCase());
                    for (var _i = 0, parts_1 = parts; _i < parts_1.length; _i++) {
                        var p = parts_1[_i];
                        if (p != null && !(title.indexOf(p) !== -1)) {
                            x.addClass('non-match');
                            break;
                        }
                    }
                });
                var matchingItems = items.not('.non-match');
                var visibles = matchingItems.parents('li').add(matchingItems);
                var nonVisibles = liList.not(visibles);
                nonVisibles.hide().addClass('non-match');
                visibles.show();
                liList.addClass('expanded');
            };
            return SidebarSearch;
        }(Serenity.Widget));
        Common.SidebarSearch = SidebarSearch;
    })(Common = Mervalito.Common || (Mervalito.Common = {}));
})(Mervalito || (Mervalito = {}));
var Mervalito;
(function (Mervalito) {
    var Common;
    (function (Common) {
        var ThemeSelection = (function (_super) {
            __extends(ThemeSelection, _super);
            function ThemeSelection(select) {
                var _this = _super.call(this, select) || this;
                _this.change(function (e) {
                    $.cookie('ThemePreference', select.val(), {
                        path: Q.Config.applicationPath,
                        expires: 365
                    });
                    $('body').removeClass('skin-' + _this.getCurrentTheme());
                    $('body').addClass('skin-' + select.val());
                });
                Q.addOption(select, 'blue', Q.text('Site.Layout.ThemeBlue'));
                Q.addOption(select, 'blue-light', Q.text('Site.Layout.ThemeBlueLight'));
                Q.addOption(select, 'purple', Q.text('Site.Layout.ThemePurple'));
                Q.addOption(select, 'purple-light', Q.text('Site.Layout.ThemePurpleLight'));
                Q.addOption(select, 'red', Q.text('Site.Layout.ThemeRed'));
                Q.addOption(select, 'red-light', Q.text('Site.Layout.ThemeRedLight'));
                Q.addOption(select, 'green', Q.text('Site.Layout.ThemeGreen'));
                Q.addOption(select, 'green-light', Q.text('Site.Layout.ThemeGreenLight'));
                Q.addOption(select, 'yellow', Q.text('Site.Layout.ThemeYellow'));
                Q.addOption(select, 'yellow-light', Q.text('Site.Layout.ThemeYellowLight'));
                Q.addOption(select, 'black', Q.text('Site.Layout.ThemeBlack'));
                Q.addOption(select, 'black-light', Q.text('Site.Layout.ThemeBlackLight'));
                select.val(_this.getCurrentTheme());
                return _this;
            }
            ThemeSelection.prototype.getCurrentTheme = function () {
                var skinClass = Q.first(($('body').attr('class') || '').split(' '), function (x) { return Q.startsWith(x, 'skin-'); });
                if (skinClass) {
                    return skinClass.substr(5);
                }
                return 'blue';
            };
            return ThemeSelection;
        }(Serenity.Widget));
        Common.ThemeSelection = ThemeSelection;
    })(Common = Mervalito.Common || (Mervalito.Common = {}));
})(Mervalito || (Mervalito = {}));
var Mervalito;
(function (Mervalito) {
    var Common;
    (function (Common) {
        var PdfExportHelper;
        (function (PdfExportHelper) {
            function toAutoTableColumns(srcColumns, columnStyles, columnTitles) {
                return srcColumns.map(function (src) {
                    var col = {
                        dataKey: src.id || src.field,
                        title: src.name || ''
                    };
                    if (columnTitles && columnTitles[col.dataKey] != null)
                        col.title = columnTitles[col.dataKey];
                    var style = {};
                    if ((src.cssClass || '').indexOf("align-right") >= 0)
                        style.halign = 'right';
                    else if ((src.cssClass || '').indexOf("align-center") >= 0)
                        style.halign = 'center';
                    columnStyles[col.dataKey] = style;
                    return col;
                });
            }
            function toAutoTableData(entities, keys, srcColumns) {
                var el = document.createElement('span');
                var row = 0;
                return entities.map(function (item) {
                    var dst = {};
                    for (var cell = 0; cell < srcColumns.length; cell++) {
                        var src = srcColumns[cell];
                        var fld = src.field || '';
                        var key = keys[cell];
                        var txt = void 0;
                        var html = void 0;
                        if (src.formatter) {
                            html = src.formatter(row, cell, item[fld], src, item);
                        }
                        else if (src.format) {
                            html = src.format({ row: row, cell: cell, item: item, value: item[fld] });
                        }
                        else {
                            dst[key] = item[fld];
                            continue;
                        }
                        if (!html || (html.indexOf('<') < 0 && html.indexOf('&') < 0))
                            dst[key] = html;
                        else {
                            el.innerHTML = html;
                            if (el.children.length == 1 &&
                                $(el.children[0]).is(":input")) {
                                dst[key] = $(el.children[0]).val();
                            }
                            else if (el.children.length == 1 &&
                                $(el.children).is('.check-box')) {
                                dst[key] = $(el.children).hasClass("checked") ? "X" : "";
                            }
                            else
                                dst[key] = el.textContent || '';
                        }
                    }
                    row++;
                    return dst;
                });
            }
            function exportToPdf(options) {
                var g = options.grid;
                if (!options.onViewSubmit())
                    return;
                includeAutoTable();
                var request = Q.deepClone(g.view.params);
                request.Take = 0;
                request.Skip = 0;
                var sortBy = g.view.sortBy;
                if (sortBy != null)
                    request.Sort = sortBy;
                var gridColumns = g.slickGrid.getColumns();
                gridColumns = gridColumns.filter(function (x) { return x.id !== "__select__"; });
                request.IncludeColumns = [];
                for (var _i = 0, gridColumns_1 = gridColumns; _i < gridColumns_1.length; _i++) {
                    var column = gridColumns_1[_i];
                    request.IncludeColumns.push(column.id || column.field);
                }
                Q.serviceCall({
                    url: g.view.url,
                    request: request,
                    onSuccess: function (response) {
                        var doc = new jsPDF('l', 'pt');
                        var srcColumns = gridColumns;
                        var columnStyles = {};
                        var columns = toAutoTableColumns(srcColumns, columnStyles, options.columnTitles);
                        var keys = columns.map(function (x) { return x.dataKey; });
                        var entities = response.Entities || [];
                        var data = toAutoTableData(entities, keys, srcColumns);
                        doc.setFontSize(options.titleFontSize || 10);
                        doc.setFontStyle('bold');
                        var reportTitle = options.reportTitle || g.getTitle() || "Report";
                        doc.autoTableText(reportTitle, doc.internal.pageSize.width / 2, options.titleTop || 25, { halign: 'center' });
                        var totalPagesExp = "{{T}}";
                        var pageNumbers = options.pageNumbers == null || options.pageNumbers;
                        var autoOptions = $.extend({
                            margin: { top: 25, left: 25, right: 25, bottom: pageNumbers ? 25 : 30 },
                            startY: 60,
                            styles: {
                                fontSize: 8,
                                overflow: 'linebreak',
                                cellPadding: 2,
                                valign: 'middle'
                            },
                            columnStyles: columnStyles
                        }, options.tableOptions);
                        if (pageNumbers) {
                            var footer = function (data) {
                                var str = data.pageCount;
                                // Total page number plugin only available in jspdf v1.0+
                                if (typeof doc.putTotalPages === 'function') {
                                    str = str + " / " + totalPagesExp;
                                }
                                doc.autoTableText(str, doc.internal.pageSize.width / 2, doc.internal.pageSize.height - autoOptions.margin.bottom, {
                                    halign: 'center'
                                });
                            };
                            autoOptions.afterPageContent = footer;
                        }
                        doc.autoTable(columns, data, autoOptions);
                        if (typeof doc.putTotalPages === 'function') {
                            doc.putTotalPages(totalPagesExp);
                        }
                        if (!options.output || options.output == "file") {
                            var fileName = options.reportTitle || "{0}_{1}.pdf";
                            fileName = Q.format(fileName, g.getTitle() || "report", Q.formatDate(new Date(), "yyyyMMdd_HHmm"));
                            doc.save(fileName);
                            return;
                        }
                        if (options.autoPrint)
                            doc.autoPrint();
                        var output = options.output;
                        if (output == 'newwindow' || '_blank')
                            output = 'dataurlnewwindow';
                        else if (output == 'window')
                            output = 'datauri';
                        doc.output(output);
                    }
                });
            }
            PdfExportHelper.exportToPdf = exportToPdf;
            function createToolButton(options) {
                return {
                    title: options.title || '',
                    hint: options.hint || 'PDF',
                    cssClass: 'export-pdf-button',
                    onClick: function () { return exportToPdf(options); },
                    separator: options.separator
                };
            }
            PdfExportHelper.createToolButton = createToolButton;
            function includeJsPDF() {
                if (typeof jsPDF !== "undefined")
                    return;
                var script = $("jsPDFScript");
                if (script.length > 0)
                    return;
                $("<script/>")
                    .attr("type", "text/javascript")
                    .attr("id", "jsPDFScript")
                    .attr("src", Q.resolveUrl("~/Scripts/jspdf.min.js"))
                    .appendTo(document.head);
            }
            function includeAutoTable() {
                includeJsPDF();
                if (typeof jsPDF === "undefined" ||
                    typeof jsPDF.API == "undefined" ||
                    typeof jsPDF.API.autoTable !== "undefined")
                    return;
                var script = $("jsPDFAutoTableScript");
                if (script.length > 0)
                    return;
                $("<script/>")
                    .attr("type", "text/javascript")
                    .attr("id", "jsPDFAutoTableScript")
                    .attr("src", Q.resolveUrl("~/Scripts/jspdf.plugin.autotable.min.js"))
                    .appendTo(document.head);
            }
        })(PdfExportHelper = Common.PdfExportHelper || (Common.PdfExportHelper = {}));
    })(Common = Mervalito.Common || (Mervalito.Common = {}));
})(Mervalito || (Mervalito = {}));
var Mervalito;
(function (Mervalito) {
    var Common;
    (function (Common) {
        var ReportDialog = (function (_super) {
            __extends(ReportDialog, _super);
            function ReportDialog(options) {
                var _this = _super.call(this, options) || this;
                _this.updateInterface();
                _this.loadReport(_this.options.reportKey);
                return _this;
            }
            ReportDialog.prototype.getDialogButtons = function () {
                return null;
            };
            ReportDialog.prototype.createPropertyGrid = function () {
                this.propertyGrid && this.byId('PropertyGrid').html('').attr('class', '');
                this.propertyGrid = new Serenity.PropertyGrid(this.byId('PropertyGrid'), {
                    idPrefix: this.idPrefix,
                    useCategories: true,
                    items: this.report.Properties
                }).init(null);
            };
            ReportDialog.prototype.loadReport = function (reportKey) {
                var _this = this;
                Q.serviceCall({
                    url: Q.resolveUrl('~/Report/Retrieve'),
                    request: {
                        ReportKey: reportKey
                    },
                    onSuccess: function (response) {
                        _this.report = response;
                        _this.element.dialog().dialog('option', 'title', _this.report.Title);
                        _this.createPropertyGrid();
                        _this.propertyGrid.load(_this.report.InitialSettings || {});
                        _this.updateInterface();
                        _this.dialogOpen();
                    }
                });
            };
            ReportDialog.prototype.updateInterface = function () {
                this.toolbar.findButton('print-preview-button')
                    .toggle(this.report && !this.report.IsDataOnlyReport);
                this.toolbar.findButton('export-pdf-button')
                    .toggle(this.report && !this.report.IsDataOnlyReport);
                this.toolbar.findButton('export-xlsx-button')
                    .toggle(this.report && this.report.IsDataOnlyReport);
            };
            ReportDialog.prototype.executeReport = function (target, ext, download) {
                if (!this.validateForm()) {
                    return;
                }
                var opt = {};
                this.propertyGrid.save(opt);
                Common.ReportHelper.execute({
                    download: download,
                    reportKey: this.report.ReportKey,
                    extension: ext,
                    target: target,
                    params: opt
                });
            };
            ReportDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                return [
                    {
                        title: 'Preview',
                        cssClass: 'print-preview-button',
                        onClick: function () { return _this.executeReport('_blank', null, false); }
                    },
                    {
                        title: 'PDF',
                        cssClass: 'export-pdf-button',
                        onClick: function () { return _this.executeReport('_blank', 'pdf', true); }
                    },
                    {
                        title: 'Excel',
                        cssClass: 'export-xlsx-button',
                        onClick: function () { return _this.executeReport('_blank', 'xlsx', true); }
                    }
                ];
            };
            return ReportDialog;
        }(Serenity.TemplatedDialog));
        Common.ReportDialog = ReportDialog;
    })(Common = Mervalito.Common || (Mervalito.Common = {}));
})(Mervalito || (Mervalito = {}));
var Mervalito;
(function (Mervalito) {
    var Common;
    (function (Common) {
        var ReportHelper;
        (function (ReportHelper) {
            function createToolButton(options) {
                return {
                    title: Q.coalesce(options.title, 'Report'),
                    cssClass: Q.coalesce(options.cssClass, 'print-button'),
                    icon: options.icon,
                    onClick: function () {
                        ReportHelper.execute(options);
                    }
                };
            }
            ReportHelper.createToolButton = createToolButton;
            function execute(options) {
                var opt = options.getParams ? options.getParams() : options.params;
                Q.postToUrl({
                    url: '~/Report/' + (options.download ? 'Download' : 'Render'),
                    params: {
                        key: options.reportKey,
                        ext: Q.coalesce(options.extension, 'pdf'),
                        opt: opt ? $.toJSON(opt) : ''
                    },
                    target: Q.coalesce(options.target, '_blank')
                });
            }
            ReportHelper.execute = execute;
        })(ReportHelper = Common.ReportHelper || (Common.ReportHelper = {}));
    })(Common = Mervalito.Common || (Mervalito.Common = {}));
})(Mervalito || (Mervalito = {}));
var Mervalito;
(function (Mervalito) {
    var Common;
    (function (Common) {
        var ReportPage = (function (_super) {
            __extends(ReportPage, _super);
            function ReportPage(element) {
                var _this = _super.call(this, element) || this;
                $('.report-link', element).click(function (e) { return _this.reportLinkClick(e); });
                $('div.line', element).click(function (e) { return _this.categoryClick(e); });
                new Serenity.QuickSearchInput($('.s-QuickSearchBar input', element), {
                    onSearch: function (field, text, done) {
                        _this.updateMatchFlags(text);
                        done(true);
                    }
                });
                return _this;
            }
            ReportPage.prototype.updateMatchFlags = function (text) {
                var liList = $('.report-list', this.element).find('li').removeClass('non-match');
                text = Q.trimToNull(text);
                if (!text) {
                    liList.children('ul').hide();
                    liList.show().removeClass('expanded');
                    return;
                }
                text = Select2.util.stripDiacritics(text).toUpperCase();
                var reportItems = liList.filter('.report-item');
                reportItems.each(function (ix, e) {
                    var x = $(e);
                    var title = Select2.util.stripDiacritics(Q.coalesce(x.text(), '').toUpperCase());
                    if (title.indexOf(text) < 0) {
                        x.addClass('non-match');
                    }
                });
                var matchingItems = reportItems.not('.non-match');
                var visibles = matchingItems.parents('li').add(matchingItems);
                var nonVisibles = liList.not(visibles);
                nonVisibles.hide().addClass('non-match');
                visibles.show();
                if (visibles.length <= 100) {
                    liList.children('ul').show();
                    liList.addClass('expanded');
                }
            };
            ReportPage.prototype.categoryClick = function (e) {
                var li = $(e.target).closest('li');
                if (li.hasClass('expanded')) {
                    li.find('ul').hide('fast');
                    li.removeClass('expanded');
                    li.find('li').removeClass('expanded');
                }
                else {
                    li.addClass('expanded');
                    li.children('ul').show('fast');
                    if (li.children('ul').children('li').length === 1 && !li.children('ul').children('li').hasClass('expanded')) {
                        li.children('ul').children('li').children('.line').click();
                    }
                }
            };
            ReportPage.prototype.reportLinkClick = function (e) {
                e.preventDefault();
                new Common.ReportDialog({
                    reportKey: $(e.target).data('key')
                }).dialogOpen();
            };
            return ReportPage;
        }(Serenity.Widget));
        Common.ReportPage = ReportPage;
    })(Common = Mervalito.Common || (Mervalito.Common = {}));
})(Mervalito || (Mervalito = {}));
var Mervalito;
(function (Mervalito) {
    var ScriptInitialization;
    (function (ScriptInitialization) {
        Q.Config.responsiveDialogs = true;
        Q.Config.rootNamespaces.push('Mervalito');
        Serenity.EntityDialog.defaultLanguageList = Mervalito.LanguageList.getValue;
    })(ScriptInitialization = Mervalito.ScriptInitialization || (Mervalito.ScriptInitialization = {}));
})(Mervalito || (Mervalito = {}));
var Mervalito;
(function (Mervalito) {
    var Common;
    (function (Common) {
        var UserPreferenceStorage = (function () {
            function UserPreferenceStorage() {
            }
            UserPreferenceStorage.prototype.getItem = function (key) {
                var value;
                Common.UserPreferenceService.Retrieve({
                    PreferenceType: "UserPreferenceStorage",
                    Name: key
                }, function (response) { return value = response.Value; }, {
                    async: false
                });
                return value;
            };
            UserPreferenceStorage.prototype.setItem = function (key, data) {
                Common.UserPreferenceService.Update({
                    PreferenceType: "UserPreferenceStorage",
                    Name: key,
                    Value: data
                });
            };
            return UserPreferenceStorage;
        }());
        Common.UserPreferenceStorage = UserPreferenceStorage;
    })(Common = Mervalito.Common || (Mervalito.Common = {}));
})(Mervalito || (Mervalito = {}));
var Mervalito;
(function (Mervalito) {
    var MasterData;
    (function (MasterData) {
        var BondRatingDialog = (function (_super) {
            __extends(BondRatingDialog, _super);
            function BondRatingDialog() {
                var _this = _super.apply(this, arguments) || this;
                _this.form = new MasterData.BondRatingForm(_this.idPrefix);
                return _this;
            }
            BondRatingDialog.prototype.getFormKey = function () { return MasterData.BondRatingForm.formKey; };
            BondRatingDialog.prototype.getIdProperty = function () { return MasterData.BondRatingRow.idProperty; };
            BondRatingDialog.prototype.getLocalTextPrefix = function () { return MasterData.BondRatingRow.localTextPrefix; };
            BondRatingDialog.prototype.getNameProperty = function () { return MasterData.BondRatingRow.nameProperty; };
            BondRatingDialog.prototype.getService = function () { return MasterData.BondRatingService.baseUrl; };
            return BondRatingDialog;
        }(Serenity.EntityDialog));
        BondRatingDialog = __decorate([
            Serenity.Decorators.registerClass(),
            Serenity.Decorators.responsive()
        ], BondRatingDialog);
        MasterData.BondRatingDialog = BondRatingDialog;
    })(MasterData = Mervalito.MasterData || (Mervalito.MasterData = {}));
})(Mervalito || (Mervalito = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var Mervalito;
(function (Mervalito) {
    var MasterData;
    (function (MasterData) {
        var BondRatingEditor = (function (_super) {
            __extends(BondRatingEditor, _super);
            function BondRatingEditor(container) {
                return _super.call(this, container) || this;
            }
            BondRatingEditor.prototype.getColumnsKey = function () { return 'MasterData.BondRating'; };
            BondRatingEditor.prototype.getDialogType = function () { return MasterData.BondRatingEditorDialog; };
            BondRatingEditor.prototype.getLocalTextPrefix = function () { return MasterData.BondRatingRow.localTextPrefix; };
            return BondRatingEditor;
        }(Mervalito.Common.GridEditorBase));
        BondRatingEditor = __decorate([
            Serenity.Decorators.registerClass()
        ], BondRatingEditor);
        MasterData.BondRatingEditor = BondRatingEditor;
    })(MasterData = Mervalito.MasterData || (Mervalito.MasterData = {}));
})(Mervalito || (Mervalito = {}));
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
var Mervalito;
(function (Mervalito) {
    var MasterData;
    (function (MasterData) {
        var BondRatingEditorDialog = (function (_super) {
            __extends(BondRatingEditorDialog, _super);
            function BondRatingEditorDialog() {
                var _this = _super.apply(this, arguments) || this;
                _this.form = new MasterData.BondRatingForm(_this.idPrefix);
                return _this;
            }
            BondRatingEditorDialog.prototype.getFormKey = function () { return MasterData.BondRatingForm.formKey; };
            BondRatingEditorDialog.prototype.getLocalTextPrefix = function () { return MasterData.BondRatingRow.localTextPrefix; };
            BondRatingEditorDialog.prototype.getNameProperty = function () { return MasterData.BondRatingRow.nameProperty; };
            return BondRatingEditorDialog;
        }(Mervalito.Common.GridEditorDialog));
        BondRatingEditorDialog = __decorate([
            Serenity.Decorators.registerClass(),
            Serenity.Decorators.responsive()
        ], BondRatingEditorDialog);
        MasterData.BondRatingEditorDialog = BondRatingEditorDialog;
    })(MasterData = Mervalito.MasterData || (Mervalito.MasterData = {}));
})(Mervalito || (Mervalito = {}));
var Mervalito;
(function (Mervalito) {
    var MasterData;
    (function (MasterData) {
        var BondRatingGrid = (function (_super) {
            __extends(BondRatingGrid, _super);
            function BondRatingGrid(container) {
                return _super.call(this, container) || this;
            }
            BondRatingGrid.prototype.getColumnsKey = function () { return 'MasterData.BondRating'; };
            BondRatingGrid.prototype.getDialogType = function () { return MasterData.BondRatingDialog; };
            BondRatingGrid.prototype.getIdProperty = function () { return MasterData.BondRatingRow.idProperty; };
            BondRatingGrid.prototype.getLocalTextPrefix = function () { return MasterData.BondRatingRow.localTextPrefix; };
            BondRatingGrid.prototype.getService = function () { return MasterData.BondRatingService.baseUrl; };
            return BondRatingGrid;
        }(Serenity.EntityGrid));
        BondRatingGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], BondRatingGrid);
        MasterData.BondRatingGrid = BondRatingGrid;
    })(MasterData = Mervalito.MasterData || (Mervalito.MasterData = {}));
})(Mervalito || (Mervalito = {}));
var Mervalito;
(function (Mervalito) {
    var MasterData;
    (function (MasterData) {
        var BondTypeDialog = (function (_super) {
            __extends(BondTypeDialog, _super);
            function BondTypeDialog() {
                var _this = _super.apply(this, arguments) || this;
                _this.form = new MasterData.BondTypeForm(_this.idPrefix);
                return _this;
            }
            BondTypeDialog.prototype.getFormKey = function () { return MasterData.BondTypeForm.formKey; };
            BondTypeDialog.prototype.getIdProperty = function () { return MasterData.BondTypeRow.idProperty; };
            BondTypeDialog.prototype.getLocalTextPrefix = function () { return MasterData.BondTypeRow.localTextPrefix; };
            BondTypeDialog.prototype.getNameProperty = function () { return MasterData.BondTypeRow.nameProperty; };
            BondTypeDialog.prototype.getService = function () { return MasterData.BondTypeService.baseUrl; };
            return BondTypeDialog;
        }(Serenity.EntityDialog));
        BondTypeDialog = __decorate([
            Serenity.Decorators.registerClass(),
            Serenity.Decorators.responsive()
        ], BondTypeDialog);
        MasterData.BondTypeDialog = BondTypeDialog;
    })(MasterData = Mervalito.MasterData || (Mervalito.MasterData = {}));
})(Mervalito || (Mervalito = {}));
var Mervalito;
(function (Mervalito) {
    var MasterData;
    (function (MasterData) {
        var BondTypeGrid = (function (_super) {
            __extends(BondTypeGrid, _super);
            function BondTypeGrid(container) {
                return _super.call(this, container) || this;
            }
            BondTypeGrid.prototype.getColumnsKey = function () { return 'MasterData.BondType'; };
            BondTypeGrid.prototype.getDialogType = function () { return MasterData.BondTypeDialog; };
            BondTypeGrid.prototype.getIdProperty = function () { return MasterData.BondTypeRow.idProperty; };
            BondTypeGrid.prototype.getLocalTextPrefix = function () { return MasterData.BondTypeRow.localTextPrefix; };
            BondTypeGrid.prototype.getService = function () { return MasterData.BondTypeService.baseUrl; };
            return BondTypeGrid;
        }(Serenity.EntityGrid));
        BondTypeGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], BondTypeGrid);
        MasterData.BondTypeGrid = BondTypeGrid;
    })(MasterData = Mervalito.MasterData || (Mervalito.MasterData = {}));
})(Mervalito || (Mervalito = {}));
var Mervalito;
(function (Mervalito) {
    var MasterData;
    (function (MasterData) {
        var CautionDialog = (function (_super) {
            __extends(CautionDialog, _super);
            function CautionDialog() {
                var _this = _super.apply(this, arguments) || this;
                _this.form = new MasterData.CautionForm(_this.idPrefix);
                return _this;
            }
            CautionDialog.prototype.getFormKey = function () { return MasterData.CautionForm.formKey; };
            CautionDialog.prototype.getIdProperty = function () { return MasterData.CautionRow.idProperty; };
            CautionDialog.prototype.getLocalTextPrefix = function () { return MasterData.CautionRow.localTextPrefix; };
            CautionDialog.prototype.getService = function () { return MasterData.CautionService.baseUrl; };
            return CautionDialog;
        }(Serenity.EntityDialog));
        CautionDialog = __decorate([
            Serenity.Decorators.registerClass(),
            Serenity.Decorators.responsive()
        ], CautionDialog);
        MasterData.CautionDialog = CautionDialog;
    })(MasterData = Mervalito.MasterData || (Mervalito.MasterData = {}));
})(Mervalito || (Mervalito = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var Mervalito;
(function (Mervalito) {
    var MasterData;
    (function (MasterData) {
        var CautionEditor = (function (_super) {
            __extends(CautionEditor, _super);
            function CautionEditor(container) {
                return _super.call(this, container) || this;
            }
            CautionEditor.prototype.getColumnsKey = function () { return 'MasterData.Caution'; };
            CautionEditor.prototype.getDialogType = function () { return MasterData.CautionEditorDialog; };
            CautionEditor.prototype.getLocalTextPrefix = function () { return MasterData.CautionRow.localTextPrefix; };
            return CautionEditor;
        }(Mervalito.Common.GridEditorBase));
        CautionEditor = __decorate([
            Serenity.Decorators.registerClass()
        ], CautionEditor);
        MasterData.CautionEditor = CautionEditor;
    })(MasterData = Mervalito.MasterData || (Mervalito.MasterData = {}));
})(Mervalito || (Mervalito = {}));
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
var Mervalito;
(function (Mervalito) {
    var MasterData;
    (function (MasterData) {
        var CautionEditorDialog = (function (_super) {
            __extends(CautionEditorDialog, _super);
            function CautionEditorDialog() {
                var _this = _super.apply(this, arguments) || this;
                _this.form = new MasterData.CautionForm(_this.idPrefix);
                return _this;
            }
            CautionEditorDialog.prototype.getFormKey = function () { return MasterData.CautionForm.formKey; };
            CautionEditorDialog.prototype.getLocalTextPrefix = function () { return MasterData.CautionRow.localTextPrefix; };
            return CautionEditorDialog;
        }(Mervalito.Common.GridEditorDialog));
        CautionEditorDialog = __decorate([
            Serenity.Decorators.registerClass(),
            Serenity.Decorators.responsive()
        ], CautionEditorDialog);
        MasterData.CautionEditorDialog = CautionEditorDialog;
    })(MasterData = Mervalito.MasterData || (Mervalito.MasterData = {}));
})(Mervalito || (Mervalito = {}));
var Mervalito;
(function (Mervalito) {
    var MasterData;
    (function (MasterData) {
        var CautionGrid = (function (_super) {
            __extends(CautionGrid, _super);
            function CautionGrid(container) {
                return _super.call(this, container) || this;
            }
            CautionGrid.prototype.getColumnsKey = function () { return 'MasterData.Caution'; };
            CautionGrid.prototype.getDialogType = function () { return MasterData.CautionDialog; };
            CautionGrid.prototype.getIdProperty = function () { return MasterData.CautionRow.idProperty; };
            CautionGrid.prototype.getLocalTextPrefix = function () { return MasterData.CautionRow.localTextPrefix; };
            CautionGrid.prototype.getService = function () { return MasterData.CautionService.baseUrl; };
            return CautionGrid;
        }(Serenity.EntityGrid));
        CautionGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], CautionGrid);
        MasterData.CautionGrid = CautionGrid;
    })(MasterData = Mervalito.MasterData || (Mervalito.MasterData = {}));
})(Mervalito || (Mervalito = {}));
var Mervalito;
(function (Mervalito) {
    var MasterData;
    (function (MasterData) {
        var CurrencyDialog = (function (_super) {
            __extends(CurrencyDialog, _super);
            function CurrencyDialog() {
                var _this = _super.apply(this, arguments) || this;
                _this.form = new MasterData.CurrencyForm(_this.idPrefix);
                return _this;
            }
            CurrencyDialog.prototype.getFormKey = function () { return MasterData.CurrencyForm.formKey; };
            CurrencyDialog.prototype.getIdProperty = function () { return MasterData.CurrencyRow.idProperty; };
            CurrencyDialog.prototype.getLocalTextPrefix = function () { return MasterData.CurrencyRow.localTextPrefix; };
            CurrencyDialog.prototype.getNameProperty = function () { return MasterData.CurrencyRow.nameProperty; };
            CurrencyDialog.prototype.getService = function () { return MasterData.CurrencyService.baseUrl; };
            return CurrencyDialog;
        }(Serenity.EntityDialog));
        CurrencyDialog = __decorate([
            Serenity.Decorators.registerClass(),
            Serenity.Decorators.responsive()
        ], CurrencyDialog);
        MasterData.CurrencyDialog = CurrencyDialog;
    })(MasterData = Mervalito.MasterData || (Mervalito.MasterData = {}));
})(Mervalito || (Mervalito = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var Mervalito;
(function (Mervalito) {
    var MasterData;
    (function (MasterData) {
        var CurrencyEditor = (function (_super) {
            __extends(CurrencyEditor, _super);
            function CurrencyEditor(container) {
                return _super.call(this, container) || this;
            }
            CurrencyEditor.prototype.getColumnsKey = function () { return 'MasterData.Currency'; };
            CurrencyEditor.prototype.getDialogType = function () { return MasterData.CurrencyEditorDialog; };
            CurrencyEditor.prototype.getLocalTextPrefix = function () { return MasterData.CurrencyRow.localTextPrefix; };
            return CurrencyEditor;
        }(Mervalito.Common.GridEditorBase));
        CurrencyEditor = __decorate([
            Serenity.Decorators.registerClass()
        ], CurrencyEditor);
        MasterData.CurrencyEditor = CurrencyEditor;
    })(MasterData = Mervalito.MasterData || (Mervalito.MasterData = {}));
})(Mervalito || (Mervalito = {}));
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
var Mervalito;
(function (Mervalito) {
    var MasterData;
    (function (MasterData) {
        var CurrencyEditorDialog = (function (_super) {
            __extends(CurrencyEditorDialog, _super);
            function CurrencyEditorDialog() {
                var _this = _super.apply(this, arguments) || this;
                _this.form = new MasterData.CurrencyForm(_this.idPrefix);
                return _this;
            }
            CurrencyEditorDialog.prototype.getFormKey = function () { return MasterData.CurrencyForm.formKey; };
            CurrencyEditorDialog.prototype.getLocalTextPrefix = function () { return MasterData.CurrencyRow.localTextPrefix; };
            CurrencyEditorDialog.prototype.getNameProperty = function () { return MasterData.CurrencyRow.nameProperty; };
            return CurrencyEditorDialog;
        }(Mervalito.Common.GridEditorDialog));
        CurrencyEditorDialog = __decorate([
            Serenity.Decorators.registerClass(),
            Serenity.Decorators.responsive()
        ], CurrencyEditorDialog);
        MasterData.CurrencyEditorDialog = CurrencyEditorDialog;
    })(MasterData = Mervalito.MasterData || (Mervalito.MasterData = {}));
})(Mervalito || (Mervalito = {}));
var Mervalito;
(function (Mervalito) {
    var MasterData;
    (function (MasterData) {
        var CurrencyGrid = (function (_super) {
            __extends(CurrencyGrid, _super);
            function CurrencyGrid(container) {
                return _super.call(this, container) || this;
            }
            CurrencyGrid.prototype.getColumnsKey = function () { return 'MasterData.Currency'; };
            CurrencyGrid.prototype.getDialogType = function () { return MasterData.CurrencyDialog; };
            CurrencyGrid.prototype.getIdProperty = function () { return MasterData.CurrencyRow.idProperty; };
            CurrencyGrid.prototype.getLocalTextPrefix = function () { return MasterData.CurrencyRow.localTextPrefix; };
            CurrencyGrid.prototype.getService = function () { return MasterData.CurrencyService.baseUrl; };
            return CurrencyGrid;
        }(Serenity.EntityGrid));
        CurrencyGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], CurrencyGrid);
        MasterData.CurrencyGrid = CurrencyGrid;
    })(MasterData = Mervalito.MasterData || (Mervalito.MasterData = {}));
})(Mervalito || (Mervalito = {}));
var Mervalito;
(function (Mervalito) {
    var MasterData;
    (function (MasterData) {
        var PaymentPeriodDialog = (function (_super) {
            __extends(PaymentPeriodDialog, _super);
            function PaymentPeriodDialog() {
                var _this = _super.apply(this, arguments) || this;
                _this.form = new MasterData.PaymentPeriodForm(_this.idPrefix);
                return _this;
            }
            PaymentPeriodDialog.prototype.getFormKey = function () { return MasterData.PaymentPeriodForm.formKey; };
            PaymentPeriodDialog.prototype.getIdProperty = function () { return MasterData.PaymentPeriodRow.idProperty; };
            PaymentPeriodDialog.prototype.getLocalTextPrefix = function () { return MasterData.PaymentPeriodRow.localTextPrefix; };
            PaymentPeriodDialog.prototype.getNameProperty = function () { return MasterData.PaymentPeriodRow.nameProperty; };
            PaymentPeriodDialog.prototype.getService = function () { return MasterData.PaymentPeriodService.baseUrl; };
            return PaymentPeriodDialog;
        }(Serenity.EntityDialog));
        PaymentPeriodDialog = __decorate([
            Serenity.Decorators.registerClass(),
            Serenity.Decorators.responsive()
        ], PaymentPeriodDialog);
        MasterData.PaymentPeriodDialog = PaymentPeriodDialog;
    })(MasterData = Mervalito.MasterData || (Mervalito.MasterData = {}));
})(Mervalito || (Mervalito = {}));
var Mervalito;
(function (Mervalito) {
    var MasterData;
    (function (MasterData) {
        var PaymentPeriodGrid = (function (_super) {
            __extends(PaymentPeriodGrid, _super);
            function PaymentPeriodGrid(container) {
                return _super.call(this, container) || this;
            }
            PaymentPeriodGrid.prototype.getColumnsKey = function () { return 'MasterData.PaymentPeriod'; };
            PaymentPeriodGrid.prototype.getDialogType = function () { return MasterData.PaymentPeriodDialog; };
            PaymentPeriodGrid.prototype.getIdProperty = function () { return MasterData.PaymentPeriodRow.idProperty; };
            PaymentPeriodGrid.prototype.getLocalTextPrefix = function () { return MasterData.PaymentPeriodRow.localTextPrefix; };
            PaymentPeriodGrid.prototype.getService = function () { return MasterData.PaymentPeriodService.baseUrl; };
            return PaymentPeriodGrid;
        }(Serenity.EntityGrid));
        PaymentPeriodGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], PaymentPeriodGrid);
        MasterData.PaymentPeriodGrid = PaymentPeriodGrid;
    })(MasterData = Mervalito.MasterData || (Mervalito.MasterData = {}));
})(Mervalito || (Mervalito = {}));
var Mervalito;
(function (Mervalito) {
    var MasterData;
    (function (MasterData) {
        var RentTypeDialog = (function (_super) {
            __extends(RentTypeDialog, _super);
            function RentTypeDialog() {
                var _this = _super.apply(this, arguments) || this;
                _this.form = new MasterData.RentTypeForm(_this.idPrefix);
                return _this;
            }
            RentTypeDialog.prototype.getFormKey = function () { return MasterData.RentTypeForm.formKey; };
            RentTypeDialog.prototype.getIdProperty = function () { return MasterData.RentTypeRow.idProperty; };
            RentTypeDialog.prototype.getLocalTextPrefix = function () { return MasterData.RentTypeRow.localTextPrefix; };
            RentTypeDialog.prototype.getNameProperty = function () { return MasterData.RentTypeRow.nameProperty; };
            RentTypeDialog.prototype.getService = function () { return MasterData.RentTypeService.baseUrl; };
            return RentTypeDialog;
        }(Serenity.EntityDialog));
        RentTypeDialog = __decorate([
            Serenity.Decorators.registerClass(),
            Serenity.Decorators.responsive()
        ], RentTypeDialog);
        MasterData.RentTypeDialog = RentTypeDialog;
    })(MasterData = Mervalito.MasterData || (Mervalito.MasterData = {}));
})(Mervalito || (Mervalito = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var Mervalito;
(function (Mervalito) {
    var MasterData;
    (function (MasterData) {
        var RentTypeEditor = (function (_super) {
            __extends(RentTypeEditor, _super);
            function RentTypeEditor(container) {
                return _super.call(this, container) || this;
            }
            RentTypeEditor.prototype.getColumnsKey = function () { return 'MasterData.RentType'; };
            RentTypeEditor.prototype.getDialogType = function () { return MasterData.RentTypeEditorDialog; };
            RentTypeEditor.prototype.getLocalTextPrefix = function () { return MasterData.RentTypeRow.localTextPrefix; };
            return RentTypeEditor;
        }(Mervalito.Common.GridEditorBase));
        RentTypeEditor = __decorate([
            Serenity.Decorators.registerClass()
        ], RentTypeEditor);
        MasterData.RentTypeEditor = RentTypeEditor;
    })(MasterData = Mervalito.MasterData || (Mervalito.MasterData = {}));
})(Mervalito || (Mervalito = {}));
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
var Mervalito;
(function (Mervalito) {
    var MasterData;
    (function (MasterData) {
        var RentTypeEditorDialog = (function (_super) {
            __extends(RentTypeEditorDialog, _super);
            function RentTypeEditorDialog() {
                var _this = _super.apply(this, arguments) || this;
                _this.form = new MasterData.RentTypeForm(_this.idPrefix);
                return _this;
            }
            RentTypeEditorDialog.prototype.getFormKey = function () { return MasterData.RentTypeForm.formKey; };
            RentTypeEditorDialog.prototype.getLocalTextPrefix = function () { return MasterData.RentTypeRow.localTextPrefix; };
            RentTypeEditorDialog.prototype.getNameProperty = function () { return MasterData.RentTypeRow.nameProperty; };
            return RentTypeEditorDialog;
        }(Mervalito.Common.GridEditorDialog));
        RentTypeEditorDialog = __decorate([
            Serenity.Decorators.registerClass(),
            Serenity.Decorators.responsive()
        ], RentTypeEditorDialog);
        MasterData.RentTypeEditorDialog = RentTypeEditorDialog;
    })(MasterData = Mervalito.MasterData || (Mervalito.MasterData = {}));
})(Mervalito || (Mervalito = {}));
var Mervalito;
(function (Mervalito) {
    var MasterData;
    (function (MasterData) {
        var RentTypeGrid = (function (_super) {
            __extends(RentTypeGrid, _super);
            function RentTypeGrid(container) {
                return _super.call(this, container) || this;
            }
            RentTypeGrid.prototype.getColumnsKey = function () { return 'MasterData.RentType'; };
            RentTypeGrid.prototype.getDialogType = function () { return MasterData.RentTypeDialog; };
            RentTypeGrid.prototype.getIdProperty = function () { return MasterData.RentTypeRow.idProperty; };
            RentTypeGrid.prototype.getLocalTextPrefix = function () { return MasterData.RentTypeRow.localTextPrefix; };
            RentTypeGrid.prototype.getService = function () { return MasterData.RentTypeService.baseUrl; };
            return RentTypeGrid;
        }(Serenity.EntityGrid));
        RentTypeGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], RentTypeGrid);
        MasterData.RentTypeGrid = RentTypeGrid;
    })(MasterData = Mervalito.MasterData || (Mervalito.MasterData = {}));
})(Mervalito || (Mervalito = {}));
var Mervalito;
(function (Mervalito) {
    var MasterData;
    (function (MasterData) {
        var TitleDialog = (function (_super) {
            __extends(TitleDialog, _super);
            function TitleDialog() {
                var _this = _super.apply(this, arguments) || this;
                _this.form = new MasterData.TitleForm(_this.idPrefix);
                return _this;
            }
            TitleDialog.prototype.getFormKey = function () { return MasterData.TitleForm.formKey; };
            TitleDialog.prototype.getIdProperty = function () { return MasterData.TitleRow.idProperty; };
            TitleDialog.prototype.getLocalTextPrefix = function () { return MasterData.TitleRow.localTextPrefix; };
            TitleDialog.prototype.getNameProperty = function () { return MasterData.TitleRow.nameProperty; };
            TitleDialog.prototype.getService = function () { return MasterData.TitleService.baseUrl; };
            TitleDialog.prototype.dialogOpen = function () {
                _super.prototype.dialogOpen.call(this);
                this.element.closest(".ui-dialog").find(".ui-icon-maximize-window").click();
            };
            return TitleDialog;
        }(Serenity.EntityDialog));
        TitleDialog = __decorate([
            Serenity.Decorators.registerClass(),
            Serenity.Decorators.responsive(),
            Serenity.Decorators.maximizable()
        ], TitleDialog);
        MasterData.TitleDialog = TitleDialog;
    })(MasterData = Mervalito.MasterData || (Mervalito.MasterData = {}));
})(Mervalito || (Mervalito = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var Mervalito;
(function (Mervalito) {
    var MasterData;
    (function (MasterData) {
        var TitleEditor = (function (_super) {
            __extends(TitleEditor, _super);
            function TitleEditor(container) {
                return _super.call(this, container) || this;
            }
            TitleEditor.prototype.getColumnsKey = function () { return 'MasterData.Title'; };
            TitleEditor.prototype.getDialogType = function () { return MasterData.TitleEditorDialog; };
            TitleEditor.prototype.getLocalTextPrefix = function () { return MasterData.TitleRow.localTextPrefix; };
            return TitleEditor;
        }(Mervalito.Common.GridEditorBase));
        TitleEditor = __decorate([
            Serenity.Decorators.registerClass()
        ], TitleEditor);
        MasterData.TitleEditor = TitleEditor;
    })(MasterData = Mervalito.MasterData || (Mervalito.MasterData = {}));
})(Mervalito || (Mervalito = {}));
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
var Mervalito;
(function (Mervalito) {
    var MasterData;
    (function (MasterData) {
        var TitleEditorDialog = (function (_super) {
            __extends(TitleEditorDialog, _super);
            function TitleEditorDialog() {
                var _this = _super.apply(this, arguments) || this;
                _this.form = new MasterData.TitleForm(_this.idPrefix);
                return _this;
            }
            TitleEditorDialog.prototype.getFormKey = function () { return MasterData.TitleForm.formKey; };
            TitleEditorDialog.prototype.getLocalTextPrefix = function () { return MasterData.TitleRow.localTextPrefix; };
            TitleEditorDialog.prototype.getNameProperty = function () { return MasterData.TitleRow.nameProperty; };
            return TitleEditorDialog;
        }(Mervalito.Common.GridEditorDialog));
        TitleEditorDialog = __decorate([
            Serenity.Decorators.registerClass(),
            Serenity.Decorators.responsive()
        ], TitleEditorDialog);
        MasterData.TitleEditorDialog = TitleEditorDialog;
    })(MasterData = Mervalito.MasterData || (Mervalito.MasterData = {}));
})(Mervalito || (Mervalito = {}));
var Mervalito;
(function (Mervalito) {
    var MasterData;
    (function (MasterData) {
        var TitleGrid = (function (_super) {
            __extends(TitleGrid, _super);
            function TitleGrid(container) {
                return _super.call(this, container) || this;
            }
            TitleGrid.prototype.getColumnsKey = function () { return 'MasterData.Title'; };
            TitleGrid.prototype.getDialogType = function () { return MasterData.TitleDialog; };
            TitleGrid.prototype.getIdProperty = function () { return MasterData.TitleRow.idProperty; };
            TitleGrid.prototype.getLocalTextPrefix = function () { return MasterData.TitleRow.localTextPrefix; };
            TitleGrid.prototype.getService = function () { return MasterData.TitleService.baseUrl; };
            TitleGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                var MyRow = MasterData.TitleRow.Fields;
                var exportButton = {
                    title: Q.text('Db.MasterData.Title.UpdateValues'),
                    onClick: function (e) {
                        var self = _this;
                        var url = Q.resolveUrl('~/API/titles/updateRates');
                        $.ajax({
                            method: 'PUT',
                            url: url,
                            sucess: function (data) {
                                Q.notifySuccess(Q.text('Db.MasterData.Title.SuccessUpdate'));
                                self.refresh();
                            }
                        });
                    },
                    cssClass: 'apply-changes-button'
                };
                buttons.push(Mervalito.Common.ExcelExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); },
                    service: MasterData.TitleService.baseUrl + '/ListExcel',
                    separator: true,
                    //hint: "Export to excel",
                    hint: Q.text('Db.MasterData.Title.ExportToExcel')
                }));
                buttons.push(exportButton);
                return buttons;
            };
            return TitleGrid;
        }(Serenity.EntityGrid));
        TitleGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], TitleGrid);
        MasterData.TitleGrid = TitleGrid;
    })(MasterData = Mervalito.MasterData || (Mervalito.MasterData = {}));
})(Mervalito || (Mervalito = {}));
var Mervalito;
(function (Mervalito) {
    var MasterData;
    (function (MasterData) {
        var TitleTypeDialog = (function (_super) {
            __extends(TitleTypeDialog, _super);
            function TitleTypeDialog() {
                var _this = _super.apply(this, arguments) || this;
                _this.form = new MasterData.TitleTypeForm(_this.idPrefix);
                return _this;
            }
            TitleTypeDialog.prototype.getFormKey = function () { return MasterData.TitleTypeForm.formKey; };
            TitleTypeDialog.prototype.getIdProperty = function () { return MasterData.TitleTypeRow.idProperty; };
            TitleTypeDialog.prototype.getLocalTextPrefix = function () { return MasterData.TitleTypeRow.localTextPrefix; };
            TitleTypeDialog.prototype.getNameProperty = function () { return MasterData.TitleTypeRow.nameProperty; };
            TitleTypeDialog.prototype.getService = function () { return MasterData.TitleTypeService.baseUrl; };
            return TitleTypeDialog;
        }(Serenity.EntityDialog));
        TitleTypeDialog = __decorate([
            Serenity.Decorators.registerClass(),
            Serenity.Decorators.responsive()
        ], TitleTypeDialog);
        MasterData.TitleTypeDialog = TitleTypeDialog;
    })(MasterData = Mervalito.MasterData || (Mervalito.MasterData = {}));
})(Mervalito || (Mervalito = {}));
var Mervalito;
(function (Mervalito) {
    var MasterData;
    (function (MasterData) {
        var TitleTypeGrid = (function (_super) {
            __extends(TitleTypeGrid, _super);
            function TitleTypeGrid(container) {
                return _super.call(this, container) || this;
            }
            TitleTypeGrid.prototype.getColumnsKey = function () { return 'MasterData.TitleType'; };
            TitleTypeGrid.prototype.getDialogType = function () { return MasterData.TitleTypeDialog; };
            TitleTypeGrid.prototype.getIdProperty = function () { return MasterData.TitleTypeRow.idProperty; };
            TitleTypeGrid.prototype.getLocalTextPrefix = function () { return MasterData.TitleTypeRow.localTextPrefix; };
            TitleTypeGrid.prototype.getService = function () { return MasterData.TitleTypeService.baseUrl; };
            return TitleTypeGrid;
        }(Serenity.EntityGrid));
        TitleTypeGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], TitleTypeGrid);
        MasterData.TitleTypeGrid = TitleTypeGrid;
    })(MasterData = Mervalito.MasterData || (Mervalito.MasterData = {}));
})(Mervalito || (Mervalito = {}));
var Mervalito;
(function (Mervalito) {
    var Membership;
    (function (Membership) {
        var ChangePasswordPanel = (function (_super) {
            __extends(ChangePasswordPanel, _super);
            function ChangePasswordPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.ChangePasswordForm(_this.idPrefix);
                _this.form.NewPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.w('ConfirmPassword', Serenity.PasswordEditor).value.length < 7) {
                        return Q.format(Q.text('Validation.MinRequiredPasswordLength'), 7);
                    }
                });
                _this.form.ConfirmPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value !== _this.form.NewPassword.value) {
                        return Q.text('Validation.PasswordConfirm');
                    }
                });
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/ChangePassword'),
                        request: request,
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.ChangePassword.Success'), function () {
                                window.location.href = Q.resolveUrl('~/');
                            });
                        }
                    });
                });
                return _this;
            }
            ChangePasswordPanel.prototype.getFormKey = function () { return Membership.ChangePasswordForm.formKey; };
            return ChangePasswordPanel;
        }(Serenity.PropertyPanel));
        ChangePasswordPanel = __decorate([
            Serenity.Decorators.registerClass()
        ], ChangePasswordPanel);
        Membership.ChangePasswordPanel = ChangePasswordPanel;
    })(Membership = Mervalito.Membership || (Mervalito.Membership = {}));
})(Mervalito || (Mervalito = {}));
var Mervalito;
(function (Mervalito) {
    var Membership;
    (function (Membership) {
        var ForgotPasswordPanel = (function (_super) {
            __extends(ForgotPasswordPanel, _super);
            function ForgotPasswordPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.ForgotPasswordForm(_this.idPrefix);
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/ForgotPassword'),
                        request: request,
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.ForgotPassword.Success'), function () {
                                window.location.href = Q.resolveUrl('~/');
                            });
                        }
                    });
                });
                return _this;
            }
            ForgotPasswordPanel.prototype.getFormKey = function () { return Membership.ForgotPasswordForm.formKey; };
            return ForgotPasswordPanel;
        }(Serenity.PropertyPanel));
        ForgotPasswordPanel = __decorate([
            Serenity.Decorators.registerClass()
        ], ForgotPasswordPanel);
        Membership.ForgotPasswordPanel = ForgotPasswordPanel;
    })(Membership = Mervalito.Membership || (Mervalito.Membership = {}));
})(Mervalito || (Mervalito = {}));
var Mervalito;
(function (Mervalito) {
    var Membership;
    (function (Membership) {
        var LoginPanel = (function (_super) {
            __extends(LoginPanel, _super);
            function LoginPanel(container) {
                var _this = _super.call(this, container) || this;
                $(function () {
                    $('body').vegas({
                        delay: 10000,
                        cover: true,
                        overlay: Q.resolveUrl("~/scripts/vegas/overlays/01.png"),
                        slides: [
                            { src: Q.resolveUrl('~/content/site/slides/slide1.jpg'), transition: 'fade' },
                            { src: Q.resolveUrl('~/content/site/slides/slide2.jpg'), transition: 'fade' },
                            { src: Q.resolveUrl('~/content/site/slides/slide3.jpg'), transition: 'zoomOut' },
                            { src: Q.resolveUrl('~/content/site/slides/slide4.jpg'), transition: 'blur' },
                            { src: Q.resolveUrl('~/content/site/slides/slide5.jpg'), transition: 'swirlLeft' }
                        ]
                    });
                });
                _this.form = new Membership.LoginForm(_this.idPrefix);
                _this.byId('LoginButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/Login'),
                        request: request,
                        onSuccess: function (response) {
                            var q = Q.parseQueryString();
                            var returnUrl = q['returnUrl'] || q['ReturnUrl'];
                            if (returnUrl) {
                                window.location.href = returnUrl;
                            }
                            else {
                                window.location.href = Q.resolveUrl('~/');
                            }
                        }
                    });
                });
                return _this;
            }
            LoginPanel.prototype.getFormKey = function () { return Membership.LoginForm.formKey; };
            return LoginPanel;
        }(Serenity.PropertyPanel));
        LoginPanel = __decorate([
            Serenity.Decorators.registerClass()
        ], LoginPanel);
        Membership.LoginPanel = LoginPanel;
    })(Membership = Mervalito.Membership || (Mervalito.Membership = {}));
})(Mervalito || (Mervalito = {}));
var Mervalito;
(function (Mervalito) {
    var Membership;
    (function (Membership) {
        var ResetPasswordPanel = (function (_super) {
            __extends(ResetPasswordPanel, _super);
            function ResetPasswordPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.ResetPasswordForm(_this.idPrefix);
                _this.form.NewPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value.length < 7) {
                        return Q.format(Q.text('Validation.MinRequiredPasswordLength'), 7);
                    }
                });
                _this.form.ConfirmPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value !== _this.form.NewPassword.value) {
                        return Q.text('Validation.PasswordConfirm');
                    }
                });
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    request.Token = _this.byId('Token').val();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/ResetPassword'),
                        request: request,
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.ResetPassword.Success'), function () {
                                window.location.href = Q.resolveUrl('~/Account/Login');
                            });
                        }
                    });
                });
                return _this;
            }
            ResetPasswordPanel.prototype.getFormKey = function () { return Membership.ResetPasswordForm.formKey; };
            return ResetPasswordPanel;
        }(Serenity.PropertyPanel));
        ResetPasswordPanel = __decorate([
            Serenity.Decorators.registerClass()
        ], ResetPasswordPanel);
        Membership.ResetPasswordPanel = ResetPasswordPanel;
    })(Membership = Mervalito.Membership || (Mervalito.Membership = {}));
})(Mervalito || (Mervalito = {}));
var Mervalito;
(function (Mervalito) {
    var Membership;
    (function (Membership) {
        var SignUpPanel = (function (_super) {
            __extends(SignUpPanel, _super);
            function SignUpPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.SignUpForm(_this.idPrefix);
                _this.form.ConfirmEmail.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmEmail.value !== _this.form.Email.value) {
                        return Q.text('Validation.EmailConfirm');
                    }
                });
                _this.form.ConfirmPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value !== _this.form.Password.value) {
                        return Q.text('Validation.PasswordConfirm');
                    }
                });
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/SignUp'),
                        request: {
                            DisplayName: _this.form.DisplayName.value,
                            Email: _this.form.Email.value,
                            Password: _this.form.Password.value
                        },
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.SignUp.Success'), function () {
                                window.location.href = Q.resolveUrl('~/');
                            });
                        }
                    });
                });
                return _this;
            }
            SignUpPanel.prototype.getFormKey = function () { return Membership.SignUpForm.formKey; };
            return SignUpPanel;
        }(Serenity.PropertyPanel));
        SignUpPanel = __decorate([
            Serenity.Decorators.registerClass()
        ], SignUpPanel);
        Membership.SignUpPanel = SignUpPanel;
    })(Membership = Mervalito.Membership || (Mervalito.Membership = {}));
})(Mervalito || (Mervalito = {}));
var Mervalito;
(function (Mervalito) {
    var MutualFund;
    (function (MutualFund) {
        var CompanyManagerDialog = (function (_super) {
            __extends(CompanyManagerDialog, _super);
            function CompanyManagerDialog() {
                var _this = _super.apply(this, arguments) || this;
                _this.form = new MutualFund.CompanyManagerForm(_this.idPrefix);
                return _this;
            }
            CompanyManagerDialog.prototype.getFormKey = function () { return MutualFund.CompanyManagerForm.formKey; };
            CompanyManagerDialog.prototype.getIdProperty = function () { return MutualFund.CompanyManagerRow.idProperty; };
            CompanyManagerDialog.prototype.getLocalTextPrefix = function () { return MutualFund.CompanyManagerRow.localTextPrefix; };
            CompanyManagerDialog.prototype.getNameProperty = function () { return MutualFund.CompanyManagerRow.nameProperty; };
            CompanyManagerDialog.prototype.getService = function () { return MutualFund.CompanyManagerService.baseUrl; };
            return CompanyManagerDialog;
        }(Serenity.EntityDialog));
        CompanyManagerDialog = __decorate([
            Serenity.Decorators.registerClass(),
            Serenity.Decorators.responsive()
        ], CompanyManagerDialog);
        MutualFund.CompanyManagerDialog = CompanyManagerDialog;
    })(MutualFund = Mervalito.MutualFund || (Mervalito.MutualFund = {}));
})(Mervalito || (Mervalito = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var Mervalito;
(function (Mervalito) {
    var MutualFund;
    (function (MutualFund) {
        var CompanyManagerEditor = (function (_super) {
            __extends(CompanyManagerEditor, _super);
            function CompanyManagerEditor(container) {
                return _super.call(this, container) || this;
            }
            CompanyManagerEditor.prototype.getColumnsKey = function () { return 'MutualFund.CompanyManager'; };
            CompanyManagerEditor.prototype.getDialogType = function () { return MutualFund.CompanyManagerEditorDialog; };
            CompanyManagerEditor.prototype.getLocalTextPrefix = function () { return MutualFund.CompanyManagerRow.localTextPrefix; };
            return CompanyManagerEditor;
        }(Mervalito.Common.GridEditorBase));
        CompanyManagerEditor = __decorate([
            Serenity.Decorators.registerClass()
        ], CompanyManagerEditor);
        MutualFund.CompanyManagerEditor = CompanyManagerEditor;
    })(MutualFund = Mervalito.MutualFund || (Mervalito.MutualFund = {}));
})(Mervalito || (Mervalito = {}));
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
var Mervalito;
(function (Mervalito) {
    var MutualFund;
    (function (MutualFund) {
        var CompanyManagerEditorDialog = (function (_super) {
            __extends(CompanyManagerEditorDialog, _super);
            function CompanyManagerEditorDialog() {
                var _this = _super.apply(this, arguments) || this;
                _this.form = new MutualFund.CompanyManagerForm(_this.idPrefix);
                return _this;
            }
            CompanyManagerEditorDialog.prototype.getFormKey = function () { return MutualFund.CompanyManagerForm.formKey; };
            CompanyManagerEditorDialog.prototype.getLocalTextPrefix = function () { return MutualFund.CompanyManagerRow.localTextPrefix; };
            CompanyManagerEditorDialog.prototype.getNameProperty = function () { return MutualFund.CompanyManagerRow.nameProperty; };
            return CompanyManagerEditorDialog;
        }(Mervalito.Common.GridEditorDialog));
        CompanyManagerEditorDialog = __decorate([
            Serenity.Decorators.registerClass(),
            Serenity.Decorators.responsive()
        ], CompanyManagerEditorDialog);
        MutualFund.CompanyManagerEditorDialog = CompanyManagerEditorDialog;
    })(MutualFund = Mervalito.MutualFund || (Mervalito.MutualFund = {}));
})(Mervalito || (Mervalito = {}));
var Mervalito;
(function (Mervalito) {
    var MutualFund;
    (function (MutualFund) {
        var CompanyManagerGrid = (function (_super) {
            __extends(CompanyManagerGrid, _super);
            function CompanyManagerGrid(container) {
                return _super.call(this, container) || this;
            }
            CompanyManagerGrid.prototype.getColumnsKey = function () { return 'MutualFund.CompanyManager'; };
            CompanyManagerGrid.prototype.getDialogType = function () { return MutualFund.CompanyManagerDialog; };
            CompanyManagerGrid.prototype.getIdProperty = function () { return MutualFund.CompanyManagerRow.idProperty; };
            CompanyManagerGrid.prototype.getLocalTextPrefix = function () { return MutualFund.CompanyManagerRow.localTextPrefix; };
            CompanyManagerGrid.prototype.getService = function () { return MutualFund.CompanyManagerService.baseUrl; };
            return CompanyManagerGrid;
        }(Serenity.EntityGrid));
        CompanyManagerGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], CompanyManagerGrid);
        MutualFund.CompanyManagerGrid = CompanyManagerGrid;
    })(MutualFund = Mervalito.MutualFund || (Mervalito.MutualFund = {}));
})(Mervalito || (Mervalito = {}));
var Mervalito;
(function (Mervalito) {
    var MutualFund;
    (function (MutualFund) {
        var InvestmentHorizonDialog = (function (_super) {
            __extends(InvestmentHorizonDialog, _super);
            function InvestmentHorizonDialog() {
                var _this = _super.apply(this, arguments) || this;
                _this.form = new MutualFund.InvestmentHorizonForm(_this.idPrefix);
                return _this;
            }
            InvestmentHorizonDialog.prototype.getFormKey = function () { return MutualFund.InvestmentHorizonForm.formKey; };
            InvestmentHorizonDialog.prototype.getIdProperty = function () { return MutualFund.InvestmentHorizonRow.idProperty; };
            InvestmentHorizonDialog.prototype.getLocalTextPrefix = function () { return MutualFund.InvestmentHorizonRow.localTextPrefix; };
            InvestmentHorizonDialog.prototype.getNameProperty = function () { return MutualFund.InvestmentHorizonRow.nameProperty; };
            InvestmentHorizonDialog.prototype.getService = function () { return MutualFund.InvestmentHorizonService.baseUrl; };
            return InvestmentHorizonDialog;
        }(Serenity.EntityDialog));
        InvestmentHorizonDialog = __decorate([
            Serenity.Decorators.registerClass(),
            Serenity.Decorators.responsive()
        ], InvestmentHorizonDialog);
        MutualFund.InvestmentHorizonDialog = InvestmentHorizonDialog;
    })(MutualFund = Mervalito.MutualFund || (Mervalito.MutualFund = {}));
})(Mervalito || (Mervalito = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var Mervalito;
(function (Mervalito) {
    var MutualFund;
    (function (MutualFund) {
        var InvestmentHorizonEditor = (function (_super) {
            __extends(InvestmentHorizonEditor, _super);
            function InvestmentHorizonEditor(container) {
                return _super.call(this, container) || this;
            }
            InvestmentHorizonEditor.prototype.getColumnsKey = function () { return 'MutualFund.InvestmentHorizon'; };
            InvestmentHorizonEditor.prototype.getDialogType = function () { return MutualFund.InvestmentHorizonEditorDialog; };
            InvestmentHorizonEditor.prototype.getLocalTextPrefix = function () { return MutualFund.InvestmentHorizonRow.localTextPrefix; };
            return InvestmentHorizonEditor;
        }(Mervalito.Common.GridEditorBase));
        InvestmentHorizonEditor = __decorate([
            Serenity.Decorators.registerClass()
        ], InvestmentHorizonEditor);
        MutualFund.InvestmentHorizonEditor = InvestmentHorizonEditor;
    })(MutualFund = Mervalito.MutualFund || (Mervalito.MutualFund = {}));
})(Mervalito || (Mervalito = {}));
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
var Mervalito;
(function (Mervalito) {
    var MutualFund;
    (function (MutualFund) {
        var InvestmentHorizonEditorDialog = (function (_super) {
            __extends(InvestmentHorizonEditorDialog, _super);
            function InvestmentHorizonEditorDialog() {
                var _this = _super.apply(this, arguments) || this;
                _this.form = new MutualFund.InvestmentHorizonForm(_this.idPrefix);
                return _this;
            }
            InvestmentHorizonEditorDialog.prototype.getFormKey = function () { return MutualFund.InvestmentHorizonForm.formKey; };
            InvestmentHorizonEditorDialog.prototype.getLocalTextPrefix = function () { return MutualFund.InvestmentHorizonRow.localTextPrefix; };
            InvestmentHorizonEditorDialog.prototype.getNameProperty = function () { return MutualFund.InvestmentHorizonRow.nameProperty; };
            return InvestmentHorizonEditorDialog;
        }(Mervalito.Common.GridEditorDialog));
        InvestmentHorizonEditorDialog = __decorate([
            Serenity.Decorators.registerClass(),
            Serenity.Decorators.responsive()
        ], InvestmentHorizonEditorDialog);
        MutualFund.InvestmentHorizonEditorDialog = InvestmentHorizonEditorDialog;
    })(MutualFund = Mervalito.MutualFund || (Mervalito.MutualFund = {}));
})(Mervalito || (Mervalito = {}));
var Mervalito;
(function (Mervalito) {
    var MutualFund;
    (function (MutualFund) {
        var InvestmentHorizonGrid = (function (_super) {
            __extends(InvestmentHorizonGrid, _super);
            function InvestmentHorizonGrid(container) {
                return _super.call(this, container) || this;
            }
            InvestmentHorizonGrid.prototype.getColumnsKey = function () { return 'MutualFund.InvestmentHorizon'; };
            InvestmentHorizonGrid.prototype.getDialogType = function () { return MutualFund.InvestmentHorizonDialog; };
            InvestmentHorizonGrid.prototype.getIdProperty = function () { return MutualFund.InvestmentHorizonRow.idProperty; };
            InvestmentHorizonGrid.prototype.getLocalTextPrefix = function () { return MutualFund.InvestmentHorizonRow.localTextPrefix; };
            InvestmentHorizonGrid.prototype.getService = function () { return MutualFund.InvestmentHorizonService.baseUrl; };
            return InvestmentHorizonGrid;
        }(Serenity.EntityGrid));
        InvestmentHorizonGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], InvestmentHorizonGrid);
        MutualFund.InvestmentHorizonGrid = InvestmentHorizonGrid;
    })(MutualFund = Mervalito.MutualFund || (Mervalito.MutualFund = {}));
})(Mervalito || (Mervalito = {}));
var Mervalito;
(function (Mervalito) {
    var MutualFund;
    (function (MutualFund) {
        var MutualFundDialog = (function (_super) {
            __extends(MutualFundDialog, _super);
            function MutualFundDialog() {
                var _this = _super.apply(this, arguments) || this;
                _this.form = new MutualFund.MutualFundForm(_this.idPrefix);
                return _this;
            }
            MutualFundDialog.prototype.getFormKey = function () { return MutualFund.MutualFundForm.formKey; };
            MutualFundDialog.prototype.getIdProperty = function () { return MutualFund.MutualFundRow.idProperty; };
            MutualFundDialog.prototype.getLocalTextPrefix = function () { return MutualFund.MutualFundRow.localTextPrefix; };
            MutualFundDialog.prototype.getNameProperty = function () { return MutualFund.MutualFundRow.nameProperty; };
            MutualFundDialog.prototype.getService = function () { return MutualFund.MutualFundService.baseUrl; };
            return MutualFundDialog;
        }(Serenity.EntityDialog));
        MutualFundDialog = __decorate([
            Serenity.Decorators.registerClass(),
            Serenity.Decorators.responsive()
        ], MutualFundDialog);
        MutualFund.MutualFundDialog = MutualFundDialog;
    })(MutualFund = Mervalito.MutualFund || (Mervalito.MutualFund = {}));
})(Mervalito || (Mervalito = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var Mervalito;
(function (Mervalito) {
    var MutualFund;
    (function (MutualFund) {
        var MutualFundEditor = (function (_super) {
            __extends(MutualFundEditor, _super);
            function MutualFundEditor(container) {
                return _super.call(this, container) || this;
            }
            MutualFundEditor.prototype.getColumnsKey = function () { return 'MutualFund.MutualFund'; };
            MutualFundEditor.prototype.getDialogType = function () { return MutualFund.MutualFundEditorDialog; };
            MutualFundEditor.prototype.getLocalTextPrefix = function () { return MutualFund.MutualFundRow.localTextPrefix; };
            return MutualFundEditor;
        }(Mervalito.Common.GridEditorBase));
        MutualFundEditor = __decorate([
            Serenity.Decorators.registerClass()
        ], MutualFundEditor);
        MutualFund.MutualFundEditor = MutualFundEditor;
    })(MutualFund = Mervalito.MutualFund || (Mervalito.MutualFund = {}));
})(Mervalito || (Mervalito = {}));
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
var Mervalito;
(function (Mervalito) {
    var MutualFund;
    (function (MutualFund) {
        var MutualFundEditorDialog = (function (_super) {
            __extends(MutualFundEditorDialog, _super);
            function MutualFundEditorDialog() {
                var _this = _super.apply(this, arguments) || this;
                _this.form = new MutualFund.MutualFundForm(_this.idPrefix);
                return _this;
            }
            MutualFundEditorDialog.prototype.getFormKey = function () { return MutualFund.MutualFundForm.formKey; };
            MutualFundEditorDialog.prototype.getLocalTextPrefix = function () { return MutualFund.MutualFundRow.localTextPrefix; };
            MutualFundEditorDialog.prototype.getNameProperty = function () { return MutualFund.MutualFundRow.nameProperty; };
            return MutualFundEditorDialog;
        }(Mervalito.Common.GridEditorDialog));
        MutualFundEditorDialog = __decorate([
            Serenity.Decorators.registerClass(),
            Serenity.Decorators.responsive()
        ], MutualFundEditorDialog);
        MutualFund.MutualFundEditorDialog = MutualFundEditorDialog;
    })(MutualFund = Mervalito.MutualFund || (Mervalito.MutualFund = {}));
})(Mervalito || (Mervalito = {}));
var Mervalito;
(function (Mervalito) {
    var MutualFund;
    (function (MutualFund) {
        var MutualFundGrid = (function (_super) {
            __extends(MutualFundGrid, _super);
            function MutualFundGrid(container) {
                return _super.call(this, container) || this;
            }
            MutualFundGrid.prototype.getColumnsKey = function () { return 'MutualFund.MutualFund'; };
            MutualFundGrid.prototype.getDialogType = function () { return MutualFund.MutualFundDialog; };
            MutualFundGrid.prototype.getIdProperty = function () { return MutualFund.MutualFundRow.idProperty; };
            MutualFundGrid.prototype.getLocalTextPrefix = function () { return MutualFund.MutualFundRow.localTextPrefix; };
            MutualFundGrid.prototype.getService = function () { return MutualFund.MutualFundService.baseUrl; };
            return MutualFundGrid;
        }(Serenity.EntityGrid));
        MutualFundGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], MutualFundGrid);
        MutualFund.MutualFundGrid = MutualFundGrid;
    })(MutualFund = Mervalito.MutualFund || (Mervalito.MutualFund = {}));
})(Mervalito || (Mervalito = {}));
//# sourceMappingURL=Mervalito.Web.js.map