angular.module('moduleList', [])
	.config(function ($routeProvider) {	
		$routeProvider.when('/media/liste', {
			templateUrl: 'view-list/list-view.html',
			controller: 'mediaListCtrl',
			controllerAs: 'mediaL'
		});


		$routeProvider.when('/adherent/liste', {
			templateUrl: 'view-list/list-view.html',
			controller: 'adherentListCtrl',
			controllerAs: 'adherentL'
		});

	})


	.controller('mediaListCtrl', function($rootScope) {
		var controller = this;
		var bd = angular.element(document).find('body');
		$rootScope.pageTitle = 'Liste des médias';
		bd.removeClass("adherents");		
		bd.addClass('medias');
	})


	.controller('adherentListCtrl', function($rootScope) {
		var controller = this;
		var bd = angular.element(document).find('body');
		$rootScope.pageTitle = 'Liste des adhérents';
		bd.removeClass("medias");		
		bd.addClass('adherents');
	});