app.service('CMSService', function($http,$q){
   
    var fac = {};
     
    fac.users = ['John', 'James', 'Jake']; 
    
     var def = $q.defer();
     fac.getGridData = function() {
     	console.log("success")
            var def = $q.defer();
            $http.get("http://localhost:8080/grid/gridData.json")
                .success(function(data) {
                	console.log("success")
                    def.resolve(data);
                })
                .error(function() {
                    def.reject("Failed to get albums");
                });
            return def.promise;
        }
     
    return fac;
 
});