angular.module('moduleDico', [])
	.constant('Dictionnary',{
			"media":{
				/* label */
				titleList:'Liste des médias',
				titleSingle:'Média : ',
				/* technique */
				classType : 'medias',
				fields : [
							{'key':'titre','label':'Titre', 'critere':'input'},
							{'key':'type','label':'Type','critere':'select'}, 
							{'key':'auteur','label':'Auteur', 'critere':'input'}
						],
				titre : 'titre',
				type : 'typeMediaUrl',
				state : '/media',
				path : '/media',
				pathList : '/medias',
				/* URL */
				urlRechercheWS :  'http://192.168.1.14:8080/resource/media.recherche'
			},

			"adherent":{
				/* label */
				titleList :'Liste des adherents',
				titleSingle:'Adhérent : ',
				/* technique */
				classType : 'adherents',
				fields : [
							{'key':'id','label':'ID'},
							{'key':'nom_prenom','label':'Nom et prénom', 'critere': 'input'},
							{'key':'date_naissance','label':'Date de naissnance'},
		            		{'key':'cotisation_correcte','label':'Cotisation à jour'},
		            		{'key':'nombre_media','label':'Nombre de médias'},
						],
				titre : 'nom_prenom',
				type : 'typeAdherentUrl',
				state : '/adherent',
				/* URL */
					/* interne */
					path : '/adherent',
					pathList : '/adherents',
					/* externe */
					urlRechercheWS :  'http://192.168.1.14:8080/resource/adherent.recherche'
			},
			"commun" : {
				/* technique  */
				classRead : 'consultation',
				classWrite: 'edition',
				/* URL */
				pathLogin : '/login'
				}
			})