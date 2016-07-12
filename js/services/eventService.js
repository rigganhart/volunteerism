module.exports = function(app){


  app.factory('eventService',['$http', function($http){
    let eventList = [];
    let myEventList =[];


    return{
      getEvents: function() {
        $http({
              method: 'GET',
              url: 'http://localhost:3000/api/events.json',
          }).then(function(response) {
            console.log("all events", response);
            angular.copy(response.data, eventList);
          })
          // console.log("allsongs arrar", allSongList);
          return eventList
      },
      getMyEvents: function(){
        $http({
              method: 'GET',
              url: 'http://localhost:3000/api/events.json',
          }).then(function(response) {
            console.log("my events", response);
            angular.copy(response.data, myEventList);
          })
          // console.log("allsongs arrar", allSongList);
          return myEventList
      },
    };
  }]);
};
