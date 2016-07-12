module.exports = function(app) {
    app.controller('myEventsController', ['$scope', '$http', 'eventService', 'userService', function($scope, $http, eventService, userService) {
      $scope.myEvents= eventService.getMyEvents();
      $scope.user = userService.getUser();



    }]);
};
