angular.module('moduleSingle', [])
	.config(function ($routeProvider) {	
		$routeProvider.when('/media/test', {
			templateUrl: 'view-single/single-view.html',
			controller: 'mediaSingleCtrl',
			controllerAs: 'mediaS'
		});


		$routeProvider.when('/adherentList', {
			templateUrl: 'view-list/list-view.html',
			controller: 'adherentSingleCtrl',
			controllerAs: 'adherentS'
		});

	})


	.controller('mediaSingleCtrl', function($rootScope) {
		var controller = this;
		var bd = angular.element(document).find('body');
		$rootScope.pageTitle = 'Média : ' + controller.media.title;
		bd.removeClass("adherents");		
		bd.addClass('medias');
	})


	.controller('adherentSingleCtrl', function($rootScope) {
		var controller = this;
		var bd = angular.element(document).find('body');
		$rootScope.pageTitle = 'Adhérent : ' + controller.adherent.name;
		bd.removeClass("medias");		
		bd.addClass('adherents');
	});