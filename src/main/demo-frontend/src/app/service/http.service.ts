import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Car} from "../model/car.model";

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  BASE_URL = 'http://localhost:8080/';

  constructor(private http: HttpClient) { }

  getAllCars(): Observable<Car[]>{
    return this.http.get<Car[]>(this.BASE_URL + "vehicle");
  }

  addCar(inputCar: Car) {
    return this.http.post<Car[]>(this.BASE_URL + "vehicle", inputCar);
  }
}
