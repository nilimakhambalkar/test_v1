
app.directive('sGrid', function(CMSService) {
  return {
      restrict: 'AE',
      replace: 'true',
      template: '<div id="myGrid" style="width:1100px;height:400px;"></div>',
      link: function(scope, elem, attrs) {

      	CMSService.getGridData()
	     .then(function(data) {
	        console.log('albums returned to controller.',data);
	         var counter= 0;
	        _.each(data,function(item){
	          item["id"] = counter++;
	          item["Updated Date"] = "May, 27 2015";
	          
	        })
	         var grid = new MySlickGrid.MyGrid(elem,data);
	      },function(data) {
	            console.log('albums retrieval failed.')
	      }); 

	     	
	   }
  };
});