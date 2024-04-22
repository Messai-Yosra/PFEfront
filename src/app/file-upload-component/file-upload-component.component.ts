import { Component, ViewChild } from '@angular/core';
import { FileUploadService } from '../shared/file-upload.service';
import { Router } from '@angular/router';
import { ExcelServiceService } from '../shared/excel-service.service';

@Component({
  selector: 'app-file-upload-component',
  templateUrl: './file-upload-component.component.html',
  styleUrls: ['./file-upload-component.component.css']
})
export class FileUploadComponentComponent {

  @ViewChild('fileInput') fileInput: any;
  selectedFile: File | undefined;

  constructor(private fileUploadService: FileUploadService,
    private excelServiceService:ExcelServiceService,
    private router: Router) { }

     link = ['convertData/'];

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  uploadFile() {
    if (!this.selectedFile) {
      console.error('No file selected.');
      return;
    }
    

    this.fileUploadService.uploadFile(this.selectedFile).subscribe(
      response => {
        console.log('File uploaded successfully:', response);
        // Optionally, clear the selected file after successful upload
        this.selectedFile = undefined;
        this.router.navigate(['convertData/'+response.fileName]);
      },
      error => {
        this.router.navigate(['convertData/'+error]);
        console.error('Error uploading file:', error);
      }
    );
  }

  

}
