'use strict'

angular.module('mediaticApp', ['ngRoute', 'moduleList'])
	.config(function($routeProvider){
		$routeProvider.otherwise({
			redirectTo : '/login'
		});
	})
