import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserNameService } from '../user-name.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  userName: string ="";
  showHeader:boolean=false;

  constructor(private router:Router, private usernameService: UserNameService) { }

  ngOnInit(): void {
    this.usernameService.userNameCast.subscribe(res => {
      // debugger;
      if(res) {
        this.userName = res.data.user.userName;
        this.showHeader=true;
      }
    })
  }

  navigateToMen(){
    this.router.navigate(["men"])
  };
  navigateToWomen(){
    this.router.navigate(["women"])
  };

  navigateToKids(){
    this.router.navigate(["kids"])
  };

  navigateToAboutUs(){
    this.router.navigate(["aboutus"])
  };

  navigateToEmployees(){
    this.router.navigate(["employees"])
  };

  navigateToCustomers(){
    this.router.navigate(["customers"])
  };

  navigateToUniversity(){
    this.router.navigate(["university"])
  };

  navigateToSignUpForm(){
    this.router.navigate(["signup"])
  }


  

}
