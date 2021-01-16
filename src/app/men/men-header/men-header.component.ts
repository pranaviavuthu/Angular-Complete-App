import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-men-header',
  templateUrl: './men-header.component.html',
  styleUrls: ['./men-header.component.css']
})
export class MenHeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToAccessories(){
    this.router.navigate(["men/accessories"])
  };

  navigateToClothing(){
    this.router.navigate(["men/clothing"])
  };

  navigateToShoes(){
    this.router.navigate(["men/shoes"])
  }

}
