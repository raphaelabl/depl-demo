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

@NgModule({
  declarations: [
    AppComponent,
    UserlistComponent,
    AddUserComponent,
    UserViewComponent,
    ImagesComponent,
    ImageItemComponent
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
