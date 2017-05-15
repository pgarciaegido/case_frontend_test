// Ajax call service.
// Receives path of URL eg. /users
// Returns a promise

import { routesAPI } from '../utils/routes';

export default function HttpRequestsService($http) {
  let httpService = {}

  httpService.baseUrl = routesAPI.baseUrl;

  httpService.get = function(path) {
    let promise = $http.get(httpService.baseUrl + path)
      .then((response) => {
        return response.data;
      });
      return promise;
  }
  return httpService;
}
