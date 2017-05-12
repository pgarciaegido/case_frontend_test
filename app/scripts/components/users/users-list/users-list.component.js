export const UsersList = {
  templateUrl: 'users-list.template.html',
  controllerAs: 'model',
  controller: function ($http) {
    this.users = [];
    $http.get('http://jsonplaceholder.typicode.com/users')
      .then((response) => {
        this.users = response.data;
      })
  }
}
