angular.module('services' , [])
	.factory('connectService', function($http){
		var connectServ = this;
		connectServ.connected = false;
		var url = 'http://192.168.1.14:8080/resource/connexion.login';
		return {
			connect : function(log, pass){
				console.log('connectService');
				var data ={
					login : log,
					mdp : pass
				};
				console.log(data);
				return $http.post(url, data).then(function success(){
					connectServ.connected = true;
					console.log("authentification réussit");
				}, function error(response){
					console.log('authentification impossible de ', data.login, response);
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
			//console.log(Object.key(response.data[0]));
			console.log(response.data);
			return response.data;
		});

		return {
			getList : function() {
				return promesse;
				},

			/*getBook: function(id) {
				return promesse.then(function (books) {
					for(var i = 0; i < books.length; i++) {
						if(books[i]._id.$iod == id) {
							return books[i];
						}
					}
					throw "Not found";
				});
			}*/
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

	.factory('singleMediaService', function($http) {

		return {
			getMedia: function (id) {
				var url ='http://192.168.1.14:8080/resource/media.accession';
				return $http.get(url, {params : {id : id}}).then(function(response) {
					return response.data;
				});
				// return promise.then(function (mediaList) {
				// 	for (var i = 0 ; i < mediaList.length ; i++) {
				// 		if (mediaList[i].id == id) {
				// 			console.log(mediaList[i]);
				// 			return mediaList[i];
				// 		}
				// 	}
				// 	throw "Not found";
				// });
			}

		}; 
	})