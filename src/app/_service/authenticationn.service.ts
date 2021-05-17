import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { logind } from '../demo/data.commd';
import { catchError, map } from 'rxjs/operators';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';
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
export class AuthenticationnService {
  path = 'https://reqres.in/api/login';
  userloging = new Array();
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;
  constructor(
    private http: HttpClient,
    private router: Router
  ) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('_IDd')! ));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }
  sessiontimestart(){
    const now = new Date();
    const item = {
        count: '0',
        expiry: now.getTime() + 60200
    };
    localStorage.setItem('_IDdF', JSON.stringify(item));
  }
  login(data: any){
    console.log(data);

    return this.http.post(this.path, data).pipe(
      map(dataa => {
        console.log(dataa);
        const dta: any = dataa;
        localStorage.setItem('_IDd', JSON.stringify(dta.token) );
        this.currentUserSubject.next(data);
        this.sessiontimestart();
        return dataa;

      })
    );
  }
  logout() {
    // remove user from local storage to log user out
    localStorage.clear();
    this.currentUserSubject.next(null!);
    this.router.navigate(['/login']);
  }

  cheecktimeout(){
    const itemStr = localStorage.getItem('_IDdF');
    const nows = new Date();
    const items = JSON.parse(itemStr!);
    console.log(items.expiry - new Date().getTime() );
    if (nows.getTime() > items.expiry){
        console.log('R');
        this.logout();

    }else{
        console.log('N');
        this.sessiontimestart();
        // this.timeout()

    }
  }
  // timeout(){
  //   console.log("chekkkkkkkkkkkkkkkkkkkkkk");
  //   const itemStr= localStorage.getItem('_IDdF');
  //   const items=JSON.parse(itemStr!);
  //   console.log(items.expiry- new Date().getTime() );

  //   setTimeout(() => {
  //     // if(confirm("Session Expired !")){
  //       this.logout()
  //     // }else{

  //     // }
  //   }, items.expiry- new Date().getTime());


  // }
}

