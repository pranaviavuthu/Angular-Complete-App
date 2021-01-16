import { Component, OnInit } from '@angular/core';
import { ResultsService } from '../bs/results.service';

@Component({
  selector: 'app-men',
  templateUrl: './men.component.html',
  styleUrls: ['./men.component.css']
})
export class MenComponent implements OnInit {

  constructor(private resultsService:ResultsService) { }

  ngOnInit(): void {
    this.resultsService.results.subscribe(res=>{
      console.log(res)
    })
  }

}
