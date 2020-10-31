import { Component } from '@angular/core';
import { ModalInfoPersonaliComponent } from './modal-info-personali/modal-info-personali.component';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-info-personali',
  templateUrl: './info-personali.component.html',
  styleUrls: ['./info-personali.component.scss']
})
export class InfoPersonaliComponent {

  constructor(private modalService: NgbModal) { }

  openModal() {
    this.modalService.open(ModalInfoPersonaliComponent, 
      { size: 'lg', scrollable: true });
  }

}
