import angular from 'angular';
import { HeaderComponent } from './header/header.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';

const commons = angular
  .module('app.commons', [])
  .component('appHeader', HeaderComponent)
  .component('breadcrumb', BreadcrumbComponent)
  .name

export default commons
