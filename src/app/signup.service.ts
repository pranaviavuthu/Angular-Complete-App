import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private http:HttpClient) { }

  //put-update  data
  //post-create data
  //CRUD- Create(post) Retrive(get) Update(put) Delete(delete) 


  signUpNewUser(signUpInfo){      // calling the function with data,argument needed. 
    console.log("test function");
    //console log to check the data saved in the service call 
    console.log(signUpInfo);       
    //comments
    //creating "this" data into the url and sending it to the backend with argument if needed, once we get the response from the data we are subscribing that data into the "response"
    this.http.post("http://localhost:3010/api/signup",signUpInfo)
    //subscribing data into the "response"
    .subscribe(response => 
      {
    //console log to check the data is valid in "response"
      console.log(response);
    })

    
  }

  

}
