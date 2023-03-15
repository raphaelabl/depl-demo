import {Component, OnInit} from '@angular/core';
import {Car} from "../../model/car.model";
import {HttpService} from "../../service/http.service";

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.css']
})
export class MainViewComponent implements OnInit{

  cars: Car[] = [];

  inputCar: Car = {
    brand: "",
    model: ""
  }


  constructor(private httpService: HttpService) {
  }

  ngOnInit(): void {
    this.updateList();

  }

  updateList(){
    this.httpService.getAllCars().subscribe({
      next: value => {
        this.cars = value;
        console.log(value)
      },
      error: err => {
        console.log(err)
      }
    });
  }

  AddCar(){
    this.httpService.addCar(this.inputCar).subscribe({
      next: value => {this.cars = value},
      error: err => { console.log(err) }
    });
  }

}
