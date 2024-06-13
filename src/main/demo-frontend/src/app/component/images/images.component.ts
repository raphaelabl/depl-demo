import {Component, OnInit} from '@angular/core';
import {Image} from "../../model/image.model";
import {HttpService} from "../../service/http.service";

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit{

  images: Image[][] = [[]];


  constructor(private http: HttpService) {

  }

  ngOnInit(): void {

    this.http.getImages().subscribe({
      next:value => {
        for (let i = 0; i < Math.ceil(value.length/4); i++) {
          let tmp: Image[] = [];
          for(let j = 0; (j < 4) && ((i*4)+j<value.length); j++){
            tmp[j] = value[(i*4)+j];
          }
          this.images[i] = tmp;
        }

        console.log(this.images)

      },
      error:err => {
        console.log(err)
      }
    })

  }



}
