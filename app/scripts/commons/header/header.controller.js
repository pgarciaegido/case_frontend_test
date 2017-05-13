export default function HeaderController($location) {
  let model = this;

  model.searchText;
  model.$onInit = function() {
    // Searchs on clicking enter on the input
    model.searchEnter = function(event) {
      if(event.keyCode === 13) {
        model.path = '/search/' + model.searchText;
        $location.path(model.path);
      }
    }
  }
}
