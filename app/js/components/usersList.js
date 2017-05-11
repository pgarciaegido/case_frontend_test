angular
  .module('myApp')
  .controller('Test', ["$scope", "HttpService", ($scope, HttpService) => {
    const postsPath = '/users'

    HttpService.get(postsPath)
      .then((data) => {
        $scope.data = data;
        console.log($scope.data)
      })
  }])
