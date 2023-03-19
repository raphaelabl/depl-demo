import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import { environment } from 'src/environments/environment.development';
import {User} from "../model/user.model";
import {Image} from "../model/image.model";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]>{
    console.log("Getting from to: " + environment.BACKEND_URL)
    return this.http.get<User[]>(environment.BACKEND_URL + "user");
  }

  postUser(user: User): Observable<User[]>{
    return this.http.post<User[]>(environment.BACKEND_URL + "user", user);
  }


  getImages(): Observable<Image[]>{
    return this.http.get<Image[]>(environment.BACKEND_URL + "image")
  }

  uploadImage(form: HTMLFormElement) {
    return this.http.post(environment.BACKEND_URL + 'image/upload', new FormData(form));
  }
}
