import { Component, OnInit } from '@angular/core';
import { Nazioni } from './../../json/nazioni';
import { FormBuilder, FormGroup, FormArray, Validators, AbstractControl, FormControl } from '@angular/forms';
import { CurriculmStore } from './../services/curriculum.store';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { EsperienzeProfessionali } from './../../model/curriculum';

@Component({
  selector: 'app-esperienze-professionali',
  templateUrl: './esperienze-professionali.component.html',
  styleUrls: ['./esperienze-professionali.component.scss']
})
export class EsperienzeProfessionaliComponent implements OnInit {

  EPForm: FormGroup;
  esperienzeProfessionali: EsperienzeProfessionali[];
  esperienze: FormArray;
  modifica = false;
  nazioni = Nazioni;
  data_da: NgbDateStruct | null;
  data_a: NgbDateStruct | null;
  minDate = { year: 1950, month: 1, day: 1 };
  maxDate = { year: new Date().getFullYear(), month: new Date().getMonth() + 1, day: new Date().getDate() };

  constructor(
    private formBuilder: FormBuilder,
    public curriculumStore: CurriculmStore
  ) { }

  ngOnInit() {

    this.esperienzeProfessionali = this.curriculumStore.getEP();

    this.EPForm = this.formBuilder.group({
      esperienze: this.getEsperienzeFormArray()
    });
    
    this.esperienze = this.EPForm.get('esperienze') as FormArray;  

    (<FormArray>this.EPForm.get('esperienze'))
      .controls
      .forEach((esperienza) => {
        if (esperienza['controls'].data_a.value == null) {
          esperienza['controls'].data_a.disable();
        } 
      })     

  } 

  disable_enable_dp(index: number) {
    
    let valoreCheck = !(<FormArray>this.EPForm.get('esperienze')).controls[index].value['in_corso'];

    (<FormArray>this.EPForm.get('esperienze'))
      .controls
      .forEach((esperienza, key) => {
        if (key == index && valoreCheck == true) {
          esperienza['controls'].data_a.disable();
          esperienza['controls'].data_a.setValue(null);
        } else if (key == index && valoreCheck == false) {
          esperienza['controls'].data_a.enable();
        }
      }) 
  }
  
  get occupazione() { return this.EPForm.get('occupazione'); }

  getEsperienzeFormArray(): FormArray {
    if (this.esperienzeProfessionali) {
      return this.formBuilder.array(this.esperienzeProfessionali.map(item => {
        const group = this.creaEsperienza();
        group.patchValue(item);
        return group;
      }))

    } else {
      return this.formBuilder.array([
        this.creaEsperienza()
      ])
    }
  } 
  
  creaEsperienza(): FormGroup {
    return this.formBuilder.group({
      data_da: [''],
      data_a: [''],
      in_corso: [''],
      occupazione: ['',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(50)
        ]
      ],
      attivita: [''],
      nomeDL: [''],
      cittaDL: [''],
      nazioneDL: ['default'],
      websiteDL: [''],
    });
  }

  aggiungiEsperienza() {
    this.esperienze.push(this.creaEsperienza());
  }

  rimuoviEsperienza(index: number) {
    this.esperienze.removeAt(index);
  }  
  
  salvaEP() {
    this.curriculumStore.saveEP(this.EPForm.value);
    this.modifica = false;
    this.esperienzeProfessionali = this.curriculumStore.getEP();
  }

  modificaIP() {
    this.modifica = true;
  }   

}
