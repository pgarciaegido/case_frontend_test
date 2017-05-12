export const DisplayAlbumsPosts = {
  templateUrl: 'display-albums-posts.template.html',
  bindings: { },
  controllerAs: 'model',
  controller: function($http) {
    let model = this;

    model.albums = [];
    model.posts = [];

    model.userId;

    model.$routerOnActivate = function (next, previous) {
      model.userId = next.params.id;

      $http.get('http://jsonplaceholder.typicode.com/posts?userId=' + model.userId)
        .then((response) => {
          console.log(response.data);
          model.posts = response.data;
        })

      $http.get('http://jsonplaceholder.typicode.com/albums?userId=' + model.userId)
        .then((response) => {
          console.log(response.data);
          model.albums = response.data;
        })
    }
  }
}
