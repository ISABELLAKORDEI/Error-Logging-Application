import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import { mainLogUrl, getDevLogsUrl, getStatsUrl } from 'src/utils/urls';

@Injectable({
  providedIn: 'root'
})
export class LogsService {
  headers = new HttpHeaders({
    'Authorization': `Bearer ${this.authService.getLocalToken()}`
    });

  constructor(private http: HttpClient, private authService: AuthService) { }

  getAllLogs(): Observable<any> {
    return this.http.get<any>(mainLogUrl, {
      headers: this.headers,
      observe: 'response'
    }).pipe(map(response => {
      return response;
    }));
  }

  getDevLogs(): Observable<any> {
    return this.http.get<any>(getDevLogsUrl, {
      headers: this.headers,
      observe: 'response'
    }).pipe(map(response => {
      return response;
    }));
  }

  updateLog(id: number, status: string): Observable<any> {
    return this.http.put(mainLogUrl + '/' + id.toString(), {
      "status": status
    }, {
      headers: this.headers, 
      observe: 'response' 
    }).pipe(map(response => {
        return response;
      }));
  }

  unassignLog(id: number, status: string): Observable<any> {
    return this.http.put(mainLogUrl + '/' + id.toString(), {
      "status": status,
      "developer": null
    }, {
      headers: this.headers, 
      observe: 'response' 
    }).pipe(map(response => {
        return response;
      }));
  }

  getLogTypeStats(): Observable<any> {
    return this.http.get<any>(getStatsUrl + 'type', {
      headers:  this.headers,
      observe: 'response'
    }).pipe(map(response => {
      return response;
    }));
  }

  getLogMsStats(): Observable<any> {
    return this.http.get<any>(getStatsUrl + 'microservice', {
      headers:  this.headers,
      observe: 'response'
    }).pipe(map(response => {
      return response;
    }));
  }

  getLogStatusStats(): Observable<any> {
    return this.http.get<any>(getStatsUrl + 'status', {
      headers:  this.headers,
      observe: 'response'
    }).pipe(map(response => {
      return response;
    }));
  }

}

