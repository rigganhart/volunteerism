module.exports = function(app){

app.directive('event', function(){

return{
  restrict: 'E',
  templateUrl: 'templates/directives/event.html',
  

  replace: true,
}

});
}
