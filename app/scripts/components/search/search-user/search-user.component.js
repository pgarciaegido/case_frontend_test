import { routesAPI } from '../../../utils/routes';
import SearchUserController from './search-user.controller';

SearchUserController.$inject = ['HttpRequestsService',
                                'ComponentComunicatorService',
                                'SearchFilterService']

export const SearchByUserComponent = {
  templateUrl: 'search.template.html',
  controllerAs: 'model',
  controller: SearchUserController
}
