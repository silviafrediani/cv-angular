import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="container-fluid position-relative">

      <div class="section-title">

        <app-header></app-header>
        <router-outlet></router-outlet>

      </div>

    </div>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

}
