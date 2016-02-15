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
	.directive('resize', function ($window) {
        return function (scope, element) {
            var w = angular.element($window);
                    var f = angular.element(document).find("body");
            scope.getWindowDimensions = function () {
                return {
                    'h': w.height()
                };
            };
            scope.$watch(scope.getWindowDimensions, function (newValue, oldValue) {
                scope.windowHeight = newValue.h;

                f.style = function () {
                    return {
                        'margin-top': (newValue.h - f.height()) + 'px',
                    };
                };
            }, true);

            w.bind('resize', function () {
                scope.$apply();
            });
        }
    })

	/* login = admin && mdp = istrateur*/