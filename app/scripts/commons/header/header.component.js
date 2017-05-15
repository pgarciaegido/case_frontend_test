import HeaderController from './header.controller';

HeaderController.$inject = ['$location'];

export const HeaderComponent = {
  templateUrl: 'header.template.html',
  controllerAs: 'model',
  controller: HeaderController
}
