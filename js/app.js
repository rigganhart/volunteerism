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
