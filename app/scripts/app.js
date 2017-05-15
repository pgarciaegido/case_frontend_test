import angular from 'angular';
import ngComponentRouter from 'ngcomponentrouter';
import { AppComponent } from './app.component';
import commons from './commons/commons';
import components from './components/components';

import HttpRequestsService from './services/http-requests.service';
import ComponentComunicatorService from './services/component-comunicator.service';
import SearchFilterService from './services/search-filter.service';

HttpRequestsService.$inject = ['$http'];

const root = angular
  .module('caseTest', [ngComponentRouter, commons, components])
  .factory('HttpRequestsService', HttpRequestsService)
  .factory('ComponentComunicatorService', ComponentComunicatorService)
  .factory('SearchFilterService', SearchFilterService)
  .component('appRoot', AppComponent)
  .value("$routerRootComponent", "appRoot")

document.addEventListener('DOMContentLoaded', () => angular.bootstrap(document, ['caseTest']))

export default root
