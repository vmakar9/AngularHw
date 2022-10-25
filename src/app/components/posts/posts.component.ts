import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {urls} from "../../urls/urls";
import {IPost} from "../../interfaces/post.interface";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts:IPost[]

  constructor(private httpClient:HttpClient) { }

  ngOnInit(): void {
    this.getAllPosts()
  }

  getAllPosts():void{
    this.httpClient.get<IPost[]>(urls.posts).subscribe(value => this.posts = value)
  }

}
