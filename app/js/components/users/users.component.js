import angular from 'angular';
import UsersController from './users.controller';

angular
  .module('myApp')
  .component("usersComponent", {
    templateUrl: 'users.template.html',
    bindings: {},
    controller: UsersController
  })
