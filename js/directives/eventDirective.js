let eventVariable = angular.model('EventDirectives');

eventVariable.directive('Event', function(){

return{
  restrict: 'E',
  templateUrl: 'templates/directives/event.html'
}

})
