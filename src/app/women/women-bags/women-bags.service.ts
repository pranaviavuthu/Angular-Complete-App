import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { WomenDetailsService } from './women-details.service';

@Injectable({
  providedIn: 'root'
})
export class WomenBagsService {

  constructor(private http:HttpClient, private womenDetailsService:WomenDetailsService) { }


  signInDetails(signInInfo){
    this.http.post("http://localhost:3010/api/login",signInInfo).subscribe(response=>{
      this.womenDetailsService.getSignInData(response);
      
    }

    )

    

    

    
    // console.log(signInInfo)
  }


}
