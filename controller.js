var app = angular.module('userProfiles');

app.controller('MainController', function($scope, mainService) {
  
  $scope.currentPage = 1;
  $scope.maxPages = 4;
    
  $scope.getUsers = function(pageNum) {
  	$scope.users = mainService.getUsers(pageNum).then(function (response){
       $scope.users = response.data;  
       $scope.maxPages = response.total_pages;
    });
  }
  
  $scope.previous = function(){
    $scope.currentPage--;   
    $scope.getUsers($scope.currentPage);
  }
  
  $scope.next = function() {
    $scope.currentPage++;
    $scope.getUsers($scope.currentPage);
  }
  
  $scope.getUsers();

});