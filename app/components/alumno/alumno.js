'use strict';

angular.module('app')
    .component('alumno', {
    	templateUrl: '/components/alumno/alumno.html',
    	controller : function() {
    	},
    	bindings : {
    		alumno : '<'
    	}
    });