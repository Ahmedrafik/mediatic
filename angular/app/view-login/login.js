'use strict'

angular.module('logMod', ['ngRoute', 'services'])
	.config(function($routeProvider){
		$routeProvider.when('/login', {
			templateUrl : 'view-login/login-view.html',
			controller : 'loginController',
			controllerAs : 'logCtrl'
		});
	})
	.controller('loginController', function($routeParams, $rootScope, $scope, $location, connectService){
		var logCtrl = this;
		$rootScope.pageTitle = 'Page de Login';
		logCtrl.connect = function(){
			console.log($scope.user.login);
			connectService.connect($scope.user.login, $scope.user.mdp).then(function success(){
				console.log('connect');
				$location.path('/media');	
			}, function error(){
				$location.path('/login');	
			});		
		}
		



	})

	/* login = admin && mdp = istrateur*/