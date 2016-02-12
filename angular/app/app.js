'use strict'

angular.module('mediaticApp', ['ngRoute', 'services', 'logMod'])
	.config(function($routeProvider,$httpProvider){
		$routeProvider.otherwise({
			redirectTo : '/login'
		});
		$httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';

	})
