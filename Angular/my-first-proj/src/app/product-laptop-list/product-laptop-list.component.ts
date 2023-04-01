import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from '../data.service';
import { Product } from '../product';

@Component({
  selector: 'app-product-laptop-list',
  templateUrl: './product-laptop-list.component.html',
  styleUrls: ['./product-laptop-list.component.css']
})
export class ProductLaptopListComponent implements OnInit{

  constructor(private ds:DataService){}
  sub:Subscription;
  products:Product[];


ngOnInit(): void {
    this.sub = this.ds.getProducts('Laptop')
    .subscribe({
      next: productsFromObs => this.products=productsFromObs,
      error: err=>console.log(err),
      complete: ()=>console.log('complete')
    });    
    }
}
