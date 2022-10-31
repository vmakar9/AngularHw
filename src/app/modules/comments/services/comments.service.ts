import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import IComments from "../interface/comments.interface";
import {urls} from "../../../urls/urls";

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(private httpClient:HttpClient) { }

  getAll():Observable<IComments[]>{
    return this.httpClient.get<IComments[]>(urls.comments)
  }

  getById(id:number):Observable<IComments>{
    return this.httpClient.get<IComments>(`${urls.comments}/${id}`)
  }

}
