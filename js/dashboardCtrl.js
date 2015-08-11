app.controller('DashboardCtrl', function($scope, CMSService,$location) {
		$scope.val = "Vijay";
		$scope.gridData = null;

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

      	var newE2EData = [{id:"1",label:"E2E",parent:" "}]
      	$location.path( "/newProcess" );
      	$scope.gridData = newE2EData;
      	  
      }
      $scope.editProcess = function(){
      	$location.path( "/editProcess" );
      }
});