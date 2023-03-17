import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import {HttpService} from "./service/http.service";
import {HttpClientModule} from "@angular/common/http";
import { UserlistComponent } from './component/userlist/userlist.component';
import { AddUserComponent } from './component/add-user/add-user.component';

@NgModule({
  declarations: [
    AppComponent,
    UserlistComponent,
    AddUserComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
