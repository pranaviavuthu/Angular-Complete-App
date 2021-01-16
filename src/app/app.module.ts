import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { EmployeesComponent } from './employees/employees.component';
import { CustomersComponent } from './customers/customers.component';
import { UniversityComponent } from './university/university.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FirstInterceptor } from './first-interceptor';
import { SecondInterceptor } from './second-Interceptor';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
   AboutusComponent,
    HomeComponent,
    EmployeesComponent,
    CustomersComponent,
    UniversityComponent,
    LoginComponent,
    SignupComponent,
    
   
   

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass:SecondInterceptor,
      multi:true
    },
    {
      provide:HTTP_INTERCEPTORS,
      useClass:FirstInterceptor,
      multi:true
    },
    


  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
