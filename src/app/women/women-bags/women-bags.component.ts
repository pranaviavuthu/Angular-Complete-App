import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { WomenBagsService } from './women-bags.service';

@Component({
  selector: 'app-women-bags',
  templateUrl: './women-bags.component.html',
  styleUrls: ['./women-bags.component.css']
})
export class WomenBagsComponent implements OnInit {

  constructor(private fb:FormBuilder,private womenBagsService:WomenBagsService) { 
    this.createWomenBags()
  }

  womenBags:FormGroup

  ngOnInit(): void {
  }

createWomenBags(){
this.womenBags=this.fb.group({

  userName:"",
  password:"",
  role:""

})
  
};

submitWomenBags(){
  console.log(this.womenBags);
  console.log(this.womenBags.value);
  this.womenBagsService.signInDetails(this.womenBags.value)
}



}
