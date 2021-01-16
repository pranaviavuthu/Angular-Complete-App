import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-kids-header',
  templateUrl: './kids-header.component.html',
  styleUrls: ['./kids-header.component.css']
})
export class KidsHeaderComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {


  }


  navigateToKidsAccessories(){
    this.router.navigate(["kids/kids-accessories"])
  };
  navigateToKidsToys(){
    this.router.navigate(["kids/kids-toys"])
  };
  navigateToKidsClothing(){
    this.router.navigate(["kids/kids-clothing"])
  }

  




}
