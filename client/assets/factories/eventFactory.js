myApp.factory('eventFactory', ['$http', function($http){
var factory = {}

factory.showevents = function(callback){
  $http.get('/allEvents').then(function(returned_data){
    console.log(returned_data.data)
    callback(returned_data.data);
  })
}

factory.newEvent = function(events, callback){
  console.log("factory got events", events);
    $http.post('/newevent', events).then(function(returned_data){
    console.log("factory recieved this data", returned_data.data);
    callback(returned_data.data);
  })
}

factory.editEvent = function(eventId, myEvent, callback){
  console.log("got event id in factory", eventId);
  $http.post('/edit/'+eventId, myEvent).then(function(returned_data){
    callback(returned_data.data)
  })
}

factory.deleteEvent = function(eventId, callback){
  $http.post('/delete/'+eventId).then(function(returned_data){
    callback(returned_data.data)
  })
}

return factory;
}]);
