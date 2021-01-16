import { Component, OnInit } from '@angular/core';
import { UniversityService } from 'src/app/university.service';

@Component({
  selector: 'app-bags-filter',
  templateUrl: './bags-filter.component.html',
  styleUrls: ['./bags-filter.component.css']
})
export class BagsFilterComponent implements OnInit {

  filteredBags: any;

  constructor(private universityService: UniversityService) { }

  ngOnInit(): void {
  }

  filterBags(){
    this.universityService.getBags()
  }

}
