'use strict'

angular.module('services', ['ngRoute'])
	.factory('connectService', function($http){
		var connectServ = this;
		var connected = false;
		var url = 'http://192.168.1.14:8080/resource/connexion.login';
		return {
			connect : function(log, pass){
				console.log('connectService');
				var data ={
					login : log,
					mdp : pass
				};
				console.log(data);
				var promise = $http.post(url, data).then(function success(){
					connected = true;
					console.log("authentification réussit");
				}, function error(response){
					console.log('authentification impossible de ', data.login, response);
				});
//				console.log("connected = " + connected);

			},	

			isConnected : function(){
				return connected;
			}	
		}	
	})
		