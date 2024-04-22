import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { EntityService } from '../shared/entity.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogCreatedComponent } from '../dialog-created/dialog-created.component';

@Component({
  selector: 'app-create-table',
  templateUrl: './create-table.component.html',
  styleUrls: ['./create-table.component.css']
})
export class CreateTableComponent implements OnInit{

  constructor(private _formBuilder: FormBuilder,
    private service:EntityService,
    public dialog: MatDialog
  ){}

  name = new FormControl('');
  dataType = new FormControl('');

  attributes:any[]=[];
  firstFormGroup = this._formBuilder.group({
 
    tableName: ['', Validators.required],

  });
  ngOnInit(): void {
    
  }

  addToAttributes(){
    this.attributes?.push({
      name:this.name.value,
      dataType:this.dataType.value,
      
    })

    this.name.reset();
    this.dataType.reset();


  }

  onSubmit(){
    var body = {
      tableName: this.firstFormGroup.value.tableName,
      attributes: this.attributes,
    };
    this.service.createTable(body).subscribe(
      res =>{
        
     
      }
    )

    const dialogRef = this.dialog.open(DialogCreatedComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
