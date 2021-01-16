import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {

  aboutUs:FormGroup;

  

  constructor(private fb:FormBuilder) {
    this.createAboutForm()
   }

  ngOnInit(): void {
    this.aboutUs.valueChanges.subscribe(formValues => {
      console.log(formValues);
    });

    this.aboutUs.get('formId').valueChanges.subscribe(v => {
      console.log(v);
    })
  }

createAboutForm(){
  this.aboutUs=this.fb.group({

    formId:["",Validators.compose([Validators.required])],
    formName:["",Validators.compose([Validators.maxLength(6), this.checkIfNameHasNumber])], 
    formEmail:""

  })
}

//custom validations
checkIfNameHasNumber(formControl: FormControl) {
  let name = formControl.value;
  let res = /\d/.test(name);
  if(res == true) {
    return {hasNumber: true};
    

  } else {
    return null; 
  }

};
  updateForm(){
    console.log(this.aboutUs);
    // console.log(this.aboutUs.status);
    if (this.aboutUs.valid == true) {
      console.log("Form is valid");
    } else {
      console.log("Form is invalid")
    }

    

  }

}
