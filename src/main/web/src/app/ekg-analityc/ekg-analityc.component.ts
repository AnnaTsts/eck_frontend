import { Component, OnInit } from '@angular/core';
import {FileUploadService} from "@services/FileUpload.service";

@Component({
  selector: 'app-ekg-analityc',
  templateUrl: './ekg-analityc.component.html',
  styleUrls: ['./ekg-analityc.component.scss']
})
export class EkgAnalitycComponent implements OnInit {

  fileToUpload: File = null;

  constructor(private fileUploadService:FileUploadService) { }

  ngOnInit() {
  }

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
  }


  uploadFileToActivity() {
    this.fileUploadService.postFile(this.fileToUpload).subscribe(data => {
      // do something, if upload success
    }, error => {
      console.log(error);
    });
  }


}
