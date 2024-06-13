import { Component } from '@angular/core';
import {User} from "../../model/user.model";
import {HttpService} from "../../service/http.service";

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {

  inputUser: User = {
    firstName: "",
    lastName: "",
    nickName:"",
    images: []
  };

  constructor(private http: HttpService) {

  }

  insert(){
    this.http.postUser(this.inputUser).subscribe();
    this.inputUser = {
      firstName: "",
      lastName: "",
      nickName:"",
      images: []
    }
  }

}
