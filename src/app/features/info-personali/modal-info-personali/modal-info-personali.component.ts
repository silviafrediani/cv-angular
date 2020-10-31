import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-info-personali',
  templateUrl: './modal-info-personali.component.html',
  styleUrls: ['./modal-info-personali.component.scss']
})
export class ModalInfoPersonaliComponent {

  constructor(public activeModal: NgbActiveModal) { }

}
