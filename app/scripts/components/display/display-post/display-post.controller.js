export default function DisplayPostController(HttpRequestsService, ComponentComunicatorService) {
  let model = this;

  model.comments = [];

  model.userName = ComponentComunicatorService.getInfo('currentUserName');

  // When router selects this component:
  model.$routerOnActivate = function (next, previous) {
    // Getting post param
    model.postId = next.params.postId;
    model.userId = next.params.id;

    if (!model.userName) {
      let path = '/users?id=' + model.userId;
      HttpRequestsService.get(path)
        .then(res => {
          model.userName = res[0].name
        })
    }

    model.pathComments = '/comments?postId=' + model.postId;

    HttpRequestsService.get(model.pathComments)
      .then(res => model.comments = res);

    // Here we get the selected post object from router. If we don't pass
    // from router, make new request to API.
    model.post = ComponentComunicatorService.getInfo('post');
    // Returns an array, so get first object
    if(model.post){
      model.post = model.post[0]
    }
    else {
      model.pathPost = '/posts/' + model.postId
      HttpRequestsService.get(model.pathPost)
        .then(res => {
          model.post = res
        });
    }
  }
}
