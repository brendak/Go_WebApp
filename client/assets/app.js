
var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function ($httpProvider, $routeProvider) {
$httpProvider.interceptors.push(
  function($q, $location) {
  return {
      'responseError':function(rejection){
      if (rejection.status == 401){
          $location.url('/');
      }
      return $q.reject(rejection);
  }
};
});
  $routeProvider
  .when('/',{
      templateUrl: 'assets/partials/home.html',
  })
  .when('/login',{
      templateUrl: 'assets/partials/loginpage.html',
       controller: 'userController',
       controllerAs: "meep"
  })

  .when('/addevent', {
    templateUrl:'assets/partials/addevent.html',
    controller: 'eventController',
    controllerAs:"meep"
  })
  .when('/showevents',{
      templateUrl: 'assets/partials/showevents.html',

  })

    .otherwise({
      redirectTo: '/'
    });
});
