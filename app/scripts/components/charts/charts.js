import angular from 'angular';
import { ChartsComponent } from './charts.component';

const charts = angular
  .module('charts', [])
  .component('charts', ChartsComponent)
  .name

export default charts
