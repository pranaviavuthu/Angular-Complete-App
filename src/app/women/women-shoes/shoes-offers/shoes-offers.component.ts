import { Component, OnInit } from '@angular/core';
import { WomenShoesService } from '../women-shoes.service';

@Component({
  selector: 'app-shoes-offers',
  templateUrl: './shoes-offers.component.html',
  styleUrls: ['./shoes-offers.component.css']
})
export class ShoesOffersComponent implements OnInit {

  constructor(private womenShoesService:WomenShoesService) { }

  ngOnInit(): void {
  }


  filterShoes(){
    this.womenShoesService.getWomenShoesDetails()
  }
}
