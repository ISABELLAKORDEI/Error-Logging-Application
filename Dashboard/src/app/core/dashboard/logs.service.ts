import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import { Log } from 'src/utils/models';
import { getAllLogsUrl, getDevLogsUrl, updateLog } from 'src/utils/urls';

@Injectable({
  providedIn: 'root'
})
export class LogsService {
  headers = new HttpHeaders({
    'Authorization': `Bearer ${this.authService.getLocalToken()}`
    });

  constructor(private http: HttpClient, private authService: AuthService) { }

  getAllLogs(): Observable<any> {
    return this.http.get<any>(getAllLogsUrl, {
      headers: this.headers,
      observe: 'response'
    }).pipe(map(response => {
      return response;
    }));
  }

  getDevLogs(id: number): Observable<any> {
    return this.http.get<any>(getDevLogsUrl + '/' + id.toString(), {
      headers: this.headers,
      observe: 'response'
    }).pipe(map(response => {
      return response;
    }));
  }

  updateLog(id: number, status: string): Observable<any> {
    return this.http.put(updateLog + '/' + id.toString(), {
      "status": status
    }, {
      headers: this.headers, 
      observe: 'response' 
    }).pipe(map(response => {
        return response;
      }));
  }

}

