import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WomenDetailsService {

  constructor() { }

  signInDetails = new BehaviorSubject<any>(null);

  signInCast = this.signInDetails.asObservable();


  getSignInData(womenClothing){
    this.signInDetails.next(womenClothing)
  }

}
