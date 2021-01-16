import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class KidsService {

  constructor(private http:HttpClient) { };

  getCustomer(){
    let response=this.http.get("http://dummy.restapiexample.com/api/v1/employees");
    return response;
  }

  getByCustomerDetails(){
    console.log();
  }
}
