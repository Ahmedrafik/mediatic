angular.module('moduleList', [])
	.config(function ($routeProvider) {	
		$routeProvider.when('/media', {
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

	.controller('mediaListCtrl', function($rootScope,listeMediaService, $location, state, typeMedia, connectService) {
		console.log(connectService.isConnected())
		if(connectService.isConnected()){
			var controller = this;
			$rootScope.pageTitle = 'Liste des médias';
	                $rootScope.classType = 'medias';

			controller.fields = [
				{'key':'titre','label':'Titre', 'critere':'input'},
				{'key':'type','label':'Type','critere':'select'}, 
				{'key':'auteur','label':'Auteur', 'critere':'input'}
			];
			
			controller.list = [];
			controller.state = state('/media', {tri: typeMedia.default});
			controller.order = typeMedia.list;

			listeMediaService.getList().then(function (data) {
				controller.list = data;
			});

			controller.view = function(id){
				$location.path('/media/{{id}}');
			}
		}else{
			//$location.path('/login');
		}
	})


	.controller('adherentListCtrl', function($rootScope,listeAdherentService, $location, state, connectService) {
		var controller = this;
		$rootScope.pageTitle = 'Liste des adhérents';
        $rootScope.classType = 'adherents'; 
                
		controller.fields = [
			{'key':'id','label':'ID'},
			{'key':'nom_prenom','label':'Nom et prénom', 'critere': 'input'},
			{'key':'date_naissance','label':'Date de naissnance'},
            {'key':'cotisation_correcte','label':'Cotisation à jour'},
            {'key':'nombre_media','label':'Nombre de médias'},

		];
                
		controller.list = [];
		listeAdherentService.getList().then(function (data) {
			controller.list = data;
                        /* Création des champs d'affichage */
                        angular.forEach(controller.list,function(obj){
                            obj.nom_prenom = obj.nom.toUpperCase() + " " + obj.prenom;
                            /* TODO : Formater date ici */
                        });
		});      
                
 		controller.view = function(id){
			$location.path('/adherent/{{id}}');
		}
	})