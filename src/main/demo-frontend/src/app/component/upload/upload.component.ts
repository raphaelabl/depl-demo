import { Component } from '@angular/core';
import {HttpService} from "../../service/http.service";

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent {


  form!: HTMLFormElement|undefined|null;

  file: File | null = null;


  constructor(private http: HttpService) {}

  uploadImage(){

    const formData: FormData = new FormData();
    if(this.file){
      formData.append('file', this.file!);
      formData.append('fileName', this.file!.name);

      if(formData) {
        console.log(formData)
        this.http.uploadImage(formData).subscribe();
      }
    }

  }

  fileChanged(event: Event) {
    if(null != (<HTMLInputElement>event.target).files && (<HTMLInputElement>event.target).files!.length != 0){
      this.file = (<HTMLInputElement>event.target).files![0]
      console.log(this.file)
    }
  }
}
