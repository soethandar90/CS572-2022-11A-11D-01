import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private jwtService: JwtHelperService) { }

  get isLoggedIn() {
    return this.token ? true : false;
  }
  set token(token: string) {
    localStorage.setItem('token', token);
  }
  get token() {
    return localStorage.getItem('token') || "" as string;
  }

  get name(): string {
    if (this.token) {
      return (this.jwtService.decodeToken(this.token)).name;
    } else {
      return "";
    }
  }
}