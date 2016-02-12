'use strict'

angular.module('mediaticApp', [])
	.config(function($routeProvider){
		$routeProvider.otherwise({
			redirectTo : '/login'
		});
	})
