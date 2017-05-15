import { routesAPI } from '../../utils/routes';

export default function BreadcrumbController(HttpRequestsService,
                                             ComponentComunicatorService,
                                             $location) {
  let model = this;
  // Tries to get cached username from here.
  model.userName = ComponentComunicatorService.getInfo('currentUserName');

  // If not working, make ajax call to get it from API [below].

  model.url = $location.path();
  // Getting userId from url.
  let userIdRegex = /user\/([0-9]+)/;
  model.userId = model.url.match(userIdRegex)[1];

  model.mainMenuBC;
  model.albumBC;
  model.postBC;

  // Checking if path contains album or post to render appropiate message
  model.pathContains = function () {
    if (model.url.indexOf('album') !== -1) return model.albumBC = true;
    else if (model.url.indexOf('post') !== -1) return model.postBC = true;
    else return model.mainMenuBC = true;
  }()

  // If not username cached, request and cache.
  if (!model.userName) {
    let path = routesAPI.getUserByIdPath + model.userId;
    HttpRequestsService.get(path)
      .then(res => {
        model.userName = res[0].name;
        ComponentComunicatorService.setInfo('currentUserName', model.userName);
      })
  }
}
