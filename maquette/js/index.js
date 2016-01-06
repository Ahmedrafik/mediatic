/* Fonctions de toogle */

/* Sert à passer du mode edition à consultation */
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