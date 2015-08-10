app.controller('DashboardCtrl', function($scope, CMSService,$location) {
      $scope.newProcess = function(){
      	$location.path( "/newProcess" );
      }
      $scope.editProcess = function(){
      	$location.path( "/editProcess" );
      }
});