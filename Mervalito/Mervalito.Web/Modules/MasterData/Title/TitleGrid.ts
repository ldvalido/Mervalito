
namespace Mervalito.MasterData {
    
    @Serenity.Decorators.registerClass()
    export class TitleGrid extends Serenity.EntityGrid<TitleRow, any> {
        protected getColumnsKey() { return 'MasterData.Title'; }
        protected getDialogType() { return TitleDialog; }
        protected getIdProperty() { return TitleRow.idProperty; }
        protected getLocalTextPrefix() { return TitleRow.localTextPrefix; }
        protected getService() { return TitleService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }

        getButtons() {
            var buttons = super.getButtons();
            var MyRow = TitleRow.Fields;

            var exportButton =
                {
                    title: Q.text('Db.MasterData.Title.UpdateValues'),
                    onClick: e => {
                        var self = this;
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
                onViewSubmit: () => this.onViewSubmit(),
                service: TitleService.baseUrl + '/ListExcel',
                separator: true,
                //hint: "Export to excel",
                hint: Q.text('Db.MasterData.Title.ExportToExcel')

            }));

            buttons.push(exportButton);

            return buttons;
        }
    }
}