import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResultsService {

  constructor() { }

    //used to store data 
   bagsList = new BehaviorSubject<any>('Pranavi');
    //
   results = this.bagsList.asObservable();

  storeResults(results){
    this.bagsList.next(results);
  }
}
