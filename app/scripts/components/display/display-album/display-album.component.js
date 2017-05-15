import DisplayAlbumController from './display-album.controller';

DisplayAlbumController.$inject = ['HttpRequestsService',
                                  'ComponentComunicatorService']

export const DisplayAlbum = {
  templateUrl: 'display-album.template.html',
  bindings: { },
  controllerAs: 'model',
  controller: DisplayAlbumController
}
