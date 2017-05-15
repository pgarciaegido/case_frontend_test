import { routesAPI } from '../../../utils/routes.js';

export default function DisplayAlbumController(HttpRequestsService) {
  let model = this;
  model.photos = [];
  model.albumId;

  // When router selects this component:
  model.$routerOnActivate = function (next) {
    // Getting albumId param
    model.albumId = next.params.albumId;

    model.pathAlbum = routesAPI.getPhotosByAlbumIdPath + model.albumId;

    HttpRequestsService.get(model.pathAlbum)
      .then((res) => model.photos = res)
      .catch((err) => console.log('error fetching album ' + err))

  }
}
