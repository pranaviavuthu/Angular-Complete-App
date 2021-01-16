import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  data: string = "";

  constructor(private fb: FormBuilder, private loginService: LoginService, private router: Router) {
    this.createLoginForm()
    const navigation = this.router.getCurrentNavigation();
    if(navigation.extras.state) {
       const state = navigation.extras?.state as {data: string};
    this.data = state.data;
    }
   
  }

  loginForm: FormGroup

  ngOnInit(): void {

  }

  createLoginForm() {
    this.loginForm = this.fb.group({

      userName: "",
      password: "",


    });




  };

  submitLoginInfo() {
    // console.log(this.loginForm)
    // console.log(this.loginForm.value)
    
    this.loginService.submitLoginDetails(this.loginForm.value)



  };



}
