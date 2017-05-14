export default
function DisplayAlbumsPostsController(HttpRequestsService, ComponentComunicatorService) {

  let model = this;

  model.albums = [];
  model.posts = [];
  model.post = [];

  model.userId;
  // If we do not come from users-list component, make a request to API to get
  // the name. [below]
  model.userName = ComponentComunicatorService.getInfo('currentUserName');

  // When router selects this component:
  model.$routerOnActivate = function (next, previous) {
    // Getting id param
    model.userId = next.params.id;

    if (!model.userName) {
      let path = '/users?id=' + model.userId
      HttpRequestsService.get(path)
        .then(res => {
          model.userName = res[0].name
        })
    }

    model.pathPosts = '/posts?userId=' + model.userId;
    model.pathAlbums = '/albums?userId=' + model.userId;

    HttpRequestsService.get(model.pathPosts)
      .then(res => model.posts = res);

    HttpRequestsService.get(model.pathAlbums)
      .then(res => model.albums = res);
  }

  model.$routerOnDeactivate = function (next, previous) {
    // Passes the requested post to display-post component.
    // Setter here, getter there.
    if (next.routeName === 'Post') {
      let postId = next.params.postId;
      // Gets the requested post info from posts array
      model.post = model.posts.filter(x => x.id === postId)
      ComponentComunicatorService.setInfo('post', model.post)
    }
  }
}
