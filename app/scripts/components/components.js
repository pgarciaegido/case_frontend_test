import angular from 'angular';
import users from './users/users';
import display from './display/display';


const components = angular
  .module('app.components', [users, display])
  .name

export default components
