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

      getMyEvents: function(username){
        $http({
              method: 'GET',
              url: 'http://localhost:3000/api/events.json',
          }).then(function(response) {
            console.log("my events", response);
            angular.copy(response.data, eventList);
            eventList.forEach(function(el){
              if(el.host === username){
                myEventList.push(el);
              }
            })
          })
          // console.log("allsongs arrar", allSongList);
          return myEventList
      },

      getPages: function(pageNum, perPage){
        let start = (pageNum -1) * perPage;
        return eventList.slice(start, start + perPage)
      },
    };
  }]);
};
