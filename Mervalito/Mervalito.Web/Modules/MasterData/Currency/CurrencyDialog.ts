﻿
namespace Mervalito.MasterData {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class CurrencyDialog extends Serenity.EntityDialog<CurrencyRow, any> {
        protected getFormKey() { return CurrencyForm.formKey; }
        protected getIdProperty() { return CurrencyRow.idProperty; }
        protected getLocalTextPrefix() { return CurrencyRow.localTextPrefix; }
        protected getNameProperty() { return CurrencyRow.nameProperty; }
        protected getService() { return CurrencyService.baseUrl; }

        protected form = new CurrencyForm(this.idPrefix);

    }
}