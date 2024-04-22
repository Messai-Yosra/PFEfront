import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  constructor( private http: HttpClient) { }

  readonly BaseURI = 'http://localhost:5127/api';

  getHistory(){
    return this.http.get(this.BaseURI+ '/History');
  }

  addHistory(formData){
    return this.http.post(this.BaseURI + '/History', formData);
  }

  getHistoryByFileName(fileName){
    return this.http.get(this.BaseURI+ '/History/historyByFile?fileName='+fileName);
  }

  getStats(){
    return this.http.get(this.BaseURI+ '/History/stats');
  }

}
