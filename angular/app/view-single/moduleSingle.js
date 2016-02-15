angular.module('moduleSingle', ['services', 'ngRoute', 'filtres'])
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

	.controller('mediaSingleCtrl', function($rootScope, $routeParams, singleMediaService, typeMedia) {
		var controller = this;
		$rootScope.classType = "medias";
		$rootScope.classEdit = "consultation";

		
		singleMediaService.getMedia($routeParams.id)
			.then(function (data) {
				
				controller.media = data;
				$rootScope.pageTitle = controller.media.titre;
			}, function (error) {
				controller.error = error;
			});
		$rootScope.pageTitle = 'chargement en  cours';

		

		controller.modify = function(){
			$rootScope.classEdit = 'edition';
			controller.typeOptions = [];
			angular.forEach(typeMedia.list, function(itemType){
				controller.typeOptions.push(itemType.type);
			});
		}

		controller.save = function(){
			$rootScope.classEdit = 'consultation';
			singleMediaService.modifMedia(controller.media).then(function(mediaUpdatedByServer){
				controller.media = mediaUpdatedByServer;
				$rootScope.pageTitle = controller.media.titre;
			});
		}

		
		
	})


	.controller('adherentSingleCtrl', function($rootScope) {
		var controller = this;
		$rootScope.pageTitle = 'Adherent';
		var bd = angular.element(document).find('body');
		$rootScope.pageTitle = 'Adhérent : ' + toUpper(controller.adherent.nom) + ' ' + controller.adherent.prenom;
		bd.removeClass("medias");		
		bd.addClass('adherents');
	});