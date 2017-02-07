namespace Mervalito.ScriptInitialization {
    Q.Config.responsiveDialogs = true;
    Q.Config.rootNamespaces.push('Mervalito');
    Serenity.EntityDialog.defaultLanguageList = LanguageList.getValue;
}