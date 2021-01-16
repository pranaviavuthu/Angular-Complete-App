import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WomenDetailsService {

  constructor(http: HttpClient) { }

  shoeList= new BehaviorSubject<any>('test data');

  shoeSales=this.shoeList.asObservable();

  storeShoesData(response){
    this.shoeList.next(response)

  }
}
