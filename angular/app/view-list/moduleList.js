angular.module('moduleList', [])
	.config(function ($routeProvider) {	
		$routeProvider.when('/media/', {
			templateUrl: 'view-list/list-view.html',
			controller: 'mediaListCtrl',
			controllerAs: 'listeCtrl'
		});


		$routeProvider.when('/adherent', {
			templateUrl: 'view-list/list-view.html',
			controller: 'adherentListCtrl',
			controllerAs: 'listeCtrl'
		});

	})


	.controller('mediaListCtrl', function($rootScope,listeMediaService) {
		var controller = this;
		var bd = angular.element(document).find('body');
		$rootScope.pageTitle = 'Liste des médias';
		bd.removeClass("adherents");		
		bd.addClass('medias');

		controller.fields = [
			{'key':'titre','label':'Titre'},
			{'key':'type','label':'Type'},
			{'key':'auteur','label':'Auteur'}
		];
		
		controller.list = [];
		listeMediaService.getList().then(function (data) {
			controller.list = data;
		});

		

	})


	.controller('adherentListCtrl', function($rootScope,listeAdherentService) {
		var controller = this;
		var bd = angular.element(document).find('body');
		$rootScope.pageTitle = 'Liste des adhérents';
		bd.removeClass("medias");		
		bd.addClass('adherents');
	});