'use strict';

angular.module('app')
    .controller('mainController', ['appService', function(appService) {
    	var self = this;

    	angular.extend(self, {
    		cargarAlumnos : function() {
    			appService.getAlumnos().then(function(alumnos){
    				console.log(alumnos);
    				self.alumnos = alumnos;
    			});
    		},
    		alumnos       : []
    	});    	

    }]);