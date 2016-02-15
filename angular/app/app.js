'use strict'

angular.module('mediaticApp', ['ngRoute', 'logMod', 'moduleList', 'moduleSingle','services', 'filtres'])
	.config(function($routeProvider,$httpProvider){
		$routeProvider.otherwise({
			redirectTo : '/login'
		});
		$httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';

	})
