angular.module('filtres' , [])

.factory('state', function() {
		var cache = {};
		return function(pageId, initValue) {
			if (!cache[pageId]) {
				cache[pageId] = initValue;
			}
			return cache[pageId];
		}
	})


/* TODO prevoir le cas par cas */ 
.factory('typeMedia', function() {
		var list = [{type:'Livre', label:'Filter sur les Livres'},
		 			{type:'CD', label:'Filter sur les CD'},
		 			{type:'DVD' , label:'Filter sur les DVD'}
					];
		return {
			list:list,
			default:''
		}
	})
