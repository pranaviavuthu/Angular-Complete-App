import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-shoes',
  templateUrl: './shoes.component.html',
  styleUrls: ['./shoes.component.css']
})
export class ShoesComponent implements OnInit {

  customerForm: FormGroup;

  constructor(private fb: FormBuilder) { 
    this.createCustomerForm();
  }
  ngOnInit(): void {
  //  this.customerForm.valueChanges.subscribe(v => 
  //   console.log(v)
  //   );
  this.customerForm.get('pName').valueChanges.subscribe(productName => {
    
    if(productName !== null && productName !== undefined && productName !== "") {
      console.log("if condition");
      this.customerForm.get('pPrice').setValidators(Validators.compose([Validators.required]));
      this.customerForm.get('pPrice').updateValueAndValidity({emitEvent: false});
    } else {
      console.log("else condition");
      this.customerForm.get('pPrice').setValidators(Validators.compose([]));
      this.customerForm.get('pPrice').updateValueAndValidity({emitEvent: false});
    }
  })
  }

  

  createCustomerForm() {
    this.customerForm = this.fb.group({
      cName: [""],
      pName: [""],
      pPrice: [""]
    });
  }

  submitCustomerForm(){
    console.log(this.customerForm);
  }

}
