import angular from 'angular';
import users from './users/users';

const components = angular
  .module('app.components', [users])
  .name

export default components
