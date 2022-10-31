import {Component, Input, OnInit} from '@angular/core';
import IComments from "../interface/comments.interface";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  @Input()
  comment:IComments

  constructor(private router:Router,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
  }

  getDetails():void {
    this.router.navigate([this.comment.id],{relativeTo:this.activatedRoute})
  }
}
