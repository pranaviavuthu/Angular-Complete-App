import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-women-dresses',
  templateUrl: './women-dresses.component.html',
  styleUrls: ['./women-dresses.component.css']
})
export class WomenDressesComponent implements OnInit {

  constructor() { 
    this.womenDresses('Hi');
    this.womenClothing([{dColor: 'Blue', size: 'M'},{dColor: 'red',size: 'L'}]);
    this.womenClothing({dColor: 'Green', size: 'L'});
    this.testFunction(1);
    this.learningFunctions(2,"test")
    
  }

  ngOnInit(): void {
  }
testFunction(n1){

};

  womenDresses(dress){    //parameter as string
    console.log(dress)

  };

  womenTops(tops:number){         //parameter as number
    console.log(tops)
  };

  womenTopsorDresses(abc:boolean){     //parameter as boolean
      console.log(abc)
  };

  womenClothing(clothingObj){    //parameter as object
      console.log(clothingObj)
  };

  womenClothingDetails(dressDetails:any={number:1,string:"abc",object:{one:"test",two:"test2"}}){    //parameter with object,string and number
    console.log(dressDetails)

  };

  


learningFunctions(n1: number, s1: string) {

}

}
