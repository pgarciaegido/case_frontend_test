export default function DisplayPostController(HttpRequestsService, ComponentComunicatorService) {
  let model = this;

  model.comments = [];

  // When router selects this component:
  model.$routerOnActivate = function (next, previous) {
    // Getting post param
    model.postId = next.params.postId;

    model.pathComments = '/comments?postId=' + model.postId;

    HttpRequestsService.get(model.pathComments)
      .then(res => model.comments = res);

    // Here we get the selected post object from router. If we don't pass
    // from router, make new request to API.
    model.post = ComponentComunicatorService.getInfo('post');
    console.log(model.post)

    if (!model.post) {
      console.log('pasa');
      model.pathPost = '/posts/' + model.postId
      HttpRequestsService.get(model.pathPost)
        .then(res => {
          console.log(res)
          model.post = res
        });
    }
  }
}
