angular.module('moduleSingle', ['services', 'ngRoute', 'filtres'])
	.config(function ($routeProvider) {	
		$routeProvider.when('/medias/:id', {
			templateUrl: 'view-single/single-view.html',
			controller: 'mediaSingleCtrl',
			controllerAs: 'singleCtrl',
			resolve : {
				UrlFakeService : function(){
					return {
						listUrl : '/medias'
					}
				}
			}
		});

		$routeProvider.when('/adherents/:id', {
			templateUrl: 'view-single/single-view.html',
			controller: 'adherentSingleCtrl',
			controllerAs: 'singleCtrl',
			resolve : {
				UrlFakeService : function(){
					return {
						listUrl : '/adherents'
					}
				}
			}
		});

	})

	.controller('mediaSingleCtrl', function($rootScope, $routeParams, singleMediaService,connectService, UrlFakeService) {
		if(connectService.isConnected()==true){
			var controller = this;
			$rootScope.classType = "medias";
			$rootScope.classEdit = "consultation";
			$rootScope.pageTitle = 'Media :';
			
			singleMediaService.getMedia($routeParams.id)
				.then(function (data) {
					controller.media = data;
					$rootScope.pageTitle = 'Media : ' + controller.media.titre;
				}, function (error) {
					controller.error = error;
				});

			controller.modify = function(){
				$rootScope.classEdit = 'edition';
				controller.typeOptions = [];
				angular.forEach(typeMedia.list, function(itemType){
					controller.typeOptions.push(itemType.type);
				});
			}

			
			controller.url = function() {
				return UrlFakeService.listUrl;
			}


			controller.save = function(){
				$rootScope.classEdit = 'consultation';
				singleMediaService.modifMedia(controller.media).then(function(mediaUpdatedByServer){
					controller.media = mediaUpdatedByServer;
					$rootScope.pageTitle = 'Media : ' + controller.media.titre;
				});
			}

		}else{
			$location.path('/login');		
		}
	})


	.controller('adherentSingleCtrl', function($rootScope, $routeParams, singleAdherentService, UrlFakeService) {
		/* TODO v*/ 

			controller.url = function() {
				return UrlFakeService.listUrl;
			}

	});