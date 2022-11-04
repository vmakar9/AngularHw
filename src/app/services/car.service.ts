import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ICar} from "../interfaces/car.interface";
import {urls} from "../configs/urls";
import {IPaginatedata} from "../interfaces/paginated.interface";

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private httpClient:HttpClient) { }

  getAll():Observable<IPaginatedata<ICar>>{
    return this.httpClient.get<IPaginatedata<ICar>>(urls.cars)
  }
}
