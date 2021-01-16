import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { LoginService } from '../login.service';
import { UserNameService } from '../user-name.service';

@Injectable({providedIn: 'root'})
export class MenGuard implements CanActivate {
    //variable:any
    menTab:any;
    //calling related service and route into the constructor
    constructor(private router: Router, private userNameService:UserNameService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)

        
     {      
         console.log("Men Guard");
         //calling the service and the file, subscribin all the data into loginuser
         this.userNameService.userNameCast.subscribe(logInUser=>{
             //calling the subsribing loginuser into the console.log
             console.log(logInUser);
             //calling if statement to check if the role is "employee" goes to the men route
             if (logInUser.data.user.role==='employee') {
                 this.menTab=true;
                 //if the role is not = "employee" then the route goes to login page
             }else{
                 this.menTab=this.router.navigate(['/login'])   
             }

         })
         
        return this.menTab;
    }
}