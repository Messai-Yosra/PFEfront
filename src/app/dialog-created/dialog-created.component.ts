import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dialog-created',
  templateUrl: './dialog-created.component.html',
  styleUrls: ['./dialog-created.component.css']
})
export class DialogCreatedComponent {
  constructor(public dialogRef: MatDialogRef<DialogCreatedComponent>,
    private router:Router
   ){}

   close(){
    this.dialogRef.close();
    this.router.navigate(['homepage']);
   }

}
