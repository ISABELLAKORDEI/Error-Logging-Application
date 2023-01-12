import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogsService {

  // private closePayFormEvent = new EventEmitter<any>();
  // private closeClientFormEvent = new EventEmitter<any>();

  // constructor(private http: HttpClient) { }

  // closePayForm() {
  //   this.closePayFormEvent.emit();
  // }

  // getClosePayForm(): Observable<any> {
  //   return this.closePayFormEvent.asObservable();
  // }

  // closeClientForm() {
  //   this.closeClientFormEvent.emit();
  // }

  // getCloseClientForm(): Observable<any> {
  //   return this.closeClientFormEvent.asObservable();
  // }

  // addClient(formValues: any): Observable<any> {
  //   return this.http.post(clientUrl, formValues, { headers: apiHeaders, observe: 'response' })
  //     .pipe(map(response => {
  //       return response;
  //     }));
  // }

  // updateClient(formValues: any): Observable<any> {
  //   return this.http.patch(clientUrl + '/' + formValues['id'].toString(), formValues, { headers: apiHeaders, observe: 'response' })
  //     .pipe(map(response => {
  //       return response;
  //     }));
  // }

  // getClient(id: number): Observable<any> {
  //   return this.http.get<any>(clientUrl + '/' + id.toString(), {
  //     observe: 'response'
  //   }).pipe(map(response => {
  //     return response;
  //   }));
  // }

  // activateClient(id: number): Observable<any> {
  //   return this.http.get<any>(activateClientUrl + '/' + id.toString(), {
  //     headers: apiHeaders,
  //     observe: 'response'
  //   }).pipe(map(response => {
  //     return response;
  //   }));
  // }

  // getClientMessages(id: number): Observable<any> {
  //   return this.http.get<any>(allClientMessagesUrl + '/' + id.toString(), {
  //     headers: apiHeaders,
  //     observe: 'response'
  //   }).pipe(map(response => {
  //     return response;
  //   }));
  // }
  // deleteSms(id: number) {
  //   return this.http.delete(messageUrl + '/' + id.toString(),)
  //     .pipe(map(response => {
  //       return response;
  //     }));
  // }

  // deleteClient(id: number) {
  //   return this.http.delete(clientUrl + '/' + id.toString(),)
  //     .pipe(map(response => {
  //       return response;
  //     }));
  // }

  // addNote(formValues: any): Observable<any> {
  //   return this.http.post(noteUrl, formValues, { headers: apiHeaders, observe: 'response' })
  //     .pipe(map(response => {
  //       return response;
  //     }));
  // }

  // updateNote(formValues: any): Observable<any> {
  //   return this.http.patch(noteUrl + '/' + formValues['id'].toString(), formValues, { headers: apiHeaders, observe: 'response' })
  //     .pipe(map(response => {
  //       return response;
  //     }));
  // }

  // getNote(id: number): Observable<any> {
  //   return this.http.get<any>(noteUrl + '/' + id.toString(), {
  //     headers: apiHeaders,
  //     observe: 'response'
  //   }).pipe(map(response => {
  //     return response;
  //   }));
  // }

  // getClientNotes(id: number): Observable<any> {
  //   return this.http.get<any>(allClientNotesUrl + '/' + id.toString(), {
  //     headers: apiHeaders,
  //     observe: 'response'
  //   }).pipe(map(response => {
  //     return response;
  //   }));
  // }

  // deleteNote(id: number) {
  //   return this.http.delete(noteUrl + '/' + id.toString(),)
  //     .pipe(map(response => {
  //       return response;
  //     }));
  // }

  // getHomeStats(): Observable<any> {
  //   return this.http.get<any>(homeStatsUrl, {
  //     headers: apiHeaders,
  //     observe: 'response'
  //   }).pipe(map(response => {
  //     return response;
  //   }));
  // }

  // getClientStats(): Observable<any> {
  //   return this.http.get<any>(clientStatsUrl, {
  //     headers: apiHeaders,
  //     observe: 'response'
  //   }).pipe(map(response => {
  //     return response;
  //   }));
  // }

}

