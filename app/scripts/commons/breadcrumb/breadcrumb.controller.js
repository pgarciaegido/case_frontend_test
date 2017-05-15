export default function BreadcrumbController(HttpRequestsService,
                                             ComponentComunicatorService,
                                             $location) {
  let model = this;
  // Tries to get username from here.
  model.userName = ComponentComunicatorService.getInfo('currentUserName');

  // If not working, make ajax call to get it from API.

  // Getting userId from url.
  let url = $location.path();
  let userIdRegex = /user\/([0-9]+)/;
  model.userId = url.match(userIdRegex)[1];

  if (!model.userName) {
    let path = '/users?id=' + model.userId;
    HttpRequestsService.get(path)
      .then(res => {
        model.userName = res[0].name
      })
  }
}
