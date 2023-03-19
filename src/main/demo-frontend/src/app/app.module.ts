import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import {HttpService} from "./service/http.service";
import {HttpClientModule} from "@angular/common/http";
import { UserlistComponent } from './component/userlist/userlist.component';
import { AddUserComponent } from './component/add-user/add-user.component';
import { UserViewComponent } from './component/user-view/user-view.component';
import { ImagesComponent } from './component/images/images.component';
import { ImageItemComponent } from './component/image-item/image-item.component';
import { UploadComponent } from './component/upload/upload.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  declarations: [
    AppComponent,
    UserlistComponent,
    AddUserComponent,
    UserViewComponent,
    ImagesComponent,
    ImageItemComponent,
    UploadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
