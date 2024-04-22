import { Component, OnInit, ViewChild } from '@angular/core';
import { HistoryService } from '../shared/history.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  constructor(private historyService:HistoryService){}

  @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;

  displayedColumns: string[] = ['id', 'fileName', 'entityName','dateCreation','action'];
  dataSource: any;
  empdata: any;
  myHistory;
  ngOnInit(): void {
    this.getHistory();
  }

  Filterchange(event: Event) {
    const filvalue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filvalue;
  }

  getHistory(){
    this.historyService.getHistory().subscribe(
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
