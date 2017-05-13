import angular from 'angular'
import { SearchGeneralComponent } from './search-general/search-general.component';
import { SearchByUserComponent } from './search-user/search-user.component';

const search = angular
  .module('search', [])
  .component('searchGeneral', SearchGeneralComponent)
  .component('searchByUser', SearchByUserComponent)
  .name

export default search
