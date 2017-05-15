import { routesAPI } from '../../../utils/routes';

export default
function DisplayAlbumsPostsController(HttpRequestsService, ComponentComunicatorService) {

  let model = this;

  model.albums = [];
  model.posts = [];
  model.post = [];

  model.userId;

  model.formOpen = false;

  // When router selects this component:
  model.$routerOnActivate = function (next, previous) {
    // Getting id param
    model.userId = next.params.id;

    model.pathPosts = routesAPI.getPostsByUserIdPath + model.userId;
    model.pathAlbums = routesAPI.getAlbumsByIdPath + model.userId;

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

  // Opens or closes form
  model.toggleForm = function () {
    model.formOpen = !model.formOpen;
  }

  model.title = '';
  model.body = '';
  model.feedback = '';

  model.handleForm = function () {
    // Checks that fields are not empty
    if(!model.title || !model.body)
      return model.feedback = 'Title or body missing!';

    let data = {
      title: model.title,
      body: model.body,
      userId: model.userId
    }

    HttpRequestsService.post(data)
      .then((x) => {
        model.posts.push(x);
        model.feedback = 'Post created!';
      })
  }
}
