import ChartsController from './charts.controller';

ChartsController.$inject = ['HttpRequestsService',
                            'ComponentComunicatorService']

export const ChartsComponent = {
  templateUrl: 'charts.template.html',
  bindings: { },
  controllerAs: 'model',
  controller: ChartsController
}
