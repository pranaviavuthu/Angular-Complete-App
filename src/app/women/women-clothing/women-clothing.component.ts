import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-women-clothing',
  templateUrl: './women-clothing.component.html',
  styleUrls: ['./women-clothing.component.css']
})
export class WomenClothingComponent implements OnInit {

  constructor() { 
    this.employeeName('Ram');
    this.empId(1);
    this.empCurrentStatus(true);
    this.empDetails('hello',[{id:1,name:'tom',status:true},{id:2,name:'ram',status:false}]);
    this.empdata({name:'Tom',id:101,data:'available'})

  }

  ngOnInit(): void {
  }


  employeeName(empName){                              //string function
    console.log(empName)

  };


  empId(empId){                                        //number function
    console.log(empId)
  };

  empCurrentStatus(empStatus){                        //boolean
    console.log(empStatus)

  };

  empDetails(emp1:string,emp2:Array<any>){                  //string and array
    console.log(emp1,emp2)

  };
  empdata(emplogin){                                           //object
    console.log(emplogin)
  }


}
