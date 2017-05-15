import UsersListController from './users-list.controller';

UsersListController.$inject = ['HttpRequestsService',
                               'ComponentComunicatorService'];

export const UsersList = {
  templateUrl: 'users-list.template.html',
  controllerAs: 'model',
  controller: UsersListController
}
