
app.directive('sGrid', function(CMSService) {
	

  return {
      restrict: 'E',
      replace:'true',
      template:'<div id="myGrid" style="width:1000px;height:500px;"></div>',
      scope:{
      	notControllerData : '=gridValue'
      },
      link: function($scope, elem, attrs) {
   		var grid = null;
   		$scope.$watch("notControllerData", function(newValue, oldValue){
   			console.log(newValue);
   			var counter= 0;
      	 	
      	 	if(newValue != null && newValue.length > 0){
      	 	   	console.log($scope.notControllerData.length);

			_.each(newValue,function(item){
	          item["id"] = counter++;
	          item["Updated Date"] = "May, 27 2015";
	          
	        })

			if(grid == null){
				grid = new MySlickGrid.MyGrid(elem,newValue);
			}
      		
      		grid.setData(newValue);

      	 }
   		})
      	 
      // 	CMSService.getGridData()
	     // .then(function(data) {
	     //    console.log('albums returned to controller.',data);
	     //     var counter= 0;
	     //    _.each(data,function(item){
	     //      item["id"] = counter++;
	     //      item["Updated Date"] = "May, 27 2015";
	          
	     //    })
	     //     var grid = new MySlickGrid.MyGrid(elem,data);
	     //  },function(data) {
	     //        console.log('albums retrieval failed.')
	     //  }); 

	     	
	   }
  };
});