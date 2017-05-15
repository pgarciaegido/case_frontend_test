import { routesAPI } from '../../../utils/routes';

export default function DisplayPostController(HttpRequestsService, ComponentComunicatorService) {
  let model = this;

  model.comments = [];

  // When router selects this component:
  model.$routerOnActivate = function (next) {
    // Getting post param
    model.postId = next.params.postId;
    model.userId = next.params.id;

    model.pathComments = routesAPI.getCommentsByPostIdPath + model.postId;

    HttpRequestsService.get(model.pathComments)
      .then((res) => model.comments = res)
      .catch((err) => model.feedback = 'Error fetching comments! ' + err);

    // Here we get the selected post object from router. If we don't pass
    // from router, make new request to API.
    model.post = ComponentComunicatorService.getInfo('post');
    // Returns an array, so get first object
    if(model.post){
      model.post = model.post[0];
    }
    else {
      model.pathPost = routesAPI.getPostsByIdPath + model.postId
      HttpRequestsService.get(model.pathPost)
        .then((res) => {
          model.post = res;
        });
    }
  }
}
