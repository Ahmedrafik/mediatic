'use strict'

angular.module('logMod', ['ngRoute', 'services'])
	.config(function($routeProvider){
		$routeProvider.when('/login', {
			templateUrl : 'view-login/login-view.html',
			controller : 'loginController',
			controllerAs : 'logCtrl'
		});
	})
	.controller('loginController', function($routeParams, $scope, $location, connectService){
		var logCtrl = this;

		logCtrl.connect = function(){
			console.log($scope.user.login);
			
			connectService.connect($scope.user.login, $scope.user.mdp);
			console.log(connectService.isConnected());
			if (connectService.isConnected()) {
				$location.path('/list');	
			};
			
		}
		



	})

	/* login = admin && mdp = istrateur*/