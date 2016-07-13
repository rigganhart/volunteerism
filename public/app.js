(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = function(app) {
    app.controller('eventsController', ['$scope', '$http', 'eventService', 'userService', function($scope, $http, eventService, userService) {
      $scope.eventList = eventService.getEvents();
      $scope.userList = userService.getAllUsers();
    //pagination:
      $scope.pageNumber = 1;
      $scope.itemsPePage =3;

      $scope.eventPage = eventService.getPages($scope.pagenumber, $scope.itemsPePage);

      $scope.next = function (){
        $scope.pageNumber = $scope.pageNumber + 1;
        $scope.eventPage = eventService.getPages($scope.pagenumber, $scope.itemsPePage);

      };
      $scope.prev =function (){
        $scope.pageNumber = $scope.pageNumber - 1;
        $scope.eventPage = eventService.getPages($scope.pagenumber, $scope.itemsPePage);
      };
    }]);
};

},{}],2:[function(require,module,exports){
module.exports = function(app) {
    app.controller('loginController', ['$scope', '$http', 'userService', function($scope, $http, userService) {



      $scope.login = function(){
        userService.login($scope.user,$scope.pass);
      }

    }]);
};

},{}],3:[function(require,module,exports){
module.exports = function(app) {
    app.controller('myEventsController', ['$scope', '$http', 'eventService', 'userService', function($scope, $http, eventService, userService) {
      $scope.user = userService.getCurrentUser();
      $scope.myEvents= eventService.getMyEvents($scope.user.fullName);
      console.log("users full name", $scope.user.fullName);

    }]);
};

},{}],4:[function(require,module,exports){
module.exports = function(app){

app.directive('event', function(){

return{
  restrict: 'E',
  templateUrl: 'templates/directives/event.html',
  

  replace: true,
}

});
}

},{}],5:[function(require,module,exports){
module.exports = function(app){

app.directive('signUp', function(){

return{
  restrict: 'E',
  templateUrl: 'templates/directives/signUp.html',
  
  replace: true,
}

});
}

},{}],6:[function(require,module,exports){
module.exports = function(app){

app.directive('user', function(){

return{
  restrict: 'E',
  templateUrl: 'templates/directives/user.html',

  replace: true,
}

});
}

},{}],7:[function(require,module,exports){
let app = angular.module('Volunteerism', ['ngRoute']);

// Controllers
require('./controllers/eventsController')(app);
require('./controllers/loginController')(app);
require('./controllers/myEventsController')(app);

// Services
require('./services/eventService')(app);
require('./services/userService')(app);


// Directives
require('./directives/eventDirective')(app)
require('./directives/signUpDirective')(app)
require('./directives/userDirective')(app)

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

},{"./controllers/eventsController":1,"./controllers/loginController":2,"./controllers/myEventsController":3,"./directives/eventDirective":4,"./directives/signUpDirective":5,"./directives/userDirective":6,"./services/eventService":8,"./services/userService":9}],8:[function(require,module,exports){
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

      getMyEvents: function(username){
        $http({
              method: 'GET',
              url: 'http://localhost:3000/api/events.json',
          }).then(function(response) {
            console.log("my events", response);
            angular.copy(response.data, eventList);
            eventList.forEach(function(el){
              if(el.host === username){
                myEventList.push(el);
              }
            })
          })
          // console.log("allsongs arrar", allSongList);
          return myEventList
      },

      getPages: function(pageNum, perPage){
        let start = (pageNum -1) * perPage;
        return eventList.slice(start, start + perPage)
      },
    };
  }]);
};

},{}],9:[function(require,module,exports){
module.exports = function(app){


  app.factory('userService',['$http', '$location', function($http, $location){

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
                  console.log("users match!");
                  angular.copy(el, currentUser)
                  $location.path('/myEvents');
                }
              })
              console.log("not in if statement", currentUser);
              return currentUser;
          })
          // console.log("allsongs arrar", allSongList);
      },
      getCurrentUser: function() {
       console.log("user info", currentUser);
       return currentUser
     },
      getAllUsers: function(){
        $http({
              method: 'GET',
              url: 'http://localhost:3000/api/users.json',
          }).then(function(response) {
            console.log("all users", response);
            angular.copy(response.data, allUsers);
          })
          return allUsers
      },

    };
  }]);
};

},{}]},{},[7])