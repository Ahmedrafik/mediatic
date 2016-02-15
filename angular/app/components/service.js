angular.module('services' , [])
	.factory('connectService', function($http){
		var connectServ = this;
		connectServ.connected = false;
		var url = 'http://192.168.1.14:8080/resource/connexion.login';
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

			isConnected : function(){
				return connectServ.connected;
			}	
		}	
	})

	.factory('listeMediaService', function($http) {
		/* bouchon : on récupère toute la fausse BDD */
		var url ='http://192.168.1.14:8080/resource/media.recherche';
		var promesse = $http.get(url).then(function(response){
			return response.data;
		});

		return {
			getList : function() {
				return promesse;
				},
		}; 
	})

	.factory('listeAdherentService', function($http) {
		/* bouchon : on récupère toute la fausse BDD */
		var url ='http://192.168.1.14:8080/resource/adherent.recherche';
		var promesse = $http.get(url).then(function(response) {
			return response.data;
		});

		return {
			getList : function() {
				return promesse;
				},

		}; 
	})

	.factory('singleMediaService', function($http){
		return {
			getMedia: function (id) {

				var url ='http://192.168.1.14:8080/resource/media.accession';
				return $http.get(url, {params : {id : id}}).then(function(response) {
					return response.data;
				});
			},
			modifMedia: function(media){
				var url ='http://192.168.1.14:8080/resource/media.modification';
				return $http.post(url, media).then(function success(response) {
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
