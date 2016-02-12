angular.module('moduleList', [])
	.config(function ($routeProvider) {	
		$routeProvider.when('/mediaList', {
			templateUrl: 'view-list/list-view.html',
			controller: 'mediaCtrl',
			controllerAs: 'media'
		});


		$routeProvider.when('/adherentList', {
			templateUrl: 'view-list/list-view.html',
			controller: 'adherentCtrl',
			controllerAs: 'adherent'
		});

	})


	.controller('mediaCtrl', function($rootScope) {
		var controller = this;
		$rootScope.pageTitle = 'list-media';
	})


	.controller('adherentCtrl', function($rootScope) {
		var controller = this;
		$rootScope.pageTitle = 'list-adherent';
	});