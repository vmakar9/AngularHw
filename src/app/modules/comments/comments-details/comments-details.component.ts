import { Component, OnInit } from '@angular/core';
import {CommentsService} from "../services/comments.service";
import {ActivatedRoute} from "@angular/router";
import IComments from "../interface/comments.interface";

@Component({
  selector: 'app-comments-details',
  templateUrl: './comments-details.component.html',
  styleUrls: ['./comments-details.component.css']
})
export class CommentsDetailsComponent implements OnInit {

  comment:IComments

  constructor(private commentsService:CommentsService,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id})=>{
      this.commentsService.getById(id).subscribe(value => this.comment = value)
    })
  }

}
