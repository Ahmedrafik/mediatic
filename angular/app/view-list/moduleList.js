angular.module('moduleList', ['moduleDico'])
	
	.config(function ($routeProvider, Dictionnary, listeServiceProvider) {	
		$routeProvider.when(Dictionnary.media.pathList, {
			templateUrl: 'view-list/list-view.html',
			controller: 'ListController',
			controllerAs: 'listeCtrl',
			resolve : {
				DictionnaryFiltered : function(){return Dictionnary['media'];}
			}
		});

		$routeProvider.when(Dictionnary.adherent.pathList, {
			templateUrl: 'view-list/list-view.html',
			controller: 'ListController',
			controllerAs: 'listeCtrl',
			resolve : {
				DictionnaryFiltered : function(){return Dictionnary['adherent'];}
			}
		});

	})


	.controller('ListController', function($rootScope, listeService, $location, state, enumSelect,
	 								connectService, DictionnaryFiltered, Dictionnary) {
		
		// Nota : typeMeda ne sert que dans le cas d'un Controller pour une liste de média.
		if(connectService.isConnected()==true){
				var controller = this;
				$rootScope.pageTitle = DictionnaryFiltered.titleListe;
	            $rootScope.classType = DictionnaryFiltered.classType;


				controller.fields = DictionnaryFiltered.fields;
				controller.list = [];
				controller.state = state(DictionnaryFiltered.state, {tri: enumSelect.default});
				controller.order = enumSelect.list;


				listeService.getList(DictionnaryFiltered.type).then(function (data) {
					controller.list = data;
				});

				controller.view = function(id){
					$location.path(DictionnaryFiltered.path + "/" + id);
				}

		}else {
			$location.path(Dictionnary.commun.pathLogin);
		}
	})