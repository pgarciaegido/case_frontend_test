import angular from 'angular';
import users from './users/users';
import display from './display/display';
import search from './search/search';
import charts from './charts/charts';


const components = angular
  .module('app.components', [users, display, search, charts])
  .name

export default components
