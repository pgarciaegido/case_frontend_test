import DisplayAlbumController from './display-album.controller';

export const DisplayAlbum = {
  template: '{{model.albums}}',
  bindings: { },
  controllerAs: 'model',
  controller: DisplayAlbumController
}
