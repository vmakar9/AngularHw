import { Component, OnInit } from '@angular/core';
import {IComments} from "../../../interfaces/comments.interface";
import {HttpClient} from "@angular/common/http";
import {urls} from "../../../urls/urls";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  comments:IComments[]
  selectedcomment:IComments
  constructor(private httpClient:HttpClient) { }

  ngOnInit(): void {
    this.getAllComments()
  }

  getAllComments():void{
    this.httpClient.get<IComments[]>(urls.comments).subscribe(value => this.comments=value)
  }

  getComment(comment: IComments) {
    this.selectedcomment = comment
  }
}
