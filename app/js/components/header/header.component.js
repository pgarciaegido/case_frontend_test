import angular from 'angular';
import HeaderController from './header.controller';

export default
angular
  .module('myApp')
  .component("headerComponent", {
    templateUrl: 'header.template.html',
    bindings: {},
    controller: HeaderController
  })
