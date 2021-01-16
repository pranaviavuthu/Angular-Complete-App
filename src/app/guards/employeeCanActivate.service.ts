import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, NavigationExtras, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { promise } from 'protractor';
import { Observable } from 'rxjs';
import { UserNameService } from '../user-name.service';

@Injectable({providedIn: 'root'})
export class EmployeeActivateGuard implements CanActivate {

    allow: any;
    constructor( private userNameService: UserNameService, private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):   boolean | UrlTree{
        console.log("Route guard called");
        this.userNameService.userNameCast.subscribe(loggedInUserInfo => {
            console.log(loggedInUserInfo);
            if(loggedInUserInfo.data.user.role === 'manager') {
                 this.allow = true;
            } else {
                const navigationExtras: NavigationExtras = {state: {data: 'Please login in proper credentials'}};
                this.allow = this.router.navigate(['/login'], navigationExtras);
                 // this.allow = this.router.navigate(['/login']);
                //this.allow = false;
            }
        })
        return this.allow;
    }
}