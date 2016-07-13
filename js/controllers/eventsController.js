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
