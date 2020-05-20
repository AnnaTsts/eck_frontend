import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

import {Injectable, OnInit} from '@angular/core';
@Injectable({
  providedIn: 'root'
})


export class FileUploadService {



  constructor(private http: HttpClient) {
  }
  ngOnInit() {

  }


  postFile(fileToUpload: File): Observable<any> {
    const endpoint = 'http://localhost:8080/api/ekg';
    const formData: FormData = new FormData();
    formData.append('fileKey', fileToUpload, fileToUpload.name);
    console.log(formData)
    return this.http
      .post(endpoint, fileToUpload, { })
  }
}
