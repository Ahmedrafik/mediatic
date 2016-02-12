angular.module('moduleSingle', [])
	.config(function ($routeProvider) {	
		$routeProvider.when('/media/test', {
			templateUrl: 'view-single/single-view.html',
			controller: 'mediaSingleCtrl',
			controllerAs: 'singleCtrl'
		});


		$routeProvider.when('/adherentList', {
			templateUrl: 'view-list/list-view.html',
			controller: 'adherentSingleCtrl',
			controllerAs: 'singleCtrl'
		});

	})


	.controller('mediaSingleCtrl', function($rootScope) {
		var controller = this;
		var bd = angular.element(document).find('body');
		$rootScope.pageTitle = 'Média : ' + controller.media.titre;
		bd.removeClass("adherents");		
		bd.addClass('medias');
	})


	.controller('adherentSingleCtrl', function($rootScope) {
		var controller = this;
		var bd = angular.element(document).find('body');
		$rootScope.pageTitle = 'Adhérent : ' + toUpper(controller.adherent.nom) + ' ' + controller.adherent.prenom;
		bd.removeClass("medias");		
		bd.addClass('adherents');
	});