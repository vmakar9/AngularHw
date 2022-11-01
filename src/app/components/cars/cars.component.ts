import { Component, OnInit } from '@angular/core';
import ICar from "../../interface/car.interface";
import {CarService} from "../../services/car.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  cars:ICar[]
  form:FormGroup;
  updateCar:ICar|null
  constructor(private carService:CarService) {
    this._initForm()
  }

  ngOnInit(): void {
    this.carService.getAll().subscribe(value => this.cars = value)
  }

  _initForm():void{
    this.form = new FormGroup({
      model:new FormControl(null,[Validators.required]),
      price:new FormControl(null,[Validators.min(0),Validators.max(1000000)]),
      year:new FormControl(null,[Validators.min(1990),Validators.max(new Date().getFullYear())])
    })
  }

  save():void {
    if(!this.updateCar){
      this.carService.create(this.form.value).subscribe(value => {
        this.cars.push(value)
    })
   }else {
      this.carService.updateById(this.updateCar.id , this.form.value).subscribe(value => {
        const car= this.cars.find(car=>car.id === this.updateCar?.id)
        Object.assign(car!,value)
      })
    }
    this.form.reset()
  }

  lift(car: ICar) {
   this.updateCar = car
    this.form.setValue({
      model:car.model,
      price:car.price,
      year:car.price
    })
  }

  deleteById(id: number) {
    this.carService.deleteById(id).subscribe(()=>{
      const index = this.cars.findIndex(car =>car.id === id)
      this.cars.splice(index,1)
    })
  }
}
