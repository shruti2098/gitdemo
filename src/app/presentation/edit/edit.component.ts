import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';
import { Supplier } from '../../services/Model/supplier';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  elements: any = [];
  supplier:FormGroup
  supplierId!:number
  // list={}
  Data={}
  constructor(private service:AuthService,private fb:FormBuilder,private router:Router,private route:ActivatedRoute) { 
    this.supplier=this.fb.group({
      supplierId:[''],
      name:['']
    });
  }
  

  ngOnInit(): void {
    // this.service.getData().subscribe(s=>{
    //   console.log(s);
    //   this.elements=s;
    //   console.log(this.elements)
    // });
    this.supplierId=Number(this.route.snapshot.paramMap.get('supplierId'))
    console.log(this.supplierId);
    this.service.getDataById(this.supplierId).subscribe(a=>{
      console.log(a);
      this.Data=a;
      this.supplier.patchValue(this.Data);
    })
  }
  Edit(){
    console.log(this.supplier.value);
    this.service.UpdateSupplier(this.supplier.value).subscribe(res => {
      console.log(res);
      this.router.navigateByUrl('home')
    })
  }
  get f() {
    return this.supplier.controls;
  }
}
