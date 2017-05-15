import { routesAPI } from '../../../utils/routes';

export default function UsersListController (HttpRequestsService, ComponentComunicatorService) {
  let model = this;

  model.users = [];
  HttpRequestsService.get('/users')
    .then(res => {
      model.users = res;
      ComponentComunicatorService.setInfo('users', res);
    })
    .catch(err => model.feedback = 'Error fetching users! ' + err);

  model.setCurrentUser = function(userName) {
    ComponentComunicatorService.setInfo('currentUserName', userName);
  }
}
