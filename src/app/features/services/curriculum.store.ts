import { Injectable } from '@angular/core';
import { InfoPersonali, Curriculum, EsperienzeProfessionali } from './../../model/curriculum';

@Injectable({
	providedIn: 'root'
})
export class CurriculmStore {

	curriculum: Curriculum = {
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
				{ tipo: 'Abitazione', numero: '055717171' },
				{ tipo: 'Cellulare', numero: '3333615580' }
			],
		},
		esperienzeProfessionali: [
			{
				data_da: {
					year: 2002,
					month: 3,
					day: 20,
				},
				data_a: {
					year: 2005,
					month: 10,
					day: 30,
				},
				in_corso: false,
				occupazione: 'web designer',
				attivita: '',
				nomeDL: 'La Pulce TLF',
				cittaDL: 'Firenze',
				nazioneDL: 'Italia',
				websiteDL: 'www.lapulce.it'				
			},
			{
				data_da: {
					year: 2007,
					month: 3,
					day: 20,
				},
				data_a: {
					year: 2016,
					month: 8,
					day: 14,
				},
				in_corso: false,
				occupazione: 'barista',
				attivita: '',
				nomeDL: 'Caffè Olivuzzo',
				cittaDL: 'Firenze',
				nazioneDL: 'Italia',
				websiteDL: 'www.caffeolivuzzo.it'			
			},
			{
				data_da: {
					year: 2019,
					month: 5,
					day: 3,
				},
				data_a: null,
				in_corso: true,
				occupazione: 'web developer',
				attivita: '',
				nomeDL: 'Autonomo',
				cittaDL: 'Firenze',
				nazioneDL: 'Italia',
				websiteDL: 'www.silviafrediani.it'			
			},
		],
		linguaMadre: ['arabo', 'italiano'],
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

	saveLM(linguaMadre: Array<string>) {
		this.curriculum.linguaMadre = linguaMadre;
		console.log(this.curriculum);
	}

	getLM() {
		return this.curriculum.linguaMadre;
	}


}
