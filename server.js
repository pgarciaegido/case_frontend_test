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

function renderIndex (request, reply) {
  reply.file('index.html');
}

// inert is a plugin to serve statics
server.register(require('inert'), (err) => {

  if (err) throw err;

  server.route({
    method: 'GET',
    path: '/',
    handler: renderIndex
  });

  server.route({
    method: 'GET',
    path: '/user/{id}',
    handler: renderIndex
  });

  server.route({
    method: 'GET',
    path: '/scripts/{file*}',
    handler: {
      directory: {
        path: 'scripts'
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

  // Even tho the files are hosted in templates folder, I'm serving them from the
  // root so it matches components file location.
  server.route({
    method: 'GET',
    path: '/{file*}',
    handler: {
      directory: {
        path: 'templates'
      }
    }
  })
});

server.start((err) => {
  if (err) throw err;
  console.log('Running at', server.info.uri)
})
