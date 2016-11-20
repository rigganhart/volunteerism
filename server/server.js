'use strict'


const Hapi = require('hapi');
const Inert = require('inert');
const Boom = require('boom');
const Mongojs = require('hapi-mongojs');

// Plugins config:
const plugins = [
  {
    register: Mongojs,
    options: {
      url: 'mongodb://localhost:27017/vol-db',
      // ENSURE COLLECTION INDEXES (OPTIONAL)
      collections: [
        {
          name: 'users'
        },
        {
          name: 'events'
        }
      ]
    }
  }
]



const server = new Hapi.Server();
server.connection({
  host: 'localhost',
  port: 7500,
});

server.register(Inert, () => {});


// USERS ROUTE
server.route({
  method: 'GET',
  path: '/users',
  handler: function (request, reply){
      // get db connection
      const userCollection = Mongojs.db().collection('users');

      // execute a query
      userCollection.find((error,value)=>{
        if (error) {
          return reply(Boom.badData('Internal MongoDB error', error));
        }
        reply(value);
      });
  }
});


// EVENTS ROUTE
server.route({
  method: 'GET',
  path: '/events',
  handler: function (request, reply){
    // get db connection
    const eventCollection = Mongojs.db().collection('events');

    // execute a query
    eventCollection.find((error,value)=>{
      if (error) {
        return reply(Boom.badData('Internal MongoDB error', error));
      }
      reply(value);
    });
  }
});

server.route({
    method: 'GET',
    path: '/{param*}',
    handler: {
        directory: {
            path: '../public/',
            redirectToSlash: true,
            index: true
        }
    }
});

server.register(plugins, (err) => {
  if (err) {
    console.error(err);
    throw err;
  }

server.start((err) => {
  if (err) { throw err }

  console.log('Server running at:', server.info.uri)
});
});
