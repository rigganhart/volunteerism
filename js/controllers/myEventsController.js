module.exports = function(app) {
    app.controller('myEventsController', ['$scope', '$http', 'eventService', 'userService', function($scope, $http, eventService, userService) {
      $scope.user = userService.getCurrentUser();
      $scope.myEvents= eventService.getMyEvents($scope.user.fullName);
      console.log("users full name", $scope.user.fullName);

    }]);
};
