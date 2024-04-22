import { Component, OnInit } from '@angular/core';
import { HistoryService } from '../shared/history.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  constructor(private service:HistoryService){

  }
  ngOnInit(): void {
    this.getStats();
  }

  productSales: any[]
  productSalesMulti: any[]
  Stat:any
  view: any[] = [700, 370];

  showLegend: boolean = true;
  showLabels: boolean = true;

  gradient: boolean = false;
  isDoughnut: boolean = true;

  legendPosition: string = 'below';

  colorScheme:any = {
    domain: ['#4B49AC', '#98BDFF', '#7DA0FA', '#7978E9', '#F3797E']
  };

  

  onActivate(data): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }

  onSelect(data): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  getStats(){
    this.service.getStats().subscribe(res=>{
      this.Stat=res;

      console.log("ddd"+this.Stat.map(i=>i.total));
  });
  }

}
