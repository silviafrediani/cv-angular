import { Injectable } from '@angular/core';
import { InfoPersonali, Curriculum, EsperienzeProfessionali } from './../../model/curriculum';

@Injectable({
	providedIn: 'root'
})
export class CurriculmStore {

	curriculum : Curriculum = {
		infoPersonali: {
			nome: 'silvia',
			cognome: 'frediani',
			indirizzo: 'via sano di pietro 8',
			cap: '50143',
			citta: 'Firenze',
			nazione: 'Italia',
			nazionalita: 'Italia',
			data_nascita: {
				year: 1978,
				month: 8,
				day: 31
			},			
			email: 'silvia@silviafrediani.it',
			sesso: 'Femminile',
			siti: [
				"www.silviafrediani.it",
				"www.linkedin.com/silvia-frediani"
			],	
			telefoni: [
				{tipo: 'Abitazione', numero:'055717171'},
				{tipo: 'Cellulare', numero:'3333615580'}
			],
		},

	};

	saveIP(infoPersonali: InfoPersonali) {
		this.curriculum.infoPersonali = infoPersonali;		
		console.log(this.curriculum);
	}

	getIP() {
		return this.curriculum.infoPersonali;
	}

	saveEP(esperienzeProfessionali: EsperienzeProfessionali[]) {
		this.curriculum.esperienzeProfessionali = esperienzeProfessionali;		
		console.log(this.curriculum);
	}

	getEP() {
		return this.curriculum.esperienzeProfessionali;
	}

}
