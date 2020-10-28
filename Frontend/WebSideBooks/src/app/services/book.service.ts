import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  public headers: HttpHeaders;

  constructor(private http: HttpClient) {

  }

  public getBookList(request: any): Observable<any> {
    // --> CABECERA
    this.headers = new HttpHeaders();
    this.headers = this.headers.set('Content-Type', 'application/json');
    // --> EJECUCION DEL SERVICIO
    return this.http.get('https://angular-datatables-demo-server.herokuapp.com/');
  }

}
