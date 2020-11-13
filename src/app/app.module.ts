import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { InfoPersonaliComponent } from './features/info-personali/info-personali.component';
import { EsperienzeProfessionaliComponent } from './features/esperienze-professionali/esperienze-professionali.component';
import { LinguaMadreComponent } from './features/lingua-madre/lingua-madre.component';
import { LingueStraniereComponent } from './features/lingue-straniere/lingue-straniere.component';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    InfoPersonaliComponent,
    EsperienzeProfessionaliComponent,
    LinguaMadreComponent,
    LingueStraniereComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
