import angular from 'angular';
import { HeaderComponent } from './header/header.component';

const commons = angular
  .module('app.commons', [])
  .component('appHeader', HeaderComponent)
  .name

export default commons
