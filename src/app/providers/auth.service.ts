import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { User } from '../models/user';

import { ResponseSignUp } from '../models/dtos/response-sign-up';
import { RequestSignUp } from '../models/dtos/request-sign-up';
import { RequestLogin } from '../models/dtos/request-login';
import { ResponseLogin } from '../models/dtos/response-login';
import { tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  urlBase = 'http://localhost:3000/api/auth';

  constructor(private http: HttpClient) {}

  // Simula la autenticación, deberías implementar tu propia lógica
  isAuthenticated(): boolean {
    const token = localStorage.getItem('token'); // Por ejemplo, comprobar si hay un usuario en el localStorage
    return !!token;
  }

  signup(value: RequestSignUp): Observable<ResponseSignUp> {
    const url = `${this.urlBase}/signup`;
    return this.http.post<ResponseSignUp>(url, value);
  }

  login(value: RequestLogin) {

    const url = `${this.urlBase}/login`;
    return this.http.post<ResponseLogin>(url, value).pipe(tap({
      next: r=> localStorage.setItem('token', r.token)}));
  }

  logout() {
    localStorage.removeItem('token')
  }

  findByPhone(telefono: string) {
    const url = `${this.urlBase}/findByPhone`;
    return this.http.post<User>(url, { telefono });
  }

  findByEmail(email: string) {
    const url = `${this.urlBase}/findByEmail`;
    return this.http.post<User>(url, { email });
  }
}
