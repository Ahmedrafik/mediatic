/* Fonctions de toogle */

/* Sert � passer du mode edition � consultation */
function uiToggleEdition()
{
	if($("body").hasClass("consultation")){
		$("body").removeClass("consultation");
		$("body").addClass("edition");
	}
	else{
		$("body").addClass("consultation");
		$("body").removeClass("edition");		
	}
}