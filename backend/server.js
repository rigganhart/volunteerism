'use strict'

let http = require('http');
let Hapi = require('hapi');
let Inert = require('inert');

const server = new Hapi.Server();
server.connection({
  host: 'localhost',
  port: 9000,
});

server.route({
  method: 'GET',
  path: '/users',
  handler: function (request, reply){
    let nouns = [
      'person',
      'place',
      'thing',
    ];

    return reply(nouns)
  }
});

server.route({
  method: 'GET',
  path: '/events',
  handler: function (request, reply){
    let events = [
      [{
        "eventName": "Kitten Mittens",
        "location": "Pet Helpers Charleston",
        "date": "12-12-16",
        "eventDescription": "raisng awareness of noisey cats",
        "volunteersNeeded": "10",
        "host": "Destiny Brinson"
    },
    {
        "eventName": "Blood Drive",
        "location": "Suffolk, VA",
        "date": "08-15-16",
        "eventDescription": "The Blood Donation Bus will be in various areas",
        "volunteersNeeded": "4",
        "host": "Chet Hart"
    },
    {
        "eventName": "Free Health Screening",
        "location": "WTFC",
        "date": "10-15-16",
        "eventDescription": "Free Health Screenings For The Needy",
        "volunteersNeeded": "20",
        "host": "Chet Hart"
    },
    {
        "eventName": "Code for the Heart",
        "location": "The Iron Yard, Charleston",
        "date": "12-15-16",
        "eventDescription": "A Hack-A-Thon where proceeds go to the National Heart Health Foundation",
        "volunteersNeeded": "5",
        "host": "Riggan Hart"
    },
    {
        "eventName": "Build a Statue of Dig Em",
        "location": "The Mayors Office",
        "date": "7-20-16",
        "eventDescription": "We must all band together to build a gold statue of Dig Em!",
        "volunteersNeeded": "100",
        "host": "Adam West"
    }
]

    ];

    return reply(events)
  }
});


server.start();




// function requestHandler(request, response){
//   console.log("got a request");
//
// }
//
// let server = http.createServer(requestHandler);
//
// server.listen(8123, function (){
//   console.log("server listening on: http://localhost:8123");
// })
