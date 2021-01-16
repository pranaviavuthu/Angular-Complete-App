import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clothing',
  templateUrl: './clothing.component.html',
  styleUrls: ['./clothing.component.css']
})
export class ClothingComponent implements OnInit {
  firstName: string="khaja";
  lastName:string="Moizuddin";
  number1:number=100;
  number2:number=200;
  totalAmount:number=this.number1 + this.number2;
  fullName:string=this.firstName + this.lastName;
  fullNameVal:string;
  totalVal:number;
  csharpCornerURL:string="https://www.c-sharpcorner.com/members/khaja-moiz";
  myImagePath:string="assets/Images/mvp1.jpg";
  heightImg:number=50;
  widthImg:number=50;
  onButtonClick:string;
  onDoubleCLick:string;
  
  getTotalAmount1(){
    return this.number1 + this.number2;

  };
  
  getTotalAmount2(){
    return this.totalVal=this.number1+this.number2;
  };
  
  getTotalAmount3(){
    return this.totalVal=this.totalAmount;
  };

  getFullName1(){
    return this.firstName+this.lastName
  };

  getFullName2(){
    return this.fullNameVal=this.firstName+this.lastName
  };

  getFullName3(){
    return this.fullNameVal=this.fullName
  };

  onBtnClick(){
    return this.onButtonClick="Welcome"+ this.firstName
  };

  onDblClick(){
    return this.onDoubleCLick="Welcome"+ this.lastName

  };
  




  constructor() { }

  ngOnInit(): void {
  }

}
