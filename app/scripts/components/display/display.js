import angular from 'angular'
import { DisplayAlbumsPosts } from './display-albums-posts/display-albums-posts.component';
import { DisplayAlbum } from './display-album/display-album.component';
import { DisplayPost } from './display-post/display-post.component';

const display = angular
  .module('display', [])
  .component('displayAlbumsPosts', DisplayAlbumsPosts)
  .component('displayAlbum', DisplayAlbum)
  .component('displayPost', DisplayPost)
  .name

export default display
