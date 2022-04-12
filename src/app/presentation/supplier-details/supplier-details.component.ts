import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
// import { ListenOptions } from 'net';
import { Observable } from 'rxjs';
import { AuthService } from '../../service/auth.service';
import { Supplier } from '../../services/Model/supplier';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-supplier-details',
  templateUrl: './supplier-details.component.html',
  styleUrls: ['./supplier-details.component.scss']
})
export class SupplierDetailsComponent implements OnInit {
  //list!:any[];
   elements: any = [];
   Data:any=[];
 

  constructor(private http:HttpClient,private service:AuthService) { }

  ngOnInit(): void {
    this.service.getData().subscribe(s=>{
      console.log(s);
      this.elements=s;
      console.log(this.elements)
    });
    
  }
  delete(supplierId:number){
    this.service.DeleteSupplier(supplierId).subscribe(res=>
      {
        console.log(res);
        alert(supplierId)
        this.ngOnInit();
      })
    //console.log(this.Data.value);
  }
}
