export default function HeaderController($location) {
  let model = this;

  model.searchText;
  model.userSearch = false;
  model.userId;

  // Searchs on clicking enter on the input
  model.searchEnter = function(event) {
    if(event.keyCode === 13) {
      model.path = '/search/' + model.searchText;
      $location.path(model.path);
    }
  }

  // Executes when browser url changes.
  window.onhashchange = function() {
    let url = window.location.href;
    let isUserRegex = /user/g;
    let userIdRegex = /user\/([0-9]+)/;

    // If url contains user, activates userSearch.
    if(isUserRegex.test(url)) {
      model.userSearch = true;
      // Gets user id
      model.userId = url.match(userIdRegex)[1];
    }
  }
}
