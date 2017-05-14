import angular from 'angular';
import { UsersList } from './users-list/users-list.component';

const users = angular
  .module('users', [])
  .component('usersList', UsersList)
  .name

export default users;
