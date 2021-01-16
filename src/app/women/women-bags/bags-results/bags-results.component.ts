import { Component, OnInit } from '@angular/core';
import { ResultsService } from 'src/app/bs/results.service';

@Component({
  selector: 'app-bags-results',
  templateUrl: './bags-results.component.html',
  styleUrls: ['./bags-results.component.css']
})
export class BagsResultsComponent implements OnInit {

  constructor(private resultService:ResultsService) { }

  ngOnInit(): void {
    this.resultService.results.subscribe(res=>{
      console.log(res)
    })

    
  }

}
