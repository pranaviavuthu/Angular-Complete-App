import { Component, OnInit } from '@angular/core';
import { WomenDetailsService } from '../women-details.service';

@Component({
  selector: 'app-shoes-deals',
  templateUrl: './shoes-deals.component.html',
  styleUrls: ['./shoes-deals.component.css']
})
export class ShoesDealsComponent implements OnInit {

  constructor(private WomenDetailsService:WomenDetailsService) { }

  ngOnInit(): void {
    this.WomenDetailsService.shoeList.subscribe(response=>{
      console.log(response)
    })
  }


  
}
