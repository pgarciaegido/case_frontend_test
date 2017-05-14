export const AppComponent = {
  template: `<app-header></app-header>
             <ng-outlet></ng-outlet>`,
  $routeConfig: [
    { path: '/', component: 'usersList', name: 'List' },
    { path: '/search/:search', component: 'searchGeneral', name: 'Search' },
    { path: '/search-by-user/:id/:search', component: 'searchByUser', name: 'SearchByUser' },
    { path: '/user/:id', component: 'displayAlbumsPosts', name: 'Display' },
    { path: '/user/:id/album/:albumId', component: 'displayAlbum', name: 'Album' },
    { path: '/user/:id/post/:postId', component: 'displayPost', name: 'Post' },
    { path: '/**', redirectTo: ['List'] }
  ]
}
