import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  template: `
    <div class="container mt-3">
      <form #flogin="ngForm" (submit)="login(flogin)">
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input 
            name="email"
            [ngModel]
            type="email" 
            class="form-control" 
            id="exampleInputEmail1" 
            placeholder="Enter email"
            required>
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input 
            name="password"
            [ngModel]
            type="password" 
            class="form-control" 
            id="exampleInputPassword1" 
            placeholder="Password"
            required>
        </div>

        <div class="alert alert-danger" *ngIf="auth.error">{{auth.error_description}}</div>

        <div class="form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1">
          <label class="form-check-label" for="exampleCheck1">Remember me</label>
        </div>
        <button type="submit" class="btn btn-primary" [disabled]="flogin.invalid">Submit</button>
      </form>  

      ( is valid: {{ flogin.valid }} )

    </div>
`,
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email: string =  '';
  password: string = '';

  constructor(public auth: AuthService) { }

  ngOnInit(): void {
  }

  login(flogin: NgForm) {
    
    this.auth.getToken(flogin.value);   

  }

}
