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

/* Trie des tableaux de recherche */
function triTable() {
	console.log('TODO tri du tableau');	
}