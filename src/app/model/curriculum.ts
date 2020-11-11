export interface Telefoni {
	tipo?: string;
	numero?: string;
}

export interface InfoPersonali {
	foto?: string;
	nome: string;
	cognome: string;
	indirizzo: string;
	cap: string;
	citta: string;
	nazione: string;
	nazionalita?: string;
	email: string;
	data_nascita?: {
		year: number;
		month: number;
		day: number;
	};
	sesso: string;
	siti?: Array<string>;
	telefoni?: Telefoni[];
}

export interface Curriculum {
	infoPersonali?: InfoPersonali;
}