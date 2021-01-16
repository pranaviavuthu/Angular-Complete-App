import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor(private http:HttpClient) { };

  getEmployeeDetails(){
    console.log("This is university function from service");
    let response=this.http.get("http://dummy.restapiexample.com/api/v1/employees");
    return response
  }
}
