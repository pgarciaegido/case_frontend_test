import SearchGeneralController from './search-general.controller.js';

SearchGeneralController.$inject = ['HttpRequestsService',
                                   'ComponentComunicatorService',
                                   'SearchFilterService']

export const SearchGeneralComponent = {
  templateUrl: 'search.template.html',
  controllerAs: 'model',
  controller: SearchGeneralController
}
