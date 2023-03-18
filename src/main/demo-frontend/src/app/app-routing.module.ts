import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserViewComponent} from "./component/user-view/user-view.component";
import {UserlistComponent} from "./component/userlist/userlist.component";
import {ImagesComponent} from "./component/images/images.component";

const routes: Routes = [
  {path: 'user', component: UserlistComponent},
  {path: 'pictures', component: ImagesComponent},
  {path: '**', component: UserViewComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
