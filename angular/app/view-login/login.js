'use strict'

angular.module('logMod', ['ngRoute', 'services','moduleDico'])
	.config(function($routeProvider,Dictionnary){
		$routeProvider.when(Dictionnary.commun.pathLogin, {
			templateUrl : 'view-login/login-view.html',
			controller : 'loginController',
			controllerAs : 'logCtrl'
		});
	})
	.controller('loginController', function($routeParams, $rootScope, $scope, $location, connectService,Dictionnary){
		var logCtrl = this;
		$rootScope.pageTitle = Dictionnary.commun.titleLogin;
		$rootScope.classType= 'page-login'
		logCtrl.connect = function(){
			console.log($scope.user.login);
			connectService.connect($scope.user.login, $scope.user.mdp).then(function success(){
				console.log('connect');
				$location.path(Dictionnary.media.pathList);
				$rootScope.logout = function(){
					connectService.disconnect();
				}
			}, function error(){
				$location.path(Dictionnary.commun.pathLogin);	
			});		
		}
	})