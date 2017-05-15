import { routesAPI } from '../../../utils/routes.js';

export default function DisplayAlbumController(HttpRequestsService) {
  let model = this;
  model.photos = [];
  model.albumId;
  model.hideLoader = false;

  // When router selects this component:
  model.$routerOnActivate = function (next) {
    // Getting albumId param
    model.albumId = next.params.albumId;

    model.pathAlbum = routesAPI.getPhotosByAlbumIdPath + model.albumId;

    HttpRequestsService.get(model.pathAlbum)
      .then((res) => {
        model.photos = res;
        model.hideLoader = true;
      })
      .catch((err) => {
        console.log('error fetching album ' + err);
        model.hideLoader = true;
      })

  }
}
