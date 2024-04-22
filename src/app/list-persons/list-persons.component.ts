import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { PersonsService } from '../shared/persons.service';

@Component({
  selector: 'app-list-persons',
  templateUrl: './list-persons.component.html',
  styleUrls: ['./list-persons.component.css']
})
export class ListPersonsComponent implements OnInit {

  
  constructor(private historyService:PersonsService){}

  @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;

  displayedColumns: string[] = ['id', 'firstName', 'lastName','gender','email','adressIp'];
  dataSource: any;
  empdata: any;
  myHistory;
  ngOnInit(): void {
    this.getPersons();
  }

  Filterchange(event: Event) {
    const filvalue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filvalue;
  }

  getPersons(){
    this.historyService.getPersons().subscribe(
      res =>{
        this.myHistory = res;

        this.dataSource = new MatTableDataSource<any>(this.myHistory);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;

      },
      err =>{
        console.log(err);
      }

    );
  }

}
