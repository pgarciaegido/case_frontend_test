import highcharts from 'highcharts';
import { defaultConfig } from './charts.config.js';

export default function ChartsController(HttpRequestsService, ComponentComunicatorService) {

  let model = this;
  // Get array of all users to display select
  model.users = ComponentComunicatorService.getInfo('users');
  model.usersSelected = [];
  model.usersInfo = [];

  // Chart info
  console.log(defaultConfig);
  model.chartInfo = defaultConfig;

  model.chart = highcharts.chart('graphics', model.chartInfo);

  if (!model.users) {
    model.pathUsers = '/users';
    HttpRequestsService.get(model.pathUsers)
      .then((res) => {
        model.users = res;
        ComponentComunicatorService.setInfo('users', res);
      })
  }

  model.selectUser = function (event) {
    let selectedUserId = event.target.id;
    let selectedUserName = event.target.value;
    let pathPosts = '/posts?userId=' + selectedUserId;
    let pathAlbums = '/albums?userId=' + selectedUserId;
    let series = {}
    let chartSeries = model.chart.series;

    // If user is already included, return function
    for (let serie of chartSeries) {
      if (serie.name === selectedUserName) return
    }

    // Requires posts from selected user
    HttpRequestsService.get(pathPosts)
      .then((res) => {
        let postsLength = res.length;

        // Now requires albums
        HttpRequestsService.get(pathAlbums)
          .then((res) => {
            let albumsLength = res.length;
            let sumAlbumsPost = albumsLength + postsLength;

            series.name = selectedUserName;
            series.data = [postsLength, albumsLength, sumAlbumsPost];
            model.chart.addSeries(series);
          })
      })
  }

  model.changeCategories = function() {

  }
}
