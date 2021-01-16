import { Component, OnDestroy,OnInit } from '@angular/core';
import { EmployeesService } from '../employees.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit,OnDestroy {

  employeeName: string = "Abc";
  employeeId: number = 100;
  employeeStatus: boolean = false;
  employeeContact: any;

employeeids = [101, 102, 109, 112, 123];
//employeeids[0]-101,    variable[0-(n)number] - this is how we extract values from arrays
// employeeids[4]-123

 //variableName = [{}, {}];
  customers = [
    {
      customerId: 1, customerName: "abc", productId: 2, productName: "xyz", price: 100,
      shippingAddress: { adddress1: "lee Hwy", city: "Houston", state: "TX", zip: "229881" },
      billingAddress: { adddress1: "lee Hwy", city: "Houston", state: "TX", zip: "229881" }
    },
    {
      customerId: 2, customerName: "test", productId: 3, productName: "test", price: 200,
      shippingAddress: { adddress1: "lee Hwy", city: "Houston", state: "TX", zip: "229881" },
      billingAddress: { adddress1: "lee Hwy", city: "Houston", state: "TX", zip: "229881" }
    }
  ];

  //customers[0].customerId
  //customers[1].price
  //customers[0].billingAddress.state
  //customers[1].shippingAddress.zipcode

  students =[
    {
      name: "xyz",id:1,email:"xyz@gmail.com",
      address:{street:"123 madison ave",city:"spring",state:"TX",zip:"22314"},
      completedCourses:["Computers","IT", "ECE"],
      pendingCourses:["AI","Mech"]
    },
    {
      name: "test",id:2,email:"abc@gmail.com",
      address:{street:"123 madison ave",city:"spring",state:"TX",zip:"22314"},
      completedCourses:["Computers"],
      pendingCourses:["Computers","IT"]
    }
  ];

  //students[0].completedCourses[1];
  //students[1].address.zip;
  //students[1].pendingCourses[0];

  employeeNames:Array<string>=["abc","xyz","yhu", "hai", "hello"];


  testId(){
    console.log("Test Function");
    console.log(this.employeeNames);

    // s = 3
    // for (let s = 0; s < 100; s++) {
    //   console.log("For loop execduted");
      
    // }

    // x = 3
    for(let x =0; x<this.employeeNames.length; x++) {
      console.log(this.employeeNames[x]);
    }

    console.log(this.employeeNames.length);

    for (let index = 0; index <this.students.length; index++) {
      console.log(this.students[index].completedCourses)
      
    }

    for (let s = 0; s < this.employeeids.length; s++) {
      console.log(this.employeeids[s]);
      
    }

  };



  ngOnInit() {
    console.log("I am OnInIt from Employee component")


  };
  constructor(private employeeService:EmployeesService) {
    console.log("I am constructor from Employee component");
    console.log(this.customers);
  };

  ngOnDestroy() {
    console.log("I am onDestroy from employee component")
  }


  employeeDetails(){
    console.log("This is employee function");
    this.employeeService.getEmployeeDetails().subscribe(emp=>{
      this.employeeStatus=true;
      console.log(emp);
      this.employeeContact=emp;
    })

  };

customerData(){
  this.customers
};
        

}
