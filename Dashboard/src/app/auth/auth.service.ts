import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { createUserUrl, loginUserUrl } from 'src/utils/urls';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient, private router: Router) { }

  get isLoggedIn() {
    var token = this.getLocalToken();
    if (token == undefined) {
      this.loggedIn.next(false);
    } else {
      this.loggedIn.next(true);
    }
    return this.loggedIn.asObservable();
  }

  register(formValues: any): Observable<any> {
    return this.http.post(createUserUrl, formValues, { observe: 'response' })
      .pipe(map(response => {
        return response;
      }));
  }

  updateUser(formValues: any): Observable<any> {
    return this.http.patch(createUserUrl + '/' + formValues['id'].toString(), formValues, { observe: 'response' })
      .pipe(map(response => {
        return response;
      }));
  }

  deleteUser(id: number) {
    return this.http.delete(createUserUrl + '/' + id.toString(),)
      .pipe(map(response => {
        return response;
      }));
  }

  login(formValues: any): Observable<any> {
    return this.http.post<any>(loginUserUrl, formValues, {
      observe: 'response',
    }).pipe(map(response => {
      if (response.status == 200) {
        this.localSaveToken(response.body['data'].token);
        this.loggedIn.next(true);
      } else {
        this.loggedIn.next(false);
      }
      return response;
    }));
  }



  localSaveToken(profile: any) {
    localStorage.setItem('userToken', JSON.stringify(profile));
  }

  getLocalToken(): any {
    return JSON.parse(localStorage.getItem('userToken') || "{}")
  }

  logout() {
    localStorage.removeItem('userToken');
    this.loggedIn.next(false);
    this.router.navigate(['/login']);
  }
}