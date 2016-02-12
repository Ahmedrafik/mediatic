/* Fonction toggle */

/* Sert à passer du mode edition à consultation */
function uiToggleEdition()
{
    var bD = angular.element(document).find("body");
	if(bD.hasClass("consultation")){
		bD.removeClass("consultation");
		bD.addClass("edition");
	}
	else{
		bD.addClass("consultation");
		bD.removeClass("edition");		
	}
}

/* calcul */
 
/* Bouchons */

function triTable() {
    console.log('TODO tri du tableau');	
}

function rechercheBDD(){
    console.log('TODO recherche');
}
