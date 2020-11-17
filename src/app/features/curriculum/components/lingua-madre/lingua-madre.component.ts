import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Lingue } from './../../json/lingue';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';
import { CurriculmStore } from './../../services/curriculum.store';
import { forbiddenLanguageValidator } from './../../validators/lingua.validator';

@Component({
  selector: 'app-lingua-madre',
  templateUrl: './lingua-madre.component.html',
  styleUrls: ['./lingua-madre.component.scss']
})
export class LinguaMadreComponent implements OnInit {

  LMForm: FormGroup;
  //linguaMadre: Array<string>;
  lingue: FormArray;
  modifica = false;
  lingueList = Lingue;

  @Input() linguaMadre: Array<string>;
  @Output() saveLM: EventEmitter<string> = new EventEmitter();

  constructor(
    private formBuilder: FormBuilder,
    public curriculumStore: CurriculmStore
  ) { }

  ngOnInit(): void {

    this.LMForm = this.formBuilder.group({
      lingue: this.getLingueFormArray(),
    });

    this.lingue = <FormArray>this.LMForm.get('lingue');

  }

  getLingueFormArray(): FormArray {
    if (this.linguaMadre) {
      return this.formBuilder.array(this.linguaMadre.map(item => {
        const group = this.creaLingua();
        group.patchValue(item);
        return group;
      }))

    } else {
      return this.formBuilder.array([
        this.creaLingua()
      ])
    }
  }

  creaLingua(): FormControl {
    return this.formBuilder.control('default',
      [
        forbiddenLanguageValidator(/default/)
      ]
    )
  }

  aggiungiLingua() {
    this.lingue.push( this.creaLingua() );
  }

  rimuoviLingua(index: number) {
    this.lingue.removeAt(index);
  }  
  
  salvaLM() {
    this.saveLM.emit(this.LMForm.value.lingue);
  }  

}
