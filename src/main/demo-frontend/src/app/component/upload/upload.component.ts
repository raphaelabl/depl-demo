import { Component } from '@angular/core';
import {HttpService} from "../../service/http.service";

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent {


  form!: HTMLFormElement|undefined|null;

  file: File | null | undefined;

  fileName = ""

  imageUrl = ""

  constructor(private http: HttpService) {}

  uploadImage(){



    this.form = document.forms.namedItem('uploadForm');
    console.log(new FormData(this.form!))
    this.http.uploadImage(this.form!).subscribe();
  }

  fileChanged(event: Event) {




  }
}
