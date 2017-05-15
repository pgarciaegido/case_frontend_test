import { routesAPI } from '../../../utils/routes';
import SearchUserController from './search-user.controller';

export const SearchByUserComponent = {
  templateUrl: 'search.template.html',
  controllerAs: 'model',
  controller: SearchUserController
}
