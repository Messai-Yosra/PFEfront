import { Component, OnInit } from '@angular/core';
import { ExcelServiceService } from '../shared/excel-service.service';
import { Person } from '../shared/models/Person';
import { HistoryService } from '../shared/history.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-convert-data',
  templateUrl: './convert-data.component.html',
  styleUrls: ['./convert-data.component.css']
})
export class ConvertDataComponent implements OnInit {

  ExcelDetails;
  entities;
  selected;
  selectedEntity;
  persons: Person[] = [];

  constructor(private excelService: ExcelServiceService,
    private historyService: HistoryService,
    private ac: ActivatedRoute,
    private router:Router,
    public dialog: MatDialog
  ) { }

  myParam: string;
  ngOnInit(): void {
    this.ac.paramMap.subscribe(
      res => {
        this.myParam = res.get('id'),
          this.verifyFileExist();
      }

    );


    this.getDataFromXml();
    this.getEntities();
  }
  newPerson = {};
  selectedPerson: Person[] = []
  getSelectedAttributeName(index, item) {
    console.log(" this.attributeNames[index]" + this.attributeNames[index])
    let attributeName = this.attributeNames[index];
    console.log("attributeName" + attributeName)
    // let attributeName = this.attributeNames[index];

    this.newPerson[item] = this.attributeNames[index];
    this.selectedPerson.push(this.newPerson);

    console.log("selectedPerson: ", JSON.stringify(this.selectedPerson));

  }

  getExistSelectedAttributeName(index, item) {
    console.log(" this.attributeNames[index]" + this.attributeNames[index])
    let attributeName = this.attributeNames[index];
    console.log("attributeName" + attributeName)
    // let attributeName = this.attributeNames[index];

    this.newPerson[item] = this.attributeNames[index];
    this.selectedPerson.push(this.newPerson);

    console.log("selectedPerson: ", JSON.stringify(this.selectedPerson));

  }

  selectedAttributesToExist(){
    for (let i = 1; i < this.historyFileInfos.attributes.length; i++) {
      
      this.getExistSelectedAttributeName(i,this.historyFileInfos.attributes[i])
    }
    
  }

  id: number;




  reqbody = []

  addToPersons() {

    this.id = 2;


    for (let e of this.ExcelDetails) {
      this.selectedPerson = e
      let line = {}
      for (let x in this.newPerson) {

        console.log("x" + x)


        line[x] = e[this.newPerson[x]]

        console.log("this.newPerson[x" + this.newPerson[x])
      }
      this.reqbody.push(line)

    }
    console.log(JSON.stringify(this.reqbody))

    console.log("selectedPerson: ", JSON.stringify(this.selectedPerson));


  }

  selectedSheet: string = '';
  attributeNames: string[];
  getDataFromXml() {
    this.excelService.getDataFromXml(this.myParam).subscribe(
      res => {
        this.ExcelDetails = res;
        this.attributeNames = Object.keys(res[0]);
      },
      err => {
        console.log(err);
      }

    );

  }

  getEntities() {
    this.excelService.getEntities().subscribe(
      res => {
        this.entities = res;

      },
      err => {
        console.log(err);
      }

    );

  }

  selectEntity(value) {
    console.log("the selected value is " + value);
    this.selected = true;
    this.selectedEntity = value;
  }

  addHistory() {

    var body = {
      fileName: this.myParam,
      entityName: this.selectedEntity.name,
      attributes: this.selectedEntity.attributes,
      dateCreation: new Date(),

    };

    this.historyService.addHistory(body).subscribe(
      res => {
        this.router.navigateByUrl('/persons');
      },
      error => {
        console.error('Error adding collaborateur:', error);
        // Handle errors as needed
      }
    );
  }

  sendSavedParamPerson() {
    this.selectedAttributesToExist()
    if (confirm("Are you sure you want save data?")) {
      this.addToPersons();
    this.excelService.addPerson(this.reqbody).subscribe(
      res => {
        this.addHistory();
      },
      error => {
        console.error('Error adding collaborateur:', error);
        // Handle errors as needed
      }
    );
    }
    
  }


  sendPerson() {
    
      this.addToPersons();
    this.excelService.addPerson(this.reqbody).subscribe(
      res => {
        this.addHistory();
      },
      error => {
        console.error('Error adding collaborateur:', error);
        // Handle errors as needed
      }
    );
    
    
  }

  historyFileInfos
  exist:boolean=false;
  verifyFileExist() {
    this.historyService.getHistoryByFileName(this.myParam).subscribe(
      res => {
        this.historyFileInfos = res;
        if (res!=null) {
          this.exist=true;
          
        }

      },
      err => {
        console.log(err);
      }

    );
  }

  existFalse(){
    this.exist=false;
  }
  

}
