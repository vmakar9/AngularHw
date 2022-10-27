import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IUser} from "../../../interfaces/user.interface";
import {urls} from "../../../urls/urls";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users:IUser[]
  selectedUser:IUser
  constructor(private httpClient:HttpClient) { }

  ngOnInit(): void {
    this.getAllUsers()
  }

  getAllUsers():void{
    this.httpClient.get<IUser[]>(urls.users).subscribe(value => this.users =value)
  }

  getUser(user: IUser) {
    this.selectedUser = user;
  }
}
