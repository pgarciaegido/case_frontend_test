export default function DisplayAlbumController(HttpRequestsService) {
  let model = this;
  model.albums = [];
  model.albumId;

  // When router selects this component:
  model.$routerOnActivate = function (next, previous) {
    // Getting albumId param
    model.albumId = next.params.albumId;

    model.pathAlbum = '/photos?albumId=' + model.albumId;

    HttpRequestsService.get(model.pathAlbum)
      .then(res => model.albums = res);

  }
}
