export default function UsersListController (HttpRequestsService, ComponentComunicatorService) {
  let model = this;
  model.hideLoader = false;

  model.users = [];
  HttpRequestsService.get('/users')
    .then((res) => {
      model.users = res;
      ComponentComunicatorService.setInfo('users', res);
      model.hideLoader = true;
    })
    .catch((err) => {
      console.log('error fetching users ' + err);
      model.hideLoader = true;
    })

  model.setCurrentUser = function(userName) {
    ComponentComunicatorService.setInfo('currentUserName', userName);
  }
}
