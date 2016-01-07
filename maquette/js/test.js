(function() {
	'use strict';

	
	/* Positionnement du formulaire de connexion */
	$(document).ready(function() {
	  $(window).resize(function() {
		$('form').css({
		  'margin-top':($(window).height() - $('form').height()) / 2	  
		});
	  });
	});

	$(window).load(function() {
	  $(window).resize(); 
	});

	/* Trie des tableaux de recherche */
	function triTable() {
		console.log('TODO tri du tableau');	
	}
	$(document).ready(function() {
		// Une fois la page chargée, ne pas oublier de faire le tri
		triTable();
	});

})();
