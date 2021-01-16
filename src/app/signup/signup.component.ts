import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SignupService } from '../signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  
  constructor(private fb:FormBuilder, private signupService:SignupService) {
    this.createSignUpForm()
   }
   //saving the formName into the formgroup
  signUpForm: FormGroup

  ngOnInit(): void {
  }

  createSignUpForm(){
    this.signUpForm = this.fb.group({

     userName:"",
      password: "",
      role:""


    });
  };
  //this function is called when button is clicked in the browser. 
  //actions to be called in this function
  submitSignUpDetails(){
    console.log(this.signUpForm);
    console.log(this.signUpForm.value);
    let signUpInfo = this.signUpForm.value;
    this.signupService.signUpNewUser(signUpInfo);    //calling this function to send request to service with argument in the function if needed

    

  }

}
