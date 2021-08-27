import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Credentials } from '../model/credentials';
import { Token } from '../model/token';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  tokenObj : Partial<Token> = {}; 
  error : boolean = false;
  error_description : string = '';
  isLogged : boolean;

  constructor(private http: HttpClient, private router: Router) { }

  getToken(credentials: Credentials) {

    return this.http.post<Token>('http://laravel_api/api/token', credentials)
    .subscribe(
      () => {
        this.error = false;
        this.isLogged = true;
        this.router.navigateByUrl('curriculum');
      },
      err => {
        this.error = true;
        this.error_description = err.statusText;
        this.isLogged = false;
      }
    );

  }

  logout() {
    this.isLogged = false;
    this.router.navigateByUrl('login');
  }



  /*

  login() {

    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer 14|v3cHBuJn90Wsjb1rn8z3uMROqNeA7MO5xxbkFT6C'
      })
    };


    this.http.get('http://laravel_api/api/user', httpOptions)
      .subscribe(res => console.log(res));

  }
  */




}
