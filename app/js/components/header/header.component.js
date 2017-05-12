import HeaderController from './header.controller';

angular
  .module('myApp')
  .component("headerComponent", {
    templateUrl: 'header.template.html',
    bindings: {},
    controller: HeaderController
  })
