import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ResultsService } from './bs/results.service';

@Injectable({
  providedIn: 'root'
})
export class UniversityService {

  constructor(private http: HttpClient, private resultsService: ResultsService) { };

  getStudentDetails() {
    console.log('headers added');
    // const headerDict = {
    //   'Test-Header': 'testme',

    // }
    const customeHeders =  new HttpHeaders({Authorization: "Hello"});
    

    // console.log("This is Service function")
    let Info = this.http.get("http://dummy.restapiexample.com/api/v1/employees",
    // { headers:customeHeders }
    );
    return Info;
  };

  getBags() {

    this.http.get("http://dummy.restapiexample.com/api/v1/employees").subscribe(res => {
      console.log('I am called after getting results..');
      this.resultsService.storeResults(res);

    })

  };


  getStudentFirstName(fName: string) {
    console.log("This is Service Function II", fName);


  }
}
