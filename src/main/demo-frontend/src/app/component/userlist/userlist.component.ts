import {Component, OnInit} from '@angular/core';
import {User} from "../../model/user.model";
import {HttpService} from "../../service/http.service";
import {Image} from "../../model/image.model";

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit{

  users: User[] = [];


  constructor(private http: HttpService) {
  }

  ngOnInit(): void {
    this.http.getUsers().subscribe({
      next: data =>{
        this.users = data;
      },
      error: err => {
        console.log(err);
      }
    })
  }

}
