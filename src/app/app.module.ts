import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FotoComponent } from './features/foto/foto.component';
import { InfoPersonaliComponent } from './features/info-personali/info-personali.component';
import { FormsModule } from '@angular/forms';

import { NgbActiveModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ModalInfoPersonaliComponent } from './features/info-personali/modal-info-personali/modal-info-personali.component';


@NgModule({
  declarations: [
    AppComponent,
    FotoComponent,
    InfoPersonaliComponent,
    ModalInfoPersonaliComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule
  ],
  providers: [
    NgbActiveModal
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
