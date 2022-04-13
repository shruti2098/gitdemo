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
  dtOptions: DataTables.Settings = {};
  //$scope:any
  //list!:any[];
   elements: any = [];
   Data:any=[];
 

  constructor(private http:HttpClient,private service:AuthService) { }
  // dtoptions:DataTables.Settings={};
  ngOnInit(): void {
    this.service.getData().subscribe(s=>{
      console.log(s);
      this.elements=s;
      console.log(this.elements)
    });

    // this.dtoptions={
    //   
    // }
    this.dtOptions = {
      pagingType:'full_numbers',
      pageLength:5,
      lengthMenu:[5, 15, 25],
      processing:true
    };
    
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
  
//   $scope.searchTable = function ()
// {
//     console.log($scope.tableInstance);
//     var query = $scope.searchText;
//     console.log(query);
//     var result = $scope.tableInstance.DataTable.search(query, false, false, false);
//     console.log(result);
//     $scope.tableInstance.DataTable.search(query, false, false, true).draw();
//};

}
