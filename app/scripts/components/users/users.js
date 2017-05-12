import angular from 'angular'
import { UsersList } from './users-list/users-list.component'
import { UsersDetail } from './users-detail/users-detail.component'

const users = angular
  .module('users', [])
  .component('usersList', UsersList)
  .component('usersDetail', UsersDetail)
  .name

export default users
