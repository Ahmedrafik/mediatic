'use strict'

angular.module('mediaticApp', ['ngRoute', 'moduleList', 'moduleSingle'])
	.config(function($routeProvider){
		$routeProvider.otherwise({
			redirectTo : '/login'
		});
	})
