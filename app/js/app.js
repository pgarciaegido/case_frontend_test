import angular from 'angular';

angular
  .module('myApp',[])

// Components
require('./components/header/header.component');

// Services
require('./services/httpRequest');
