import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserNameService } from './user-name.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  

  constructor(private http:HttpClient, private router: Router, private userNameService: UserNameService) { 
   
  }

  submitLoginDetails(loginDetails: any){
    this.http.post("http://localhost:3010/api/login", loginDetails).subscribe(response=>{
      console.log(response);
      this.userNameService.setLoginResponse(response); 
      //this.loginService.submitLoginDetails(this.loginForm.value)
    this.router.navigate(['/home']);
    }, err => {
      console.log(err);
    })
    console.log(loginDetails);
  }
}


 