export default function DisplayAlbumController(HttpRequestsService, ComponentComunicatorService) {
  let model = this;
  model.photos = [];
  model.albumId;

  model.userName = ComponentComunicatorService.getInfo('currentUserName');

  // When router selects this component:
  model.$routerOnActivate = function (next, previous) {
    // Getting albumId param
    model.albumId = next.params.albumId;
    model.userId = next.params.id;

    if (!model.userName) {
      let path = '/users?id=' + model.userId
      HttpRequestsService.get(path)
        .then(res => {
          model.userName = res[0].name
        })
    }

    model.pathAlbum = '/photos?albumId=' + model.albumId;

    HttpRequestsService.get(model.pathAlbum)
      .then(res => model.photos = res);

  }
}
