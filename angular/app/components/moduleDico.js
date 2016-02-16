angular.module('moduleDico', [])
	.constant('Dictionnary',{
			"media":{
				title:'Liste des médias',
				classTypes : 'medias',
				fields : [
							{'key':'titre','label':'Titre', 'critere':'input'},
							{'key':'type','label':'Type','critere':'select'}, 
							{'key':'auteur','label':'Auteur', 'critere':'input'}
						],
				type : 'typeMediaUrl',
				state : '/media',
				path : '/media',
				pathList : '/medias',
				urlRechercheWS :  'http://192.168.1.14:8080/resource/media.recherche'
			},

			"adherent":{
				title :'Liste des adherents',
				classTypes : 'adherents',
				fields : [
							{'key':'id','label':'ID'},
							{'key':'nom_prenom','label':'Nom et prénom', 'critere': 'input'},
							{'key':'date_naissance','label':'Date de naissnance'},
		            		{'key':'cotisation_correcte','label':'Cotisation à jour'},
		            		{'key':'nombre_media','label':'Nombre de médias'},
						],
				type : 'typeAdherentUrl',
				state : '/adherent',
				path : '/adherent',
				pathList : '/adherents',
				urlRechercheWS :  'http://192.168.1.14:8080/resource/adherent.recherche'
			},
			"commun" : {
				pathLogin : '/login'
				}
			})