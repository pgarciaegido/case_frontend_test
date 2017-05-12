export default function UsersController($scope, HttpService) {

  let ctrl = this;
  const postsPath = '/users'

  HttpService.get(postsPath)
    .then((users) => {
      ctrl.users = users;
    })
}
