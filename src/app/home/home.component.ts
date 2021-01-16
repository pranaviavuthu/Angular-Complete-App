import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  studentForm:FormGroup;

  constructor(private fb:FormBuilder) {
    this.createForm()
   }

  ngOnInit(): void {
  }

createForm(){
  this.studentForm=this.fb.group({
    studentId:"",
    studentFirstName:"",
    studentLastName:""
  })
};

updateForm(){
  console.log(this.studentForm);
  console.log(this.studentForm.value);
  console.log(this.studentForm.valid)

}

}
