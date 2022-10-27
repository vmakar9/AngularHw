import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IUser} from "../../../interfaces/user.interface";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input()
  user:IUser

  @Output()
  userlift = new EventEmitter<IUser>()

  constructor(private router:Router,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {

  }

  lift():void {
    this.userlift.emit(this.user)
  }

  getDetails():void {
   this.router.navigate([this.user.id],{relativeTo:this.activatedRoute,state:{user:this.user}})
    console.log(this.user);
  }
}
