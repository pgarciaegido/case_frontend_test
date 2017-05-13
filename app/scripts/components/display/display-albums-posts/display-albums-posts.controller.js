export default function DisplayAlbumsPostsController(HttpRequestsService) {
  let model = this;

  model.albums = [];
  model.posts = [];

  model.userId;

  // When router selects this component:
  model.$routerOnActivate = function (next, previous) {
    // Getting id param
    model.userId = next.params.id;

    model.pathPosts = '/posts?userId=' + model.userId;
    model.pathAlbums = '/albums?userId=' + model.userId;

    HttpRequestsService.get(model.pathPosts)
      .then(res => model.posts = res);

    HttpRequestsService.get(model.pathAlbums)
      .then(res => model.albums = res);

  }
}
