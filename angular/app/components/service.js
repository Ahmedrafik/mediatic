angular.module('services' , ['moduleDico'])

	.factory('connectService', function($http,$location,Dictionnary){
		var connectServ = this;
		connectServ.connected = false;
		var url = Dictionnary['commun']['urlLoginWS'];
		return {
			connect : function(log, pass){
				var data ={
					login : log,
					mdp : pass
				};
				return $http.post(url, data).then(function success(){
					connectServ.connected = true;
				}, function error(response){
					throw 'connexion impossible';
				});
			},	

			disconnect:function(){
		   		connectServ.connected = false; 		
		   		$location.path(Dictionnary['commun']['pathLogin']);	

			},

			isConnected : function(){
				console.warn('TODO : a remettre avant MEP');
				return true;
//				return connectServ.connected;
			}
		}	
	})



/* numPage correspond à ma page courante */
.factory('listeService', function($http, Dictionnary) {
	
	
	var promesseAdherent = $http.get(Dictionnary.adherent.urlRechercheWS).then(function(response) {
		response.nbPages = 5; /* bouchon,bouchon, bouchon */
		return response;
	});
	var promesseMedia = $http.get(Dictionnary.media.urlRechercheWS).then(function(response) {
		/* BOUCHON : j'injecte la variable de pagination */
		response.nbPages = 5; /* bouchon,bouchon, bouchon */
		return response;
	});

		return {
			getList : function(type) {
				if(type == Dictionnary.media.type){
					return promesseMedia;
				} else {
					return promesseAdherent;
				}
			}
		};

	})
	.factory('makePagination',function(pageActive,nbPages){
		var tabPagination = [];
		var i;
		// Ici sera fait la pagination. Peut-être.
		// Avant la page active
		for(i=pageActive-3;i<pageActive+3 || i<nbPages;i++)
		{
			tabPagination.push(i);
		}
		
		return tabPagination;
	})

	.factory('singleService', function($http,Dictionnary){
		return {
			getData: function (id,type) {
				var url;
				if(type == Dictionnary.media.type){
					url = Dictionnary.media.urlAccessionWS + "?id =" + id;
				} else {
					url = Dictionnary.adherent.urlAccessionWS + "?id =" + id;
				}
				
				return $http.get(url, {params : {id : id}}).then(function(response) {
					return response.data;
				});
			},
			modifData: function(genericObject){
				var url;
				if(type == Dictionnary.media.type){
					url = Dictionnary.media.urlModificationWS;
				} else {
					url = Dictionnary.adherent.urlModificationWS;
				}
				return $http.post(url, genericObject).then(function success(response) {
					return response.data;
				});
			}
		}	
	})

	.service('fileUpload', ['$http', function ($http) {
	    this.uploadFileToUrl = function(file, uploadUrl){
	        var fd = new FormData();
	        fd.append('file', file);
	        $http.post(uploadUrl, fd, {
	            transformRequest: angular.identity,
	            headers: {'Content-Type': undefined}
	        })
	        .success(function(){
	        })
	        .error(function(){
	        });
    }
}]);
