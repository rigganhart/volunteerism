module.exports = function(app){

app.directive('user', function(){

return{
  restrict: 'E',
  templateUrl: 'templates/directives/user.html',

  replace: true,
}

});
}
