import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import IPost from "../interfaces/post.interface";
import {urls} from "../../../urls/urls";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient:HttpClient) { }

  getAll():Observable<IPost[]>{
    return this.httpClient.get<IPost[]>(urls.posts)
  }

  getById(id:number):Observable<IPost>{
    return this.httpClient.get<IPost>(`${urls.posts}/${id}`)
  }
}
