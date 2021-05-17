import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { logind } from '../demo/data.commd';
import { catchError, map } from 'rxjs/operators';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
export class User {
  id: number;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  token: string;
}
const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationnTokenService {
  constructor() { }

  signOut(): void {
    window.sessionStorage.clear();
  }

  public saveToken(token: string): void {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string {
    return sessionStorage.getItem(TOKEN_KEY) || '{}';
  }

  public saveUser(user:any): void {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  public getUser(): any {
    return JSON.parse(sessionStorage.getItem(USER_KEY) || '{}');
  }
}
