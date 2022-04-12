import{HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Supplier } from './Model/supplier';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  constructor(private http:HttpClient){}
  getAll():Observable<Supplier[]>{
    return this.http.get<Supplier[]>('https://localhost:44325/api/Supplier/GetSupplier'); 
  }

  
}
