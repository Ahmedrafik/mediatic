angular.module('moduleSingle', ['services', 'ngRoute', 'filtres','moduleDico'])
	.config(function ($routeProvider, Dictionnary) {	
		/* temporaire : pas beau */
		$routeProvider.when(Dictionnary.media.path + '/new', {
			templateUrl: 'view-single/single-view.html',
			controller: 'SingleNewController',
			controllerAs: 'singleCtrl',
			resolve : {
				DictionnaryFiltered : function(){return Dictionnary['media'];}
			}
		});
		$routeProvider.when(Dictionnary.adherent.path + '/new', {
			templateUrl: 'view-single/single-view.html',
			controller: 'SingleNewController',
			controllerAs: 'singleCtrl',
			resolve : {
				DictionnaryFiltered : function(){return Dictionnary['adherent'];}
			}
		});
		$routeProvider.when(Dictionnary.media.path + '/:id', {	
			templateUrl: 'view-single/single-view.html',
			controller: 'SingleController',
			controllerAs: 'singleCtrl',
			resolve : {
				DictionnaryFiltered : function(){return Dictionnary['media'];}
			}
		});

		$routeProvider.when(Dictionnary.adherent.path + '/:id', {
			templateUrl: 'view-single/single-view.html',
			controller: 'SingleController',
			controllerAs: 'singleCtrl',
			resolve : {
				DictionnaryFiltered : function(){return Dictionnary['adherent'];}
			}
		});

	})

	.controller('SingleController', function($rootScope, $routeParams, singleService
		,connectService,DictionnaryFiltered, Dictionnary,enumSelect) {
		if(connectService.isConnected()==true){
			var controller = this;
			$rootScope.pageTitle = DictionnaryFiltered.titleSingle;
			$rootScope.classType = DictionnaryFiltered.classType;
			$rootScope.classEdit = Dictionnary.commun.classRead;

			singleService.getData($routeParams.id,DictionnaryFiltered.type)
				.then(function (data) {
					controller.data = data;
					$rootScope.pageTitle = DictionnaryFiltered.titleSingle + controller.data[DictionnaryFiltered.titre];
				}, function (error) {
					controller.error = error;
				});

			controller.modify = function(){
				$rootScope.classEdit = Dictionnary.commun.classWrite;

				// Récuperer le select
				var selectList = []; // Liste des champs comportant un select
				angular.forEach(DictionnaryFiltered.fields,function(field){
					if('select'==field.critere)
					{
						selectList.push(field['key']);
					}
				});
				// Je recupere les champs de l'element (media ou adherent) qui sont dans la liste des select

				controller.typeOptions = [];
				var tempOptions; // Sous niveau, temporaire.
				angular.forEach(this.data,function(fieldElement,keyField){
					if(selectList.indexOf(keyField)!=-1){ /* Je vérifie que mon champ est un select */

						tempOptions = []; // temporaire : je stocke l'ensemble de l'enum
						console.log(keyField);
						angular.forEach(enumSelect.list[keyField], function(itemType){
							tempOptions.push(itemType.type);
						});						
						controller.typeOptions.push(tempOptions);
						console.log(controller.typeOptions);
					}
				});	
				console.log(controller.typeOptions);
			}

			/* Code maléfique en bas : TODO > Lui typer sa tronche */
			// controller.save = function(){
			// 	$rootScope.classEdit = 'consultation';
			// 	singleMediaService.modifMedia(controller.data).then(function(dataUpdatedByServer){
			// 		controller.data = mediaUpdatedByServer;
			// 		$rootScope.pageTitle = 'Media : ' + controller.data.titre;
			// 	});
			// }


			controller.url = function(){
				return DictionnaryFiltered.pathList;
			}


		}else{
			$location.path(Dictionnary.commun.pathLogin);
		}
	})

/* Todo : perfectionner Il faut récupérer le select */
.controller('SingleNewController', function($rootScope, $routeParams, singleService
		,connectService,DictionnaryFiltered, Dictionnary,enumSelect) {
		if(connectService.isConnected()==true){
			var controller = this;
			$rootScope.pageTitle = DictionnaryFiltered.titleSingle;
			$rootScope.classType = DictionnaryFiltered.classType;
			$rootScope.classEdit = Dictionnary.commun.classWrite;

				// bout de code trod4rk
				var selectList = []; // Liste des champs comportant un select
				angular.forEach(DictionnaryFiltered.fields,function(field){
					if('select'==field.critere)
					{
						selectList.push(field['key']);
					}
				});
				// Je recupere les champs de l'element (media ou adherent) qui sont dans la liste des select

				controller.typeOptions = [];
				var tempOptions; // Sous niveau, temporaire.
				angular.forEach(this.data,function(fieldElement,keyField){
					if(selectList.indexOf(keyField)!=-1){ /* Je vérifie que mon champ est un select */

						tempOptions = []; // temporaire : je stocke l'ensemble de l'enum
						console.log(keyField);
						angular.forEach(enumSelect.list[keyField], function(itemType){
							tempOptions.push(itemType.type);
						});						
						controller.typeOptions.push(tempOptions);
						console.log(controller.typeOptions);
					}
				});	

			/* Code maléfique en bas : TODO > Lui typer sa tronche */
			// controller.save = function(){
			// 	$rootScope.classEdit = 'consultation';
			// 	singleMediaService.modifMedia(controller.data).then(function(dataUpdatedByServer){
			// 		controller.data = mediaUpdatedByServer;
			// 		$rootScope.pageTitle = 'Media : ' + controller.data.titre;
			// 	});
			// }


			controller.url = function(){
				return DictionnaryFiltered.pathList;
			}


		}else{
			$location.path(Dictionnary.commun.pathLogin);
		}
	});