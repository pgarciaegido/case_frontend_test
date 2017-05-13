import angular from 'angular';
import users from './users/users';
import display from './display/display';
import search from './search/search';


const components = angular
  .module('app.components', [users, display, search])
  .name

export default components
