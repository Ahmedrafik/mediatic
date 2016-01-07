$(document).ready(function() {
  // $(window).resize() est appelée chaque fois que la fenêtre est redimensionnée par l'utilisateur.
  $(window).resize(function() {
	 console.log('eeeeeee');
    $('form').css({
      'margin-top':($(window).height() - $('form').height()) / 2
	  
    });
  });
});
 
$(window).load(function() {
  // au chargement complet de la page, la fonction resize() est appelée une fois pour initialiser le centrage.
  $(window).resize(); 
});


