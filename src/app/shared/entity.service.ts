import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EntityService {
  readonly BaseURI = 'http://localhost:5127/api';

  constructor(private http: HttpClient) { }

  createTable(body){
    return this.http.post(this.BaseURI+ '/Enitity/CreateTable',body);
  }
}
