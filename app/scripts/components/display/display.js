import angular from 'angular'
import { DisplayAlbumsPosts } from './display-albums-posts/display-albums-posts.component';
import { DisplayAlbum } from './display-album/display-album.component';
import { DisplayPost } from './display-post/display-post.component';
import { Charts } from './charts/charts.component';

const display = angular
  .module('display', [])
  .component('displayAlbumsPosts', DisplayAlbumsPosts)
  .component('displayAlbum', DisplayAlbum)
  .component('displayPost', DisplayPost)
  .component('charts', Charts)
  .name

export default display
