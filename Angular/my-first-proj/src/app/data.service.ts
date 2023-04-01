import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from './product';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  json_url = "https://jsonplaceholder.typicode.com/users"

  constructor(private http:HttpClient) { }

  products:Product[] = [
    {id:1, name:'Product 1', description:'Description 1', type:'Mobile'},
    {id:2, name:'Product 1', description:'Description 1', type:'Mobile'},
    {id:3, name:'Product 1', description:'Description 1', type:'Mobile'},
    {id:4, name:'Product 1', description:'Description 1', type:'Laptop'}
  ]

  getProducts(type:string):Observable<Product[]>{
    const product = this.products.filter(p =>p.type === type)
    return of(product);
  }

  getDataFromServer():Observable<any[]>{
    return this.http.get<any[]>(this.json_url);
  }



 
}
