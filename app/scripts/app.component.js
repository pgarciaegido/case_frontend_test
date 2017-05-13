export const AppComponent = {
  template: `<app-header></app-header>
             <ng-outlet></ng-outlet>`,
  $routeConfig: [
    { path: '/', component: 'usersList', name: 'List' },
    { path: '/user/:id', component: 'displayAlbumsPosts', name: 'Display' },
    { path: '/**', redirectTo: ['List'] }
  ]
}