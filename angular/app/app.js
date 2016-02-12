'use strict'

angular.module('mediaticApp', ['ngRoute', 'moduleList', 'moduleSingle','services'])
	.config(function($routeProvider){
		$routeProvider.otherwise({
			redirectTo : '/login'
		});
	})