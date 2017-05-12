import angular from 'angular';

export default
angular
  .module('myApp')
  .factory('HttpService', ["$http", ($http) => {
    let httpService = {}

    httpService.baseUrl = 'http://jsonplaceholder.typicode.com';

    httpService.get = function(path) {
      let promise = $http.get(httpService.baseUrl + path)
        .then((response) => {
          return response.data;
        });
        return promise;
    }

    return httpService;
  }])
