import { InfoPersonali, EsperienzeProfessionali, LingueStraniere } from './../../model/curriculum';
import { Component, OnInit } from '@angular/core';
import { CurriculmStore } from './../../services/curriculum.store';

@Component({
  selector: 'app-curriculum',
  templateUrl: './curriculum.component.html',
  styleUrls: ['./curriculum.component.scss']
})
export class CurriculumComponent implements OnInit {

  constructor(public curriculumStore: CurriculmStore) { }

  ngOnInit(): void {
  }

  onSaveIPEvent(ip: InfoPersonali) {
    console.log(ip);
    this.curriculumStore.saveIP(ip);
  }
  onSaveEPEvent(ep: EsperienzeProfessionali[]) {
    console.log(ep);
    this.curriculumStore.saveEP(ep);
  }
  onSaveLMEvent(lm: Array<string>) {
    console.log(lm);
    this.curriculumStore.saveLM(lm);
  }
  onSaveLSEvent(ls: LingueStraniere[]) {
    console.log(ls);
    this.curriculumStore.saveLS(ls);
  }
}
