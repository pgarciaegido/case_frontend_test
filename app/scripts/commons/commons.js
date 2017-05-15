import angular from 'angular';
import { HeaderComponent } from './header/header.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { LoaderComponent } from './loader/loader.component';

const commons = angular
  .module('app.commons', [])
  .component('appHeader', HeaderComponent)
  .component('breadcrumb', BreadcrumbComponent)
  .component('loader', LoaderComponent)
  .name

export default commons
