import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ICar} from "../interfaces/car.interface";
import {urls} from "../configs/urls";

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private httpClient:HttpClient) { }

  getAll():Observable<ICar[]>{
    return this.httpClient.get<ICar[]>(urls.cars)
  }
}
