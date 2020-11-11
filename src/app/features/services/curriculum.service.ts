import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CurriculmStore } from './curriculum.store';

@Injectable({
	providedIn: 'root'
})
export class CurriculumService {

	constructor(
		private http: HttpClient,
		private store: CurriculmStore
	) { }

	save() {
	}

}
