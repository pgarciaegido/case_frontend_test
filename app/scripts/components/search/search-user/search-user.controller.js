import { routesAPI } from '../../../utils/routes';

export default function SearchUserController (HttpRequestsService,
                                              ComponentComunicatorService,
                                              SearchFilterService) {
  let model = this;

  model.hideLoader = false;

  model.$routerOnActivate = function (next) {
    model.userId = next.params.id;
    model.searchParam = next.params.search;
    model.userPosts = [];
    model.currentUser = ComponentComunicatorService.getCurrentUser();
    model.results;

    // If currentUser does not exist or is different than registered, make
    // ajax call and get new homie's posts :)
    if (!model.currentUser || model.currentUser.userId !== model.userId) {

      model.pathPostsByUser = routesAPI.getPostsByUserIdPath + model.userId;
      HttpRequestsService.get(model.pathPostsByUser)
        .then((response) => {
          model.userPosts = response;
          ComponentComunicatorService.setCurrentUser(model.userId, response)
          model.currentUser = ComponentComunicatorService.getCurrentUser();

          model.results = SearchFilterService(model.userPosts, model.searchParam)
          model.hideLoader = true;
        })
        .catch((err) => console.log('Error fetching posts! ' + err));
    } else {
      model.userPosts = model.currentUser.posts;
      model.results = SearchFilterService(model.userPosts, model.searchParam);
      model.hideLoader = true;
    }
  }
}
