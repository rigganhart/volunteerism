module.exports = function(app) {
    app.controller('eventsController', ['$scope', '$http', 'eventService', 'userService', function($scope, $http, eventService, userService) {
      $scope.eventList = eventService.getEvents();




    }]);
};
