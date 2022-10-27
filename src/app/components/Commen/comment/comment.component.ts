import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IComments} from "../../../interfaces/comments.interface";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  @Input()
  comment:IComments

  @Output()
  liftcomment = new EventEmitter<IComments>()
  constructor(private router:Router,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
  }

  lift():void {
    this.liftcomment.emit(this.comment)
  }

  getDetails() {
    this.router.navigate([this.comment.id],{relativeTo:this.activatedRoute,state:{comment:this.comment}})
    console.log(this.comment);
  }
}
