import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExcelServiceService {

  constructor( private http: HttpClient) { }

  readonly BaseURI = 'http://localhost:5127/api';

  getDataFromXml(fileName){
    return this.http.get(this.BaseURI+ '/ExcelToXml/getDataFromXml?file='+fileName);
  }

  getEntities(){
    return this.http.get(this.BaseURI+ '/Enitity/getEntities');
  }

  addPerson(formData){
    return this.http.post(this.BaseURI + '/Persons/addManyPersons', formData);
  }
}
