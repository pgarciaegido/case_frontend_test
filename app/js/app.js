/*
* Angular is declared on window object. Script is brought from CDN
*/
angular
  .module('myApp',[])

// Components
require('./components/header/header.component');

// Services
require('./services/httpRequest');
