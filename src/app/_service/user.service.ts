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
@Injectable({
  providedIn: 'root'
})
export class AuthenticationnUserService {
  path = 'https://reqres.in/api/login';
  userloging = new Array();
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;
  constructor(
    private http: HttpClient
  ) {
    // this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('_IDd')));
    // this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }
  sessiontimestart(){
    const now = new Date();
    const item = {
        count: '0',
        expiry: now.getTime() + 12000
    };
    localStorage.setItem('_key', JSON.stringify(item));
}
  login(data: any){
    return this.http.post(this.path, data).pipe(
      map(dataa => {
          // this.userloging.push(dataa);
          // this.dataa.token
          // localStorage.setItem("_IDd",JSON.stringify() );
          // this.currentUserSubject.next(data);



      }), catchError(error => {
        return 'throwError( \'Something went wrong!\' );';
      })
    );
  }
  logout() {
    // remove user from local storage to log user out
    localStorage.clear();
    // this.currentUserSubject.next();
}
}
