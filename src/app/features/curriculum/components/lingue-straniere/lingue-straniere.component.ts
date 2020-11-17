import { Component, ElementRef, OnInit, ViewChildren, QueryList, Input, Output, EventEmitter } from '@angular/core';
import { Lingue } from './../../json/lingue';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { CurriculmStore } from './../../services/curriculum.store';
import { LingueStraniere } from './../../model/curriculum';
import { forbiddenLanguageValidator } from './../../validators/lingua.validator';

@Component({
  selector: 'app-lingue-straniere',
  templateUrl: './lingue-straniere.component.html',
  styleUrls: ['./lingue-straniere.component.scss']
})
export class LingueStraniereComponent implements OnInit {

  LSForm: FormGroup;
  //lingueStraniere: LingueStraniere[];
  lingueS: FormArray;
  livelli = [
    { id: 'A1', name: 'A1 - Utente base' },
    { id: 'A2', name: 'A2 - Utente avanzato' },
    { id: 'B1', name: 'B1 - Utente autonomo' },
    { id: 'B2', name: 'B2 - Utente autonomo' },
    { id: 'C1', name: 'C1 - Utente avanzato' },
    { id: 'C2', name: 'C2 - Utente avanzato' },
  ];
  modifica = false;
  lingueList = Lingue;
  @ViewChildren("diplomaInput", { read: ElementRef }) diplomaInput: QueryList<ElementRef>;

  @Input() lingueStraniere: LingueStraniere[];
  @Output() saveLS: EventEmitter<LingueStraniere[]> = new EventEmitter();

  constructor(
    private formBuilder: FormBuilder,
    public curriculumStore: CurriculmStore
  ) { }

  ngOnInit(): void {

    this.LSForm = this.formBuilder.group({
      lingueS: this.getLingueFormArray()
    });

    this.lingueS = this.LSForm.get('lingueS') as FormArray;  

  }

  // LINGUE
  getLingueFormArray(): FormArray {
    let aggiungoLingua = false;
    if (this.lingueStraniere) {
      return this.formBuilder.array(this.lingueStraniere.map((item, index) => {
        const group = this.creaLingua(aggiungoLingua, index);
        group.patchValue(item);
        return group;
      }))

    } else {
      return this.formBuilder.array([
        this.creaLingua(aggiungoLingua)
      ])
    }
  }

  creaLingua(aggiungoLingua: boolean, index: any = null): FormGroup {
    return this.formBuilder.group({
      lingua: ['default',
        [
          forbiddenLanguageValidator(/default/)
        ]
      ],      
      comprensione_ascolto: [''],
      comprensione_lettura: [''],
      parlato_interazione: [''],
      parlato_orale: [''],
      scritto: [''],
      // nel template -> formArrayName="diplomi"
      diplomi: this.getDiplomiFormArray(aggiungoLingua, index),
    });
  }

  aggiungiLingua() {
    let aggiungoLingua = true;
    this.lingueS.push(this.creaLingua(aggiungoLingua));
  }

  rimuoviLingua(index: number) {
    this.lingueS.removeAt(index);
  }

  // DIPLOMI
  // nel template -> *ngFor="let diploma of diplomi(i).controls; let j=index"
  diplomi(linguaIndex: number): FormArray {
    return this.lingueS.at(linguaIndex).get("diplomi") as FormArray
  }  

  getDiplomiFormArray(aggiungoLingua: boolean, index: any = null): FormArray {
    
    if (index != null && this.lingueStraniere && this.lingueStraniere[index].diplomi && aggiungoLingua == false) {
      
      return this.formBuilder.array(this.lingueStraniere[index].diplomi.map(item => {
        const group = this.creaDiploma();
        group.patchValue(item);
        return group;
      }))

    } else {
      return this.formBuilder.array([
        this.creaDiploma()
      ])
    }
  }

  creaDiploma(): FormControl {
    return this.formBuilder.control('', Validators.required)
  } 

  aggiungiDiploma(linguaIndex: number) {
    this.diplomi(linguaIndex).push(this.creaDiploma());
  }  

  rimuoviDiploma(linguaIndex: number, diplomaIndex: number) {
    this.diplomi(linguaIndex).removeAt(diplomaIndex);
  }  

  salvaLS() {
    this.saveLS.emit(this.LSForm.value.lingueS);
    this.modifica = false;
  }

  modificaLS() {
    this.modifica = true;
  }   

}
