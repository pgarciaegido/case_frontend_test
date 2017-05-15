import BreadcrumbController from './breadcrumb.controller.js'

BreadcrumbController.$inject = ['HttpRequestsService',
                               'ComponentComunicatorService',
                               '$location'];

export const BreadcrumbComponent = {
  templateUrl: 'breadcrumb.template.html',
  controllerAs: 'model',
  controller: BreadcrumbController
}
