import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Car} from "../model/car.model";
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getAllCars(): Observable<Car[]>{
    console.log("Getting from to: " + environment.BACKEND_URL)
    return this.http.get<Car[]>(environment.BACKEND_URL + "vehicle");
  }

  addCar(inputCar: Car) {
    console.log("Sending to: " + environment.BACKEND_URL)
    return this.http.post<Car[]>(environment.BACKEND_URL + "vehicle", inputCar);
  }
}
