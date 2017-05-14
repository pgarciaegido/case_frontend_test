export default function UsersListController (HttpRequestsService, ComponentComunicatorService) {
  let model = this;

  model.users = [];
  model.pathUsers = '/users';

  HttpRequestsService.get(model.pathUsers)
    .then(res => {
      model.users = res;
      ComponentComunicatorService.setInfo('users', res);
    })

  model.setCurrentUser = function(userName) {
    ComponentComunicatorService.setInfo('currentUserName', userName);
  }
}
