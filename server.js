'use strict'

const Path = require('path');
const Hapi = require('hapi');

const server = new Hapi.Server({
  connections: {
    routes: {
      files: {
        // Setting relative paths in the dist folder
        relativeTo: Path.join(__dirname, 'dist')
      }
    }
  }
});

server.connection({ host: 'localhost', port: 8080 })

// inert is a plugin to serve statics
server.register(require('inert'), (err) => {

  if (err) throw err;

  server.route({
    method: 'GET',
    path: '/',
    handler: function (request, reply) {
      reply.file('index.html');
    }
  });

  server.route({
    method: 'GET',
    path: '/js/{file*}',
    handler: {
      directory: {
        path: 'js'
      }
    }
  })

  server.route({
    method: 'GET',
    path: '/css/{file*}',
    handler: {
      directory: {
        path: 'css'
      }
    }
  })
});

server.start((err) => {
  if (err) throw err;
  console.log('Running at', server.info.uri)
})
