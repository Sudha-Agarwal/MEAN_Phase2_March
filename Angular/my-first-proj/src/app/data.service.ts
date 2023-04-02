import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from './product';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  json_url = "https://jsonplaceholder.typicode.com/users";

  //base_url = "http://localhost:8080";

  headers:HttpHeaders;
  dataTosend = {id:1,name:"Sudha"};


  constructor(private http:HttpClient) { 
    this.headers = new HttpHeaders().set('content-type','application/json');
    
  }


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

  getDatafromServer1(){
    return this.http.get(this.json_url,{headers:this.headers})
  } 

  postDataToServer(id:number,username:string){
    return this.http.post(this.json_url,{id,username},{headers:this.headers});
  }

  postDataToNodeServer(id:number,username:string):Observable<any>{
    return this.http.post<any>('api/data',{id,username});
  }

  getQuiz():Observable<any[]>{
    return this.http.get<any[]>('api/quiz');
  }

  createNewUser(value:any){
    return this.http.post('api/register-user',value);
  }
}
