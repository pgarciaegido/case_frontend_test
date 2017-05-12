import angular from 'angular';
import ngComponentRouter from 'ngcomponentrouter';
import { AppComponent } from './app.component';
import commons from './commons/commons';
import components from './components/components';

const root = angular
  .module('caseTest', [ngComponentRouter, commons, components])
  .component('appRoot', AppComponent)
  .value("$routerRootComponent", "appRoot")

document.addEventListener('DOMContentLoaded', () => angular.bootstrap(document, ['caseTest']))

export default root
