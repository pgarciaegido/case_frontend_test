import { routesAPI } from '../../../utils/routes.js';

export default function DisplayAlbumController(HttpRequestsService, ComponentComunicatorService) {
  let model = this;
  model.photos = [];
  model.albumId;

  // When router selects this component:
  model.$routerOnActivate = function (next, previous) {
    // Getting albumId param
    model.albumId = next.params.albumId;

    model.pathAlbum = routesAPI.getPhotosByAlbumIdPath + model.albumId;

    HttpRequestsService.get(model.pathAlbum)
      .then(res => model.photos = res);

  }
}
