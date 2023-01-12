import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { createUserUrl, loginUserUrl } from 'src/utils/urls';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = false;

  auth_headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': ''
  });

  headers = new HttpHeaders({
    'Content-Type': 'application/json',
  });

  constructor(private http: HttpClient, private router: Router) { }

  get getUserHeaders() {
    var token = this.getLocalToken();
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Token ' + token
    });
  }

  get isLoggedIn() {
    var token = this.getLocalToken();
    if (token == undefined || {}) {
      this.loggedIn = false;
    } else {
      this.loggedIn = true;
    }
    return this.loggedIn;
  }

  register(formValues: any): Observable<any> {
    return this.http.post(createUserUrl, formValues, {
      headers: {}, observe: 'response'
    })
      .pipe(map(response => {
        return response;
      }));
  }

  updateUser(formValues: any): Observable<any> {
    var userId = 1;
    return this.http.patch(createUserUrl + userId + '/', formValues,
      { headers: this.getUserHeaders, observe: 'response' })
      .pipe(map(response => {
        return response;
      }));
  }

  login(formValues: any): Observable<any> {
    return this.http.post<any>(loginUserUrl, formValues, {
      headers: {},
      observe: 'response'
    }).pipe(map(response => {
      if (response.status == 200) {
        this.localSaveUser(response.body['data'].token);
        this.loggedIn = true;
      } else {
        this.loggedIn = false;
      }
      return response;
    }));
  }

  // getUser(): Observable<any> {
  //   var token = this.getLocalToken();
  //   var userId = this.getLocalId();
  //   var user_headers = new HttpHeaders({
  //     'Authorization': 'Token ' + token
  //   });
  //   return this.http.get<any>(createUserUrl + userId + '/', {
  //     headers: user_headers,
  //     observe: 'response'
  //   }).pipe(map(response => {
  //     return response;
  //   }));
  // }

  getUser() {
    return {
      'first_name': 'Admin',
      'last_name': 'One',
      'role': 'Backend Lead'
    };
  }

  localSaveUser(profile: any) {
    localStorage.setItem('userToken', JSON.stringify(profile));
  }

  getLocalToken(): any {
    return JSON.parse(localStorage.getItem('userToken') || "{}")
  }

  logout() {
    localStorage.removeItem('userToken');
    this.loggedIn = false;
    this.router.navigate(['/login']);
  }
}