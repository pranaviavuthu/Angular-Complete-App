import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-accessories',
  templateUrl: './accessories.component.html',
  styleUrls: ['./accessories.component.css']
})
export class AccessoriesComponent implements OnInit {

  signUpForm:FormGroup;

  constructor(private fb:FormBuilder) {
    this.signForm()
   }

  ngOnInit(): void {
  }

  signForm(){
    this.signUpForm=this.fb.group({

     formName: new FormControl("", Validators.compose([Validators.required,Validators.minLength(3),Validators.maxLength(20),this.checkIfNameHasSpecialCharacter])),
    formEmail : new FormControl("",Validators.compose([Validators.required,Validators.email])),
    formpassword: new FormControl("",Validators.compose([Validators.required,Validators.minLength(6)])),
    

    })
  };

  checkIfNameHasSpecialCharacter(formControl:FormControl){
    let formName=formControl.value;
    let res = !/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g.test(formName);

    if (res==true) {
      return {charData:true}
      
    }else {
      return null;
    }
  };



  updateSignForm(){
    console.log(this.signUpForm);
    if (this.signUpForm.valid) {
      console.log("Form is Valid");

      
    }else{
      console.log("Form is Invalid")
    }
  };






    
  

}
