module.exports = function(app){

app.directive('signUp', function(){

return{
  restrict: 'E',
  templateUrl: 'templates/directives/signUp.html',
  
  replace: true,
}

});
}
