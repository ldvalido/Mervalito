
namespace Mervalito.MutualFund {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class CompanyManagerDialog extends Serenity.EntityDialog<CompanyManagerRow, any> {
        protected getFormKey() { return CompanyManagerForm.formKey; }
        protected getIdProperty() { return CompanyManagerRow.idProperty; }
        protected getLocalTextPrefix() { return CompanyManagerRow.localTextPrefix; }
        protected getNameProperty() { return CompanyManagerRow.nameProperty; }
        protected getService() { return CompanyManagerService.baseUrl; }

        protected form = new CompanyManagerForm(this.idPrefix);

    }
}