var app = angular.module('userProfiles');

app.controller('MainController', function($scope, mainService) {
    
  var currentPage = 1;
  var maxPages = 1;
  var minPages = 1;

  $scope.getUsers = function() {
  	mainService.getUsers(currentPage)
    .then(function(response){
        $scope.users = response.data.data;
        maxPages = response.data.total_pages;
    })
  }
  
  $scope.isNotAtMax = function(){
      return currentPage < maxPages;
  }
  

  $scope.next = function(){
      if($scope.isNotAtMax()){
          currentPage++;
          $scope.getUsers();
      }
  }
  
  $scope.previous = function(){
      if(currentPage > minPages) {
          currentPage--;
          $scope.getUsers();
      }
  }

  $scope.getUsers();

});