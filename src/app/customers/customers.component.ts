import { Component, OnInit } from '@angular/core';
import { UserNameService } from '../user-name.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  test=[101,123,345,890];
  loggedInUserName:string

  customer = [
    {
      firstName: "Ram", lastName: "xyz", id: 1, email: "ram@gmail.com",
      address: { street: "123 madison ave", state: "CA", zipCode: "92831" },
      billingAddress: { street: "123 madison ave", state: "CA", zipCode: "92831" },


    },
    {
      firstName: "Abc", lastName: "yhu", id: 2, email: "abc@gmail.com",
      address: { street: "123 leaf drv ave", state: "MD", zipCode: "20901" },
      billingAddress: { street: "123 leaf drv ave", state: "MD", zipCode: "20901" },

    }
  ];

  testEmail(){
    console.log("This is Test Function");
    console.log(this.customer);

    for (let c = 0; c < this.customer.length; c++) {
      console.log(this.customer[c].billingAddress);
      
    };


  };

  testSet(){
    console.log("This is also test function");
    console.log(this.test);

    for (let t = 0; t < this.test.length; t++) {
      console.log(this.test[3]);
      
    }
  }

  constructor(private userNameService:UserNameService) { }

  ngOnInit(): void {
    this.userNameService.userNameCast.subscribe(loginResponse=>{
      // console.log(loginResponse);
      // console.log(loginResponse.data.user.userName);
      //this.globalVariable=backenddata
      this.loggedInUserName=loginResponse.data.user.userName;
  
      
      


    })
  }

}
