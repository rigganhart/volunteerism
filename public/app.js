(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = function(app) {
    app.controller('eventsController', ['$scope', '$http', 'eventService', 'userService', function($scope, $http, eventService, userService) {
      $scope.eventList = eventService.getEvents();




    }]);
};

},{}],2:[function(require,module,exports){
module.exports = function(app) {
    app.controller('loginController', ['$scope', '$http', function($scope, $http) {



      scope.login = function(){
        
      }

    }]);
};

},{}],3:[function(require,module,exports){
module.exports = function(app) {
    app.controller('myEventsController', ['$scope', '$http', 'eventService', 'userService', function($scope, $http, eventService, userService) {
      $scope.myEvents= eventService.getMyEvents();




    }]);
};

},{}],4:[function(require,module,exports){
let app = angular.module('Volunteerism', ['ngRoute']);

// Controllers
require('./controllers/eventsController')(app);
require('./controllers/loginController')(app);
require('./controllers/myEventsController')(app);

// Services
require('./services/eventService')(app);
require('./services/userService')(app);


//router
app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    .when('/', {
      redirectTo: '/login',
    })
    .when('/login', {
      controller: 'loginController',
      templateUrl: 'templates/login.html',
    })
    .when('/events', {
      controller: 'eventsController',
      templateUrl: 'templates/allEvents.html',
    })
    .when('/myEvents', {
      controller: 'myEventsController',
      templateUrl: 'templates/myEvents.html',
    });

}]);

},{"./controllers/eventsController":1,"./controllers/loginController":2,"./controllers/myEventsController":3,"./services/eventService":5,"./services/userService":6}],5:[function(require,module,exports){
module.exports = function(app){


  app.factory('eventService',['$http', function($http){
    let eventList = [];
    let myEventList =[];


    return{
      getEvents: function() {
        $http({
              method: 'GET',
              url: 'http://localhost:3000/api/events.json',
          }).then(function(response) {
            console.log("all events", response);
            angular.copy(response.data, eventList);
          })
          // console.log("allsongs arrar", allSongList);
          return eventList
      },
      getMyEvents: function(){
        $http({
              method: 'GET',
              url: 'http://localhost:3000/api/events.json',
          }).then(function(response) {
            console.log("my events", response);
            angular.copy(response.data, myEventList);
          })
          // console.log("allsongs arrar", allSongList);
          return myEventList
      },
    };
  }]);
};

},{}],6:[function(require,module,exports){
module.exports = function(app){


  app.factory('userService',['$http', function($http){

    let allUsers = [];
    let currentUser = {};

    return{
      login: function(user,pass) {
        $http({
              method: 'GET',
              url: 'http://localhost:3000/api/users.json',
          }).then(function(response) {
            console.log("all users", response);
            angular.copy(response.data, allUsers);
              allUsers.forEach(function(el){
                if (el.username === user) {
                  angular.copy(el, currentUser)
                } else{
                  alert("please create a user")
                };
              })
          })
          // console.log("allsongs arrar", allSongList);
          return currentUser
      },

    };
  }]);
};

},{}]},{},[4])