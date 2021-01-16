import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { CustomersComponent } from './customers/customers.component';
import { EmployeeActivateGuard } from './guards/employeeCanActivate.service';
import { EmployeesComponent } from './employees/employees.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { UniversityComponent } from './university/university.component';
import { MenGuard } from './guards/menCanActivate.service';




const routes: Routes = [
 {path:"",redirectTo:"/login",pathMatch:"full"},
 {path:"men",loadChildren:()=> import('./men/men.module').then(m =>m.MenModule),canActivate:[MenGuard]},
  
    
    {path:"women",loadChildren:()=> import('./women/women.module').then(m =>m.WomenModule)},
   
  
   
    {path:"kids",loadChildren:()=> import('./kids/kids.module').then(m=>m.KidsModule)},

    
  
  { path: "aboutus", component: AboutusComponent },
  { path: "home", component: HomeComponent },
  {path: "employees",component:EmployeesComponent, canActivate:[EmployeeActivateGuard]},
  {path: "customers",component:CustomersComponent},
  {path:"university",component:UniversityComponent},
  {path:"login",component:LoginComponent},
  {path:"signup",component:SignupComponent}
  
  
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
