import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserNameService {

  constructor() { }
  //calling the variable with behaviorsubject to store the data 
  userName = new BehaviorSubject<any>(null);
  
  userNameCast = this.userName.asObservable();

  setLoginResponse(loginResponse: any) {
    this.userName.next(loginResponse);
    //saving response in behaviorSubject
  }
}
