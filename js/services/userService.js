module.exports = function(app){


  app.factory('userService',['$http', function($http){

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
                  angular.copy(el, currentUser)
                } else{
                  alert("please create a user")
                };
              })
          })
          // console.log("allsongs arrar", allSongList);
          return currentUser
      },

    };
  }]);
};
