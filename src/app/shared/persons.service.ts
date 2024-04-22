import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersonsService {

  
  constructor( private http: HttpClient) { }

  readonly BaseURI = 'http://localhost:5127/api';

  getPersons(){
    return this.http.get(this.BaseURI+ '/Persons');
  }
}
