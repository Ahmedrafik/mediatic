'use strict'

angular.module('mediaticApp', ['moduleList'])
	.config(function($routeProvider){
		$routeProvider.otherwise({
			redirectTo : '/login'
		});
	})
