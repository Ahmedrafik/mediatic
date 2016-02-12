angular.module('moduleSingle', ['services', 'ngRoute'])
	.config(function ($routeProvider) {	
		$routeProvider.when('/media/:id', {
			templateUrl: 'view-single/single-view.html',
			controller: 'mediaSingleCtrl',
			controllerAs: 'singleCtrl'
		});


		$routeProvider.when('/adherent/:id', {
			templateUrl: 'view-single/single-view.html',
			controller: 'adherentSingleCtrl',
			controllerAs: 'singleCtrl'
		});

	})

	.controller('mediaSingleCtrl', function($rootScope, $routeParams, singleMediaService) {
		var controller = this;
		$rootScope.pageTitle = 'Medias';
		
		singleMediaService.getMedia($routeParams.id)
			.then(function (data) {
				controller.media = data;
				$rootScope.pageTitle = controller.media.titre;

				console.log(controller.media);
			}, function (error) {
				controller.error = error;
			});

		$rootScope.pageTitle = 'chargement en  cours';



		/*var bd = angular.element(document).find('body');
		$rootScope.pageTitle = 'Média : ' + controller.media.titre;
		bd.removeClass("adherents");		
		bd.addClass('medias');*/
	})


	.controller('adherentSingleCtrl', function($rootScope) {
		var controller = this;
		$rootScope.pageTitle = 'Adherent';

		var bd = angular.element(document).find('body');
		$rootScope.pageTitle = 'Adhérent : ' + toUpper(controller.adherent.nom) + ' ' + controller.adherent.prenom;
		bd.removeClass("medias");		
		bd.addClass('adherents');
	});