import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { WomenDetailsService } from './women-details.service';

@Injectable({
  providedIn: 'root'
})
export class WomenShoesService {

  constructor(private http:HttpClient ,private womenDetailsService:WomenDetailsService) { }

  getWomenShoesDetails(){
    this.http.get("http://dummy.restapiexample.com/api/v1/employees").subscribe(response=>{
      this.womenDetailsService.storeShoesData(response)

    })
  }
}


