import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {IUser} from "../../../interfaces/user.interface";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  user:IUser
  constructor(private router:Router, private activatedRoute:ActivatedRoute) {
    this.activatedRoute.params.subscribe(()=>{
      this.user= this.router.getCurrentNavigation()?.extras.state?.['user']
      console.log(this.user);
    })

  }

  ngOnInit(): void {

  }

}
