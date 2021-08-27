import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  template: `
    <nav class="navbar navbar-expand navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand">Your CV</a>
        <ul class="navbar-nav me-auto">
          <li class="nav-item">
            <a routerLink="/home" routerLinkActive="active" class="nav-link">Home</a>
          </li>
          <li class="nav-item">
            <a routerLink="/curriculum" routerLinkActive="active" class="nav-link">Curriculum</a>
          </li>
          <li class="nav-item" *ngIf="auth.isLogged">
            <a routerLink="" (click)="auth.logout()" class="nav-link">Logout</a>
          </li>
        </ul>
      </div>
    </nav>
  `,
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit(): void {
  }

}
