myApp.controller('userController', ['$scope', "userFactory", "$location", function($scope, userFactory, $location){


  this.loginUser = function(user){
    console.log(user);
    userFactory.loginUser(user, function(data){
      if(data.hasOwnProperty('errors')){
        $scope.loginErrors=data.errors
      }else{
        $location.path('/addevent')
        console.log("go somehwere");
      }
    })
  }


}])
