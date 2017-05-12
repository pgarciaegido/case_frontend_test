export const AppComponent = {
  template: `<app-header></app-header>
             <ng-outlet></ng-outlet>
             <display-album></display-album>
             <display-post></display-post>
             <display-albums-posts></display-albums-posts><br>
             <charts></charts>`,
  $routeConfig: [
    { path: '/', component: 'usersList', name: 'List' },
    { path: '/user/:id', component: 'displayAlbumsPosts', name: 'Display' },
    { path: '/**', redirectTo: ['List'] }
  ]
}
