import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.scss']
})
export class SupplierComponent implements OnInit {
  //router: any;
  //router: any;
  supplier: FormGroup;
  billingform:FormGroup
  listdata:any;
  response:any;
  
  constructor(private fb:FormBuilder,private service:AuthService) {
    this.listdata=[];
    // this.supplier=this.fb.group({
    //   Id:[,Validators.required],
    //   firstname:['',Validators.required],
    //   lastname:['',Validators.required],
    //   price:['',Validators.required],
    //   productdt:['',Validators.required],
    // })
    this.billingform=this.fb.group({
      add1:['',[Validators.required]],
      add2:['',[Validators.required]],
      city:['',[Validators.required]],
      state:['',[Validators.required]],
      country:['',[Validators.required]]

    })
    this.supplier=this.fb.group({
      Id:['',[Validators.required,Validators.minLength(3)]],
      firstname:['',Validators.required],
      lastname:['',Validators.required],
      price:['',Validators.required],
      productdt:['',Validators.required],
      billingAddress:this.billingform

    })
   }
   public addItem(): void{
     this.listdata.push(this.supplier.value)
     this.supplier.reset();
   }
   reset(){
     this.supplier.reset();
   }
  //  onSubmit(){
  //    console.log(this.supplier.value)
  //  }
   
  //  removeItem(element){
  //    this.listdata.forEach(value,index) => {
  //      if(value==element)
  //      this.listdata.splice(index,1)
     
       
  //    });
  //  }



//   newChange(): void {
//     this.router.navigateByUrl('billing');
// }
  ngOnInit(): void {
    
  }
  get f(){

    return this.supplier.controls;
    //return this.billingform.controls;

  }
  

  onSubmit(){

    console.log(this.supplier.value);
    this.service.getPost(this.supplier.value).subscribe(s=>{
      //console.log(s)
      console.log('in')
    this.response=s;
    console.log(s);
    });
    //console.log(this.billingform.value);

  }
  // get Id(){
  //   return this.supplier.get('Id');
  // }
  // get firstname(){
  //   return this.supplier.get('firstname');
  // }
  // get lastname(){
  //   return this.supplier.get('lastname'); 
  // }
  // get price(){
  //   return this.supplier.get('price');
  // }
  // get productdt(){
  //   return this.supplier.get('productdt');
  // }
  // onSubmit(){
  //   console.log(this.supplier.value);
  // }

}
