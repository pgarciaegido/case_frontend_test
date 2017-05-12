import angular from 'angular';
import { AppComponent } from './app.component';
import commons from './commons/commons';

const root = angular
  .module('caseTest', [commons])
  .component('appRoot', AppComponent)

document.addEventListener('DOMContentLoaded', () => angular.bootstrap(document, ['caseTest']))

export default root
