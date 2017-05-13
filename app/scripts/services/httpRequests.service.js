// Ajax call service.
// Receives path of URL eg. /users
// Returns a promise
export default function HttpRequestsService($http) {
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
}
