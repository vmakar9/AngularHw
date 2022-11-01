import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UsersComponent} from "./components/users/users.component";
import {UserDetailsComponent} from "./components/user-details/user-details.component";
import {UserResolver} from "./services/resolver/user.resolver";

const routes: Routes = [
  {path:'',component:UsersComponent,resolve:{users:UserResolver},children:[
      {path:':id',component:UserDetailsComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
