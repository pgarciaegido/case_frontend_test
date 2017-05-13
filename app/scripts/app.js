import angular from 'angular';
import ngComponentRouter from 'ngcomponentrouter';
import { AppComponent } from './app.component';
import commons from './commons/commons';
import components from './components/components';
import HttpRequestsService from './services/httpRequests.service';

const root = angular
  .module('caseTest', [ngComponentRouter, commons, components])
  .factory('HttpRequestsService', HttpRequestsService)
  .component('appRoot', AppComponent)
  .value("$routerRootComponent", "appRoot")

document.addEventListener('DOMContentLoaded', () => angular.bootstrap(document, ['caseTest']))

export default root
