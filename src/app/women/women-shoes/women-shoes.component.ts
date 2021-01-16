import { Component, OnInit } from '@angular/core';
import { WomenShoesService } from './women-shoes.service';

@Component({
  selector: 'app-women-shoes',
  templateUrl: './women-shoes.component.html',
  styleUrls: ['./women-shoes.component.css']
})
export class WOmenSHoesComponent implements OnInit {

  constructor(private womenShoesService:WomenShoesService) { }

  ngOnInit(): void {
  }


  submitWomenShoes(){
    console.log("test")
    

  }

}
