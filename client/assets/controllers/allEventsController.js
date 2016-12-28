myApp.controller('allEventsController', ['eventFactory', '$location', '$routeParams', allEventsController]);

function allEventsController(eventFactory, $location, $routeParams){
  var _this = this;

  function showevents(){
    eventFactory.showevents($routeParams.id, function(data){
      _this.showevents=data;
    })
  }
  showevents();
}
