import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {IComments} from "../../../interfaces/comments.interface";

@Component({
  selector: 'app-comment-details',
  templateUrl: './comment-details.component.html',
  styleUrls: ['./comment-details.component.css']
})
export class CommentDetailsComponent implements OnInit {

  comment:IComments
  constructor(private router:Router,private activatedRoute:ActivatedRoute) {
    this.activatedRoute.params.subscribe(()=>{
      this.comment = this.router.getCurrentNavigation()?.extras.state?.['comment']
    })
  }

  ngOnInit(): void {

  }

}
