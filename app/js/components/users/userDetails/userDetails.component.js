import angular from 'angular';
import UserDetailsController from './userDetails.controller';

angular
  .module('myApp')
  .component("userDetailsComponent", {
    templateUrl: 'userDetails.template.html',
    bindings: { user: '<' },
    controller: UserDetailsController
  })
