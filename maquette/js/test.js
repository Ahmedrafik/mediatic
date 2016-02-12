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

})();



