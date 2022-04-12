import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { Data } from '../Model/data';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiurl='https://localhost:44325/api/Authenticate/login'
  constructor(private http: HttpClient ,private router:Router) { }
  
  proceedLogin(usercred:Data):Observable<Data>{
    return this.http.post<Data>(this.apiurl,usercred)
  }
  getPost(Model:Data): Observable<Data[]> {
    return this.http.post<Data[]>('https://localhost:44325/api/Supplier/AddSupplier',Model)
  }
  getData(): Observable<Data[]> {
    return this.http.get<Data[]>('https://localhost:44325/api/Supplier/GetSupplier')
  }
  getDataById(supplierId:number):Observable<Data[]>{
    let params=new HttpParams();
    params=params.append('supplierId',supplierId);
    return this.http.get<Data[]>('https://localhost:44325/api/Supplier/GetSupplierById',{params:params})
  }
  UpdateSupplier(supplierId:number):Observable<Data[]>{
    return this.http.put<Data[]>('https://localhost:44325/api/Supplier/UpdateSupplier',supplierId)
  }
  DeleteSupplier(supplierId:number):Observable<Data>{
    let params=new HttpParams();
    params=params.append('supplierId',supplierId);
    return this.http.delete<Data>(`https://localhost:44325/api/Supplier/DeleteSupplier/${supplierId}`)
  }
}

