export default function HeaderController($location) {
  let model = this;

  model.searchText;
  model.userSearch = false;
  model.userId;

  // Searchs on clicking enter on the input
  model.searchEnter = function(event) {
    if(event.keyCode === 13) {
      model.path = model.userSearch ? `/search-by-user/${model.userId}/${model.searchText}`
                                    : `/search/${model.searchText}`
      $location.path(model.path);
      // Empties input search
      document.getElementById('search-input').value = '';
    }
  }

  const isUserRegex = /user/g;
  const userIdRegex = /user\/([0-9]+)/;

  // Executes when browser url changes.
  window.onhashchange = function() {
    let url = window.location.href;

    urlContainsUser(url)
  }

  function urlContainsUser (url) {
    // If url contains user, activates userSearch.
    if(isUserRegex.test(url)) {
      model.userSearch = true;
      // Gets user id in url
      model.userId = url.match(userIdRegex)[1];
    }
    else { model.userSearch = false }

  }

  model.$onInit = function () {
    urlContainsUser(window.location.href);
  }
}
