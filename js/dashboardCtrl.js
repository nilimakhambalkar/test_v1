app.controller('DashboardCtrl', function($scope, CMSService,$location) {
		$scope.val = "Vijay";
		$scope.gridData = null;
		//$scope.columns = null;
		CMSService.getGridData()
	     .then(function(data) {
	        console.log('albums returned to controller.',data);
	         var counter= 0;
	        _.each(data,function(item){
	          item["id"] = counter++;
	          item["Updated Date"] = "May, 27 2015";
	          
	        })

	        $scope.gridData = data;
	       
	      },function(data) {
	            console.log('albums retrieval failed.')
	      }); 


      $scope.newProcess = function(){

     	//var data = [{"id":1, "label":"India", "parent":0, "indent":0, "description":"abc", "owner":"Nilima", "updated":"08/12/2015"}];

      	$location.path( "/newProcess" );
      	//$scope.gridData = data;
      	  
      }
      $scope.editProcess = function(){
      	$location.path( "/editProcess" );
      }
});