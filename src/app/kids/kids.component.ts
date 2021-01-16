import { Component, OnInit } from '@angular/core';
import { KidsService } from './kids.service';

@Component({
  selector: 'app-kids',
  templateUrl: './kids.component.html',
  styleUrls: ['./kids.component.css']
})
export class KidsComponent implements OnInit {



  constructor(private kidsService:KidsService) { }

  ngOnInit(): void {
  }

  selectors:Array<string>=["clothing","toys","accessories"];  //Array of string//

  customers:Array<any>=[
    {id: 1,categories:"toys",contact: "1234567890", email:"abc@gmail.com"},
    {id:2,categories:"clothing",contact:"0987654321",email: "xyz@gmail.com"},
    {id:3,categories:"accessories",contact:"9876543210", email:"thy@gmail.com"}
];

employees: any="This is xxx";
employeIds : Array<number> = [1,2,3,4,5,6,7,8];
employeeData = [{id:"123",name:"abc",email:"abc@xxx.com"}];





getCustomerDetails(){
  this.kidsService.getCustomer().subscribe(resp =>{
    console.log(resp);
  
  })
};

getByCustomerDetails(){
  console.log(this.selectors);
  this.kidsService.getCustomer()
};


}
