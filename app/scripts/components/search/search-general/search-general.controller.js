import { routesAPI } from '../../../utils/routes';

export default function SearchGeneralController (HttpRequestsService,
                                                 ComponentComunicatorService,
                                                 SearchFilterService) {

  let model = this;

  model.hideLoader = false;

  model.$routerOnActivate = function (next) {
    // Try to get posts from comunicator.
    model.searchParam = next.params.search;
    model.posts = ComponentComunicatorService.getInfo('posts');
    // If it hasn't been included into comunicator object before, do it now.
    // This will cache the posts so we only make one call to the API.

    if (!model.posts) {

      HttpRequestsService.get(routesAPI.getAllPostsPath)
        .then((result) => {
          model.posts = result;
          ComponentComunicatorService.setInfo('posts', result);

          model.results = SearchFilterService(model.posts, model.searchParam);
          model.hideLoader = true;
        });

    } else{
      model.results = SearchFilterService(model.posts, model.searchParam);
      model.hideLoader = true;
    }
  }
}
