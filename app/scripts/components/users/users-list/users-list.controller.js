export default function UsersListController (HttpRequestsService) {
  let model = this;

  model.users = [];
  model.pathUsers = '/users'

  HttpRequestsService.get(model.pathUsers)
    .then(res => model.users = res)
}
