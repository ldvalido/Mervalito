
namespace Mervalito.MutualFund {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class MutualFundDialog extends Serenity.EntityDialog<MutualFundRow, any> {
        protected getFormKey() { return MutualFundForm.formKey; }
        protected getIdProperty() { return MutualFundRow.idProperty; }
        protected getLocalTextPrefix() { return MutualFundRow.localTextPrefix; }
        protected getNameProperty() { return MutualFundRow.nameProperty; }
        protected getService() { return MutualFundService.baseUrl; }

        protected form = new MutualFundForm(this.idPrefix);

    }
}