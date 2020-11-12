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

export interface EsperienzeProfessionali {
	data_da?: {
		year: number;
		month: number;
		day: number;
	};
	data_a?: {
		year: number;
		month: number;
		day: number;
	} | null;
	in_corso?: boolean;
	occupazione?: string;
	attivita?: string;
	nomeDL?: string;
	cittaDL?: string;
	nazioneDL?: string;
	websiteDL?: string;
}

export interface Curriculum {
	infoPersonali?: InfoPersonali;
	esperienzeProfessionali?: EsperienzeProfessionali[]; 
}