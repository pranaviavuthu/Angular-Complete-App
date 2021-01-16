import { Component, OnInit } from '@angular/core';
import { TestComponentRenderer } from '@angular/core/testing';
import { Router } from '@angular/router';

@Component({
  selector: 'app-women-header',
  templateUrl: './women-header.component.html',
  styleUrls: ['./women-header.component.css']
})
export class WomenHeaderComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  navigateToWomenClothing(){
    this.router.navigate(["women/women-clothing"])
  };
  navigateToWomenBags(){
    this.router.navigate(["women/women-bags"])
  };

  navigateToWomenDresses(){
    this.router.navigate(["women/women-dresses"])
  };

  navigateToWomenAccessories(){
    this.router.navigate(["women/women-accessories"])
  };

  navigateToWomenShoes(){
    this.router.navigate(["women/women-shoes"])
  };

  testMe(t1:number,test:string){

  };

  // intercept(request: HttpRequest<any>, next: HttpHandler){
  //   console.log(request.url);
  //   return next.handle(request);
  // }

}
