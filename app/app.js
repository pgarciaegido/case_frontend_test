var myApp = angular.module('myApp',['ngRoute']);

myApp.controller('GreetingController', ['$scope', ($scope) => {
  $scope.greeting = 'Hola!';
}]);

myApp.controller('Test', ['$scope', ($scope) => {
  $scope.sum = (num) =>  { return num + 2 }
}])
