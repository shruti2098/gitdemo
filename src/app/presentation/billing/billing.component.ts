import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.scss']
})
export class BillingComponent implements OnInit {
  @Input() billingform!:FormGroup
  constructor() { 
  //   this.billingform=this.fb.group({
  //     add1:['',Validators.required],
  //     add2:['',[Validators.required]],
  //     city:['',[Validators.required]],
  //     state:['',[Validators.required]],
  //     country:['',[Validators.required]]

  //   })
   }

  ngOnInit(): void {
  }
  
  // get f(){

  //   return this.billingform.controls;

  // }
  get add1(){
     // return this.billingform.get('add1');
      const grp=this.billingform.get('billingAddress') as FormGroup;
      return grp.get('add1');
    }
    get add2(){
      const grp=this.billingform.get('billingAddress') as FormGroup;
      return grp.get('add2');
    }
    get city(){
      const grp=this.billingform.get('billingAddress') as FormGroup;
      return grp.get('city');
    }
    get state(){
      const grp=this.billingform.get('billingAddress') as FormGroup;
      return grp.get('state');
    }
    get country(){
      const grp=this.billingform.get('billingAddress') as FormGroup;
      return grp.get('country');
    }

   onSubmit(){

  //   //console.log(this.supplier.value);
     console.log(this.billingform.value);

   }
}
