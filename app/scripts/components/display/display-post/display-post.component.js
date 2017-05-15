import DisplayPostController from './display-post.controller';

DisplayPostController.$inject = ['HttpRequestsService',
                                 'ComponentComunicatorService'];

export const DisplayPost = {
  templateUrl: 'display-post.template.html',
  bindings: { },
  controllerAs: 'model',
  controller: DisplayPostController
}
