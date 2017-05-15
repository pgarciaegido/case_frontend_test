import DisplayAlbumsPostsController from './display-albums-posts.controller';

DisplayAlbumsPostsController.$inject = ['HttpRequestsService',
                                        'ComponentComunicatorService'];

export const DisplayAlbumsPosts = {
  templateUrl: 'display-albums-posts.template.html',
  bindings: { },
  controllerAs: 'model',
  controller: DisplayAlbumsPostsController
}
