import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Nazioni } from './../../json/nazioni';
import { FormBuilder, FormGroup, FormArray, Validators, AbstractControl, FormControl } from '@angular/forms';
import { CurriculmStore } from './../../services/curriculum.store';
import { InfoPersonali } from './../../model/curriculum';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-info-personali',
  templateUrl: './info-personali.component.html',
  styleUrls: ['./info-personali.component.scss']
})
export class InfoPersonaliComponent implements OnInit {
  
  IPForm: FormGroup;
  data_nascita: NgbDateStruct;
  minDate = { year: 1950, month: 1, day: 1 };
  maxDate = { year: new Date().getFullYear(), month: new Date().getMonth() + 1, day: new Date().getDate() };
  siti: FormArray;
  telefoni: FormArray;
  tipoTelefoni = ['Abitazione','Cellulare','Lavoro'];
  tipoSesso = [
    { id: 'M', name: 'Maschile' },
    { id: 'F', name: 'Femminile' },
    { id: 'N', name: 'Da non indicare' },
  ]; 
  nazioni = Nazioni;
  //infoPersonali: InfoPersonali;
  modifica = false;

  @Input() infoPersonali: InfoPersonali;
  @Output() saveIP: EventEmitter<InfoPersonali> = new EventEmitter();
  
  constructor(
    private formBuilder: FormBuilder,
    public curriculumStore: CurriculmStore
    ) { }
    
  ngOnInit() {
    
    this.infoPersonali = this.curriculumStore.getIP();
    //console.log(this.infoPersonali);

    this.IPForm = this.formBuilder.group({
      foto: [''],
      nome: [this.infoPersonali && this.infoPersonali.nome ? this.infoPersonali.nome : '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(50)
        ]
      ],
      cognome: [this.infoPersonali && this.infoPersonali.cognome ? this.infoPersonali.cognome : '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(50)
        ]
      ],
      indirizzo: [this.infoPersonali && this.infoPersonali.indirizzo ? this.infoPersonali.indirizzo : '',
        [
          Validators.required,
          Validators.minLength(10)
        ]
      ],
      cap: [this.infoPersonali && this.infoPersonali.cap ? this.infoPersonali.cap : '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(5)
        ]
      ],
      citta: [this.infoPersonali && this.infoPersonali.citta ? this.infoPersonali.citta : '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(50)
        ]
      ],
      nazione: [this.infoPersonali && this.infoPersonali.nazione ? this.infoPersonali.nazione : 'default',
        [
          Validators.required
        ]
      ],
      nazionalita: [this.infoPersonali && this.infoPersonali.nazionalita ? this.infoPersonali.nazionalita : 'default',
        [
          Validators.required
        ]
      ],
      email: [this.infoPersonali && this.infoPersonali.email ? this.infoPersonali.email : '',
        [
          Validators.required,
          Validators.email
        ]
      ],
      data_nascita: [this.infoPersonali && this.infoPersonali.data_nascita ? this.infoPersonali.data_nascita : ''],
      sesso: [this.infoPersonali && this.infoPersonali.sesso ? this.infoPersonali.sesso : 'Maschile'],
      siti: this.getSitiFormArray(),
      telefoni: this.getTelefoniFormArray()
    });

    this.siti = <FormArray>this.IPForm.get('siti');
    this.telefoni = this.IPForm.get('telefoni') as FormArray;   

    //this.IPForm.valueChanges.subscribe(data => console.log(data));
  }

  get nome() { return this.IPForm.get('nome'); }
  get cognome() { return this.IPForm.get('cognome'); }
  get indirizzo() { return this.IPForm.get('indirizzo'); }
  get cap() { return this.IPForm.get('cap'); }
  get citta() { return this.IPForm.get('citta'); }
  get email() { return this.IPForm.get('email'); }

  getTelefoniFormArray(): FormArray {
    if(this.infoPersonali && this.infoPersonali.telefoni) {
      return this.formBuilder.array(this.infoPersonali.telefoni.map(item => {
        const group = this.creaTelefono();
        group.patchValue(item);
        return group;
      }))  

    } else {
      return this.formBuilder.array([
        this.creaTelefono()
      ])     
    }
  } 

  getSitiFormArray(): FormArray {
    if(this.infoPersonali && this.infoPersonali.siti) {
      return this.formBuilder.array(this.infoPersonali.siti.map(item => {
        const group = this.creaSito();
        group.patchValue(item);
        return group;
      }))  

    } else {
      return this.formBuilder.array([
        this.creaSito()
      ])     
    }
  } 

  creaSito(): FormControl {
    return this.formBuilder.control('',
      [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(50)
      ]
    )
  }  

  aggiungiSito() {
    this.siti.push( this.creaSito() );
  }  

  rimuoviSito(index: number) {
    this.siti.removeAt(index);
  } 

  creaTelefono() : FormGroup {
    return this.formBuilder.group({
      tipo: ['default',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(50)
        ]
      ],
      numero: ['',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(50)
        ]
      ],
    });
  }

  aggiungiTelefono() {
    this.telefoni.push( this.creaTelefono() );
  }

  rimuoviTelefono(index: number) {
    this.telefoni.removeAt(index);
  }   

  salvaIP() {
    this.saveIP.emit(this.IPForm.value);
    this.modifica = false;
    //this.infoPersonali = this.curriculumStore.getIP();
  }

  modificaIP() {
    this.modifica = true;
  }

}
