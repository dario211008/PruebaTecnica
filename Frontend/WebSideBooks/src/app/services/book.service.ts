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

  public getBookList(): Observable<any> {
    // --> CABECERA
    this.headers = new HttpHeaders();
    this.headers = this.headers.set('Content-Type', 'application/json');
    // --> EJECUCION DEL SERVICIO
    return this.http.get('http://localhost:8083/crud/getBook');
  }

  public addBook(request: any): Observable<any> {
    // --> CABECERA
    this.headers = new HttpHeaders();
    this.headers = this.headers.set('Content-Type', 'application/json');
    // --> EJECUCION DEL SERVICIO
    return this.http.post('http://localhost:8083/crud/addBook', request);
  }

  public updateBook(request: any): Observable<any> {
    // --> CABECERA
    this.headers = new HttpHeaders();
    this.headers = this.headers.set('Content-Type', 'application/json');
    // --> EJECUCION DEL SERVICIO
    return this.http.post('http://localhost:8083/crud/updateBook', request);
  }

  public deleteBook(request: any): Observable<any> {
    // --> CABECERA
    this.headers = new HttpHeaders();
    this.headers = this.headers.set('Content-Type', 'application/json');
    // --> EJECUCION DEL SERVICIO
    return this.http.post('http://localhost:8083/crud/deleteBook', request);
  }

}
