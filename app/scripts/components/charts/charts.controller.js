import highcharts from 'highcharts';
import { defaultConfig } from './charts.config.js';
import { routesAPI } from '../../utils/routes';

export default function ChartsController(HttpRequestsService, ComponentComunicatorService) {

  let model = this;
  // Get array of all users to display select
  model.users = ComponentComunicatorService.getInfo('users');
  model.usersSelected = [];
  model.usersInfo = [];

  // Chart info
  model.chartInfo = defaultConfig;

  model.chart = highcharts.chart('graphics', model.chartInfo);

  if (!model.users) {
    HttpRequestsService.get(routesAPI.getAllUsersPath)
      .then((res) => {
        model.users = res;
        ComponentComunicatorService.setInfo('users', res);
      })
  }

  model.selectUser = function (event) {
    let selectedUserId = event.target.id;
    let selectedUserName = event.target.value;
    let pathPosts = routesAPI.getPostsByUserIdPath + selectedUserId;
    let pathAlbums = routesAPI.getAlbumsByIdPath + selectedUserId;
    let series = {};
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
          .catch((error) => console.log('Error fetching albums ' + error))
      })
      .catch((error) => console.log('Error fetching posts ' + error))
  }
}
