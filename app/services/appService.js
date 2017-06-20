angular.module('app', []);

angular.module('app')
    .factory('appService', ['$http', function($http) {
    	
    	return {
    		getAlumnos : function() {
    			return $http.post('http://127.0.0.1:3000/getAlumnos').then(
    				function(result) {
    					return result.data;
    				},
    				function(result) {
    					return [];
    				}
    			);
    		}
    	};

    }]);