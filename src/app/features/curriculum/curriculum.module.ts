import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CurriculumComponent } from './components/curriculum/curriculum.component';
import { InfoPersonaliComponent } from './components/info-personali/info-personali.component';
import { EsperienzeProfessionaliComponent } from './components/esperienze-professionali/esperienze-professionali.component';
import { LinguaMadreComponent } from './components/lingua-madre/lingua-madre.component';
import { LingueStraniereComponent } from './components/lingue-straniere/lingue-straniere.component';

@NgModule({
  declarations: [
    CurriculumComponent,
    InfoPersonaliComponent,
    EsperienzeProfessionaliComponent,
    LinguaMadreComponent,
    LingueStraniereComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    RouterModule.forChild([
      { path: '', component: CurriculumComponent }
    ]),
  ],
  exports: [
    CurriculumComponent,
    InfoPersonaliComponent,
    EsperienzeProfessionaliComponent,
    LinguaMadreComponent,
    LingueStraniereComponent,
  ]
})
export class CurriculumModule { }
