'use strict';

angular.module('app')
    .controller('mainController', ['appService', function(appService) {
    	const self = this;

    	angular.extend(self, {
    		cargarAlumnos : function() {
    			appService.getAlumnos().then(alumnos=>{ self.alumnos = alumnos; });
    		},
    		alumnos       : []
    	});    	

    }]);