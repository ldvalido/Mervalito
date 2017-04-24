
namespace Mervalito.Administration.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), TableName("[dbo].[Setting]"), DisplayName("Settings"), InstanceName("Settings"), TwoLevelCached]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class SettingsRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id Setting"), Identity]
        public Int32? IdSetting
        {
            get { return Fields.IdSetting[this]; }
            set { Fields.IdSetting[this] = value; }
        }

        [DisplayName("Setting Name"), Size(50), NotNull, QuickSearch,ReadOnly(true)]
        public String SettingName
        {
            get { return Fields.SettingName[this]; }
            set { Fields.SettingName[this] = value; }
        }

        [DisplayName("Setting Value"), Size(-1), NotNull]
        public String SettingValue
        {
            get { return Fields.SettingValue[this]; }
            set { Fields.SettingValue[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.IdSetting; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.SettingName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public SettingsRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field IdSetting;
            public StringField SettingName;
            public StringField SettingValue;

            public RowFields()
                : base()
            {
                LocalTextPrefix = "Administration.Settings";
            }
        }
    }
}
